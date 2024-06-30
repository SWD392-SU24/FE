"use server"

import http from "@/lib/http"
import { DentistResType } from "@/lib/schemas/dentist.schema"

export const getDentistsByClinicId = async (clinicId: string) => {
  try {
    const url = `/api/v1/denti-care/clinic/${clinicId}/dentists`
    const { data } = await http.get<DentistResType>(url)
    return data.response
  } catch (error) {
    return undefined
  }
}
