import {
  CalendarDays,
  LayoutDashboard,
  MessageSquareText,
  Settings,
  Tag,
  Users,
} from "lucide-react"

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: any
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

const isClinicWithId = (pathname: string) => {
  // eslint-disable-next-line no-useless-escape
  const clinicIdPattern = /^\/dashboard\/clinics\/[^\/]+$/
  return clinicIdPattern.test(pathname)
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Dashboard",
          active: isClinicWithId(pathname),
          icon: LayoutDashboard,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Clinic",
      menus: [
        {
          href: `/dentists`,
          label: "Manage Dentists",
          active: pathname.includes("/dentists"),
          icon: Users,
          submenus: [],
        },
        {
          href: `/dentist-schedule`,
          label: "Manage Dentist Schedule",
          active: pathname.includes("/dentist-schedule"),
          icon: CalendarDays,
          submenus: [],
        },
        {
          href: "/feedbacks",
          label: "User Feedbacks",
          active: pathname.includes("/feedbacks"),
          icon: MessageSquareText,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ]
}

type OwnerMenu = {
  href: string
  label: string
  active: boolean
}

type OwnerGroup = {
  groupLabel: string
  menus: OwnerMenu[]
}

export function getOwnerMenuList(pathname: string): OwnerGroup[] {
  return [
    {
      groupLabel: "Clinics",
      menus: [
        {
          href: "/dashboard/clinics",
          label: "All clinics",
          active: pathname.includes("/dashboard/clinics"),
        },
      ],
    },
    {
      groupLabel: "Account",
      menus: [
        {
          href: "/account/me",
          label: "Preferences",
          active: pathname.includes("/account/me"),
        },
      ],
    },
  ]
}
