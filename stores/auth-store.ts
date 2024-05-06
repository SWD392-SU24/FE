import { create } from "zustand"

import { IUser } from "@/types/user.interface"

interface IAuthStore {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  user: IUser | null
  setUser: (user: IUser) => void
}

const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUser: (user) => set({ user }),
}))

export default useAuthStore
