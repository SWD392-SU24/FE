import { Metadata } from "next"
import Link from "next/link"

import SignInForm from "@/containers/signin-page/signin-form"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to DentiCare",
}

export default function Page() {
  return (
    <div className="grid-col-1 grid   lg:grid-cols-3">
      <section className="col-span-1 inline-flex min-h-screen flex-col items-center justify-center">
        <div className="w-80">
          <div className="flex flex-col items-start justify-start space-y-2">
            <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-primary">
              Welcome Back
            </h2>
            <div className="text-sm font-normal leading-loose tracking-tight text-slate-700">
              Sign in to DentiCare for a beautiful smile.
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Facebook
            </Button>
          </div>

          <div className="relative mt-10 w-full">
            <Separator className="absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-2 text-foreground">or</span>
            </div>
          </div>

          <div className="mt-20 ">
            <SignInForm />
          </div>

          <div className="mt-6 flex items-center justify-center text-xs">
            <span>Don&apos;t have an account?</span>
            <Link
              href="/auth/register"
              className="ml-1 font-semibold text-primary underline"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
      <section className="col-span-2 hidden border border-l lg:block">
        <div className="h-full w-full  bg-slate-100 shadow-md" />
      </section>
    </div>
  )
}
