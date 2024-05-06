/* eslint-disable max-classes-per-file */
import { env } from "@/env.mjs"
import axios from "axios"

export const http = axios.create({
  baseURL: env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})

export const httpServer = axios.create({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})

type ApiErrorType = {
  message: string
  errors: {
    field: string
    message: string
  }[]
}

export function getApiError(error: any) {
  const res = error?.response?.data as ApiErrorType
  return res
    ? res.errors.map((err) => err.message).join("\n")
    : "Something went wrong"
}
