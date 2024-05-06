import React from "react"

import RegisterForm from "@/containers/register-page/register-form"

import { Card } from "@/components/ui/card"

export default function Register() {
  return (
    <Card className="w-[25rem] p-4 lg:w-[calc(40vw-4rem)] ">
      <h1 className="text-3xl font-bold">Register</h1>
      <div className="mt-4">
        <RegisterForm />
      </div>
    </Card>
  )
}
