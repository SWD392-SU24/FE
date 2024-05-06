import React from "react"

import { Metadata } from "next"

import LoginForm from "@/containers/login-page/login-form"

import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function Login() {
  return (
    <Card className="w-[25rem] p-4 lg:w-[calc(40vw-4rem)] ">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <div className="mt-4">
        <LoginForm />
      </div>
    </Card>
  )
}
