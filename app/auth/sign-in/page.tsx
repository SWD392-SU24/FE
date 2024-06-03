import { Metadata } from "next"
import Link from "next/link"

import SignInForm from "@/containers/signin-page/signin-form"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to DentiCare",
}

export default function Page() {
  return (
    <div className="w-full flex-1 py-28 md:px-16">
      <div className="flex h-full flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-gravel md:text-4xl">Sign in</h2>
          <p className="text-iridium md:text-sm">
            Ready to smile brighter ? Sign in to join the DentiCare family!
          </p>
          <SignInForm />
          <div className="flex w-full flex-col items-center gap-3">
            <p>
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="font-semibold text-primary underline hover:text-primary/85"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
