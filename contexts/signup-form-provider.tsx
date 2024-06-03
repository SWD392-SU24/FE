"use client"

import React from "react"

import useSignupStepStore from "@/stores/signup-step-store"
import { FormProvider } from "react-hook-form"

import { useSignUpForm } from "@/hooks/use-signup-form"

import { Loader } from "@/components/loader"

type Props = {
  children: React.ReactNode
}

function SignUpFormProvider({ children }: Props) {
  const { userType } = useSignupStepStore()
  const { form, onHandleSubmit, loading } = useSignUpForm({
    userType,
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={onHandleSubmit} className="h-full">
        <div className="flex h-full flex-col justify-between gap-3">
          <Loader loading={loading}>{children}</Loader>
        </div>
      </form>
    </FormProvider>
  )
}

export default SignUpFormProvider
