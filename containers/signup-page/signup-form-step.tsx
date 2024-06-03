"use client"

import SignUpFormDetail from "@/containers/signup-page/signup-form-detail"
import UserTypeSelectionForm from "@/containers/signup-page/user-type-selection-form"
import useSignupStepStore from "@/stores/signup-step-store"
import { useFormContext } from "react-hook-form"

export default function SignUpFormStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const { currentStep, userType, setUserType } = useSignupStepStore()

  switch (currentStep) {
    case 1:
      return (
        <UserTypeSelectionForm
          register={register}
          userType={userType}
          setUserType={setUserType}
        />
      )
    case 2:
      return <SignUpFormDetail register={register} errors={errors} />
    default:
      return null
  }
}
