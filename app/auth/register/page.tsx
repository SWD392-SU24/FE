import { Metadata } from "next"
import Link from "next/link"

import RegisterForm from "@/containers/register-page/register-form"

export const metadata: Metadata = {
  title: "Register",
  description: "Register to DentiCare",
}
export default function RegisterPage() {
  return (
    <div className="grid-col-1 grid   lg:grid-cols-3">
      <section className="col-span-1 inline-flex min-h-screen flex-col items-center justify-center">
        <div className="w-80">
          <div className="flex flex-col items-start justify-start space-y-2">
            <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-primary">
              Get Started
            </h2>
            <div className="text-sm font-normal leading-loose tracking-tight text-slate-700">
              Create an account to get started with DentiCare.
            </div>
          </div>

          <div className="mt-10 ">
            <RegisterForm />
          </div>

          <div className="mt-6 flex items-center justify-center text-xs">
            <span>Have an account?</span>
            <Link
              href="/auth/signin"
              className="ml-1 font-semibold text-primary underline"
            >
              Sign In Now
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
