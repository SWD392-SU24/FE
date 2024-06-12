"use client"

import React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { BadgeCheck, BadgeMinus, BadgeX, Building2, User } from "lucide-react"

import { Card } from "@/components/ui/card"

interface ClinicCardProps {
  clinicName: string
  address: string
  clinicId: string
  status: "verified" | "denied" | "pending"
  imgUrl?: string
  area: string
}

export default function ClinicCard({
  clinicName,
  address,
  clinicId,
  status = "pending",
  imgUrl = "/clinic/clinic-1.jpg",
  area,
}: ClinicCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/dashboard/clinic/${clinicId}`)
  }
  return (
    <Card
      className="block cursor-pointer rounded-lg p-4 shadow-sm shadow-blue-100 hover:bg-zinc-100"
      onClick={handleClick}
    >
      <Image
        src={imgUrl}
        alt="clinic"
        width={400}
        height={400}
        className="h-56 w-full rounded-md object-cover"
      />
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Clinic Name</dt>

            <dd className="text-sm text-gray-500">{clinicName}</dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-medium">{address}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 flex items-center gap-8 text-xs">
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          {status === "verified" && (
            <React.Fragment>
              <BadgeCheck className="h-4 w-4 text-primary" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Status</p>

                <p className="font-medium">Verified</p>
              </div>
            </React.Fragment>
          )}
          {status === "denied" && (
            <React.Fragment>
              <BadgeX className="h-4 w-4 text-red-500" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Status</p>

                <p className="font-medium">Denied</p>
              </div>
            </React.Fragment>
          )}
          {status === "pending" && (
            <React.Fragment>
              <BadgeMinus className="h-4 w-4 text-yellow-500" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Status</p>

                <p className="font-medium">Pending</p>
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <User className="h-4 w-4 text-primary" />
          <div className="mt-1.5 sm:mt-0">
            <p className="text-gray-500">Dentist</p>

            <p className="font-medium">123</p>
          </div>
        </div>
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <Building2 className="h-4 w-4 text-primary" />
          <div className="mt-1.5 sm:mt-0">
            <p className="text-gray-500">Area</p>

            <p className="font-medium">{area}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
