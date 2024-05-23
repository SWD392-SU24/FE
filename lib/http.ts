import { env } from "@/env.mjs"
import axios from "axios"

const http = axios.create({
  baseURL: env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
})

export default http
