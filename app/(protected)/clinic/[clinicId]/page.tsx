import React from "react"

import { ContentLayout } from "@/components/content-layout"

export default function Page({ params }: { params: { clinicId: string } }) {
  return (
    <ContentLayout title="Dashboard">
      {`Dashboard ${params.clinicId}`}
    </ContentLayout>
  )
}
