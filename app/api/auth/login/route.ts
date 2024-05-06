import { cookies } from "next/headers"

import { http } from "@/lib/http"
import { LoginBodyType, LoginResType } from "@/lib/schemas/auth.schema"

export async function POST(request: Request) {
  const res = (await request.json()) as LoginBodyType
  const cookieStore = cookies()

  try {
    const { data }: { data: LoginResType } = await http.post(`/auth/login`, res)
    const payload = data.data
    cookieStore.set("token", payload.token, {
      httpOnly: true,
      expires: new Date(payload.expiresAt),
      path: "/",
      sameSite: "lax",
      secure: true,
    })
    cookieStore.set("refreshToken", payload.token, {
      httpOnly: true,
      expires: new Date(payload.expiresAt),
      path: "/",
      sameSite: "lax",
      secure: true,
    })
    return Response.json({ message: data.message }, { status: 200 })
  } catch (error) {
    return Response.json(
      { message: "Email or password is incorrect" },
      {
        status: 400,
      }
    )
  }
}
