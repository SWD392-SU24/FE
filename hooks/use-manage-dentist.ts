import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { PageList } from "@/types/page.interface"
import {
  AddUserRequest,
  IUserDashboard,
  UpdateUserRequest,
} from "@/types/user.interface"

import http from "@/lib/http"

export function useGetAllDentist(pageIndex: number) {
  const { data, isLoading, error, isSuccess } = useQuery<
    PageList<IUserDashboard>
  >({
    queryKey: ["dentists", pageIndex],
    queryFn: async () => {
      const response = await http.get(
        `/api/v1/denti-care/users?role=DE&pageNumber=${pageIndex}`
      )
      return response.data
    },
  })
  return { data, isLoading, error, isSuccess }
}

export function useAddDentist() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (dentistRequest: AddUserRequest) => {
      await http.post(`/api/v1/denti-care`, dentistRequest)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["dentists"] })
    },
  })
}

export function useUpdateDentist() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (dentistRequest: UpdateUserRequest) => {
      const { id, ...data } = dentistRequest
      await http.put(`/api/v1/denti-care/${id}`, { ...data, role: "DE" })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["dentists"] })
    },
  })
}

export function useDeleteDentist() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (dentistId: string) => {
      await http.delete(`/api/v1/denti-care/${dentistId}`)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["dentists"] })
    },
  })
}
