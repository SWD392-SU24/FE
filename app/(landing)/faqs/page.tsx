import React from "react"

import AccordionFaq from "@/containers/faqs-page/faq-accordion"
import ContactCardFaq from "@/containers/faqs-page/faq-contact"
import FaqsHero from "@/containers/faqs-page/faq-hero"
import ServiceCardFaq from "@/containers/faqs-page/faq-service"

export default function FAQ() {
  return (
    <div>
      <FaqsHero />
      <AccordionFaq />
      <ServiceCardFaq />
      <ContactCardFaq />
    </div>
  )
}
