"use client"

import React from "react"

import FormGenerator from "@/containers/signup-page/form-generator"
import useSignupStepStore from "@/stores/signup-step-store"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

import { ScrollArea } from "@/components/ui/scroll-area"

type Props = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}
export default function SignUpFormDetail({ register, errors }: Props) {
  const { userType } = useSignupStepStore()
  return (
    <React.Fragment>
      <h2 className="font-bold text-gravel md:text-4xl">Account details</h2>
      <p className="text-iridium md:text-sm">
        Please enter your information to sign up for DentiCare.
      </p>
      <ScrollArea className="h-96 w-full">
        {userType === "owner" ? (
          <div className="w-full space-y-4 pl-1 pr-4">
            <FormGenerator
              errors={errors}
              register={register}
              inputType="input"
              name="firstName"
              placeholder="First name"
              type="text"
              label="First name"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="input"
              name="lastName"
              placeholder="Last name"
              type="text"
              label="Last name"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="input"
              name="email"
              placeholder="example@gmail.com"
              type="text"
              label="Email"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="input"
              name="citizenId"
              placeholder="Citizen ID"
              type="text"
              label="CitizenId"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="password"
              placeholder="Enter your password"
              name="password"
              type="password"
              label="Password"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="password"
              placeholder="Enter your password"
              name="confirmedPassword"
              type="password"
              label="Confirm password"
            />
          </div>
        ) : (
          <div className="w-full space-y-4 pl-1 pr-4">
            <FormGenerator
              errors={errors}
              register={register}
              inputType="input"
              name="firstName"
              placeholder="First name"
              type="text"
              label="First name"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="input"
              name="lastName"
              placeholder="Last name"
              type="text"
              label="Last name"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="input"
              name="email"
              placeholder="example@gmail.com"
              type="text"
              label="Email"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="password"
              placeholder="Enter your password"
              name="password"
              type="password"
              label="Password"
            />
            <FormGenerator
              errors={errors}
              register={register}
              inputType="password"
              placeholder="Enter your password"
              name="confirmedPassword"
              type="password"
              label="Confirm password"
            />
          </div>
        )}
      </ScrollArea>
    </React.Fragment>
  )
}
