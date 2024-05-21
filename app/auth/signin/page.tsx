import React from "react"

import Link from "next/link"

import SignInForm from "@/containers/signin-page/signin-form"

import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div className="grid-col-1 grid p-8  lg:grid-cols-2">
      <section className="col-span-1 inline-flex flex-col items-center justify-center lg:min-h-[600px]">
        <div className="w-80">
          <div className="flex flex-col items-start justify-start space-y-2">
            <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-primary">
              Welcome Back
            </h2>
            <div className="text-sm font-normal leading-loose tracking-tight text-slate-700">
              Sign in to DentiCare for a beautiful smile.
            </div>
          </div>

          <div className="mt-10">
            <SignInForm />
          </div>

          <div className="relative mt-10 w-full">
            <Separator className="absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-2 text-foreground">or</span>
            </div>
          </div>

          <div className="mt-20 space-y-4">
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Facebook
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <span>Don&apos;t have an account?</span>
            <Link
              href="/auth/register"
              className={buttonVariants({
                variant: "link",
              })}
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
      <section className="col-span-1 hidden lg:block">
        <div className="h-full w-full rounded-3xl ">
          <img
            className="h-[600px] w-[816px] rounded-3xl"
            src="https://via.placeholder.com/816x600"
          />
        </div>
      </section>
    </div>
  )
}
