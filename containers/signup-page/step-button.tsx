"use client"

import Link from "next/link"

import useSignupStepStore from "@/stores/signup-step-store"

import { Button } from "@/components/ui/button"

export default function StepButton() {
  const { currentStep, setCurrentStep } = useSignupStepStore()

  if (currentStep === 2) {
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <div className="flex w-full items-center gap-x-2">
          <Button
            variant="outline"
            type="button"
            className="w-full"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </Button>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </div>
        <p>
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="font-semibold text-primary underline hover:text-primary/85"
          >
            Sign In
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <Button
        type="submit"
        className="w-full"
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Continue
      </Button>
      <p>
        Already have an account?{" "}
        <Link
          href="/auth/sign-in"
          className="font-semibold text-primary underline hover:text-primary/85"
        >
          Sign In
        </Link>
      </p>
    </div>
  )
}
