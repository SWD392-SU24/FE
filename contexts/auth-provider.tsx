"use client"

import React, { useContext, useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { toast } from "sonner"

import { UserType } from "@/lib/schemas/user.schema"

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextType = {
  isAuthenticated: boolean
  loading: boolean
  user: UserType | null
  setUser: (user: UserType | null) => void
  login: (userData: UserType) => void
  logout: () => void
}

export const AuthContext = React.createContext<AuthContextType | null>(null)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      try {
        setLoading(true)
      } catch (error) {
        // TODO: handle error in auth
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  const login = (userData: UserType) => {
    setUser(userData)
    setIsAuthenticated(true)
  }

  const logout = async () => {
    try {
      setLoading(true)
      router.push("/")
    } catch (error) {
      toast.error("An error occurred while logging out")
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, setUser, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}
