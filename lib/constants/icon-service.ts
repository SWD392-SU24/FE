import { HeartPulse, Pill } from "lucide-react"

export const ICON_SERVICE = {
  title: "icons",
  links: [
    { label: "Heart", icon: HeartPulse, description: "Heart pulse" },
    {
      label: "Doctors Timetable",
      icon: Pill,
      description: "Doctors timetable",
    },
    { label: "Opening Hours", icon: Pill, description: "Opening hours" },
    { label: "Primary Care", icon: Pill, description: "Primary care" },
    { label: "Dental Care", icon: Pill, description: "Dental care" },
    { label: "Orthopedic", icon: Pill, description: "Orthopedic" },
    { label: "Cardiology", icon: Pill, description: "Cardiology" },
    { label: "Gynecology", icon: Pill, description: "Gynecology" },
  ],
} as const
