export const FOOTER_COMPANY_INFO = {
  title: "Company",
  links: [
    { label: "About Us", url: "/about-us" },
    {
      label: "Service",
      url: "service",
    },
  ],
} as const

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "support-center@vito.com" },
  ],
} as const

export const SOCIALS = {
  title: "Social",
  links: ["/facebook.svg", "/instagram.svg", "/youtube.svg"],
} as const
