import { getFeedbackByClinicId } from "@/actions/manage-feedback"
import { useQuery } from "@tanstack/react-query"

export function useGetFeedbackByClinicId(
  clinicId: string,
  fromDate?: string,
  toDate?: string
) {
  return useQuery({
    queryKey: ["feedback", clinicId, fromDate, toDate],
    queryFn: () => getFeedbackByClinicId(clinicId, fromDate, toDate),
  })
}
