import React from "react"

import Image from "next/image"

const partners = [
  {
    name: "Amazon",
    logo: "/assets/amazon.png",
  },
  {
    name: "Google",
    logo: "/assets/google.png",
  },
  {
    name: "PayPal",
    logo: "/assets/paypal.png",
  },
  {
    name: "Shopify",
    logo: "/assets/shopify.png",
  },
  {
    name: "Spotify",
    logo: "/assets/spotify.png",
  },
]

export default function Partners() {
  return (
    <section className="bg-gray-100 py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <div className="p-4">
                <Image
                  src={partner.logo}
                  className="avatar avatar-client"
                  alt={partner.name}
                  width={130}
                  height={130}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
