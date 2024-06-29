"use server"

import http from "@/lib/http"
import { FeedbackResType } from "@/lib/schemas/feedback.schema"

export const getFeedbackByClinicId = async (
  clinicId: string,
  fromDate?: string,
  toDate?: string
) => {
  try {
    const url =
      fromDate && toDate
        ? `/api/v1/denti-care/clinic/${clinicId}/feedback?fromDate=${fromDate}&toDate=${toDate}`
        : `/api/v1/denti-care/clinic/${clinicId}/feedback`
    const { data } = await http.get<FeedbackResType>(url)
    return data.response
  } catch (error) {
    return undefined
  }
}
