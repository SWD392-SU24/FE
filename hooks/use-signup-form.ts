"use client"

import React from "react"

import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import http from "@/lib/http"
import {
  SignUpCustomerSchema,
  SignUpCustomerType,
  SignUpOwnerSchema,
  SignUpOwnerType,
} from "@/lib/schemas/auth.schema"

export function useSignUpForm({
  userType = "customer",
}: {
  userType: "customer" | "owner"
}) {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const schema =
    userType === "customer" ? SignUpCustomerSchema : SignUpOwnerSchema
  const defaultValues =
    userType === "customer"
      ? {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmedPassword: "",
        }
      : {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmedPassword: "",
          citizenId: "",
        }

  const form = useForm<SignUpCustomerType | SignUpOwnerType>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  })

  const onHandleSubmit = form.handleSubmit(
    async (values: SignUpCustomerType | SignUpOwnerType) => {
      try {
        setLoading(true)
        const res = await http.post(
          userType === "customer"
            ? "/api/v1/denti-care/sign-up/customer"
            : "/api/v1/denti-care/sign-up/clinic-owner",
          values
        )
        if (res.status === 200) {
          setLoading(false)
          toast.success("Sign up successfully")
          router.push("/auth/sign-in")
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage =
            error.response?.data?.message ??
            "An error occurred while signing up."
          toast.error(errorMessage)
        } else {
          toast.error("An unexpected error occurred while signing up.")
        }
      } finally {
        setLoading(false)
      }
    }
  )

  return {
    form,
    loading,
    onHandleSubmit,
  }
}
