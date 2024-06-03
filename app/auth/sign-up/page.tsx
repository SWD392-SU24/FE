import { Metadata } from "next"

import SignUpFormStep from "@/containers/signup-page/signup-form-step"
import StepButton from "@/containers/signup-page/step-button"
import SignUpFormProvider from "@/contexts/signup-form-provider"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to DentiCare",
}
export default function SignUpPage() {
  return (
    <div className="w-full flex-1 py-28 md:px-16">
      <div className="flex h-full flex-col gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <SignUpFormStep />
            <StepButton />
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}
