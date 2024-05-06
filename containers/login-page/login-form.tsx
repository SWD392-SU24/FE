"use client"

import { useRouter, useSearchParams } from "next/navigation"

import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { httpServer } from "@/lib/http"
import { LoginBody, LoginBodyType } from "@/lib/schemas/auth.schema"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import PasswordInput from "@/components/password-input"

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: LoginBodyType) {
    const res = await httpServer.post(`api/auth/login`, values)
    const { message } = res.data
    if (res.status === 200) {
      toast.success(message)
      router.push(callbackUrl || DEFAULT_LOGIN_REDIRECT)
    } else {
      toast.error(message)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label>Email</Label>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label>Password</Label>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          loading={form.formState.isSubmitting}
          className="w-full"
        >
          Login
        </Button>
      </form>
    </Form>
  )
}
