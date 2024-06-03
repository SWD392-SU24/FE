"use client"

import React from "react"

import { Building2, User } from "lucide-react"
import { FieldValues, UseFormRegister } from "react-hook-form"

import { cn } from "@/lib/utils"

import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {
  value: string
  title: string
  text: string
  register: UseFormRegister<FieldValues>
  userType: "owner" | "customer"
  setUserType: (userType: "customer" | "owner") => void
}

function UserTypeCard({
  register,
  setUserType,
  text,
  title,
  userType,
  value,
}: Props) {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          "w-full cursor-pointer",
          userType === value && "border-primary"
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                "flex justify-center p-3",
                userType === value && "border-primary"
              )}
            >
              {value === "customer" ? (
                <User
                  size={30}
                  className={cn(
                    userType === value ? "text-primary" : "text-gray-400"
                  )}
                />
              ) : (
                <Building2
                  size={30}
                  className={cn(
                    userType === value ? "text-primary" : "text-gray-400"
                  )}
                />
              )}
            </Card>
            <div className="">
              <CardDescription className="text-iridium">
                {title}
              </CardDescription>
              <CardDescription className="text-gray-400">
                {text}
              </CardDescription>
            </div>
          </div>
          <div>
            <div
              className={cn(
                "h-4 w-4 rounded-full",
                userType === value ? "bg-primary" : "bg-transparent"
              )}
            >
              <Input
                {...register("type", {
                  onChange: (event) => setUserType(event.target.value),
                })}
                value={value}
                id={value}
                className="hidden"
                type="radio"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  )
}

export default UserTypeCard
