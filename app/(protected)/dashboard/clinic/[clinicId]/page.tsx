export default function Page({ params }: { params: { clinicId: string } }) {
  return <div>This is dashboard/clinic/{params.clinicId}</div>
}
