import { getDentistsByClinicId } from "@/actions/manage-dentist"
import { useQuery } from "@tanstack/react-query"

export function useGetDentistsByClinicId(clinicId: string) {
  return useQuery({
    queryKey: ["dentists", clinicId],
    queryFn: () => getDentistsByClinicId(clinicId),
  })
}
