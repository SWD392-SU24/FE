import Link from "next/link"

import ClinicCard from "@/containers/owner-dashboard-page/clinic-card"
import Header from "@/containers/owner-dashboard-page/header"
import { ListFilter } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <div className="">
      <Header title="Clinics" />
      <div className="mx-8 my-6">
        <div className="flex items-center gap-4">
          <div className="flex min-w-[500px] items-center gap-4">
            <Input placeholder="Search for a clinic" />
            <Link
              href="/dashboard/clinic/new"
              className={buttonVariants({
                size: "sm",
              })}
            >
              New Clinic
            </Link>
          </div>
          <div className="flex flex-1 justify-end">
            <Button variant="outline" size="sm" className="flex items-center">
              <ListFilter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <ClinicCard
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                area="HCM"
                status="pending"
                clinicId="123131"
                clinicName="Clinic 1"
                address="123 Wallaby Avenue, Park Road"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
