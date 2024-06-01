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

export const ICON_SERVICE_FAQ = {
  title: "icons",
  links: [
    {
      label: "Heart",
      icon: HeartPulse,
      description:
        "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      label: "Opening Hours",
      icon: Pill,
      description:
        "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    {
      label: "Primary Care",
      icon: Pill,
      description:
        "There is now an abundance of readable dummy texts required purely to fill a space.",
    },
    //   { label: "Dental Care", icon: Pill, description: "Dental care" },
    //   { label: "Orthopedic", icon: Pill, description: "Orthopedic" },
    //   { label: "Cardiology", icon: Pill, description: "Cardiology" },
    //   { label: "Gynecology", icon: Pill, description: "Gynecology" },
  ],
} as const

export const ICON_SERVICE_CONTACT = {
  title: "icons",
  links: [
    {
      label: "Phone Officer",
      icon: Pill,
      description:
        "There is now an abundance of readable dummy texts required purely to fill a space.",
      value: "123-456-7890",
    },
    {
      label: "Email Officer",
      icon: Pill,
      description:
        "There is now an abundance of readable dummy texts required purely to fill a space.",
      value: "support-center@denticare.com",
    },
  ],
} as const
