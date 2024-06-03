"use client"

import React from "react"

import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import http from "@/lib/http"
import { SignInSchema, SignInType } from "@/lib/schemas/auth.schema"

export default function useSignInForm() {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  })

  const onHandleSubmit = form.handleSubmit(async (values: SignInType) => {
    try {
      setLoading(true)
      const res = await http.post("/api/v1/denti-care/sign-in", values)
      if (res.status === 200) {
        setLoading(false)
        toast.success("Sign in successfully")
        router.push("/")
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message ?? "An error occurred while signing in."
        toast.error(errorMessage)
      } else {
        toast.error("An unexpected error occurred while signing in.")
      }
    } finally {
      setLoading(false)
    }
  })

  return { form, onHandleSubmit, loading }
}
