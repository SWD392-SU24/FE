import { RegisterResType } from "@/lib/schemas/auth.schema"

export async function POST(request: Request) {
  const res: RegisterResType = await request.json()
  const { token, expiresAt } = res.data
  const expiresDate = new Date(expiresAt).toUTCString()

  if (!token) {
    return Response.json(
      { message: "Token not found" },
      {
        status: 400,
      }
    )
  }

  return Response.json(
    { res },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}; Path=/; HttpOnly; Expires=${expiresDate}; SameSite=Lax; Secure`,
      },
    }
  )
}
