"use client"

import Link from "next/link"

import useSignInForm from "@/hooks/use-signin-form"

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

export default function SignInForm() {
  const { form, loading, onHandleSubmit } = useSignInForm()

  return (
    <Form {...form}>
      <form onSubmit={onHandleSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label>Email</Label>
              <FormControl>
                <Input placeholder="Example@email.com" {...field} />
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
              <div className="flex items-center justify-between">
                <Label>Password</Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs font-semibold text-primary underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          loadingText="Sign in"
          isLoading={loading}
          disabled={loading}
        >
          Sign in
        </Button>
      </form>
    </Form>
  )
}
