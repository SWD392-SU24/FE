import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionFaq() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h4 className="text-2xl font-bold">General Questions</h4>
          <p className="text-gray-500">
            Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment, or a simple consultation.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 rounded-lg border border-gray-200">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="border-b border-gray-200 bg-gray-50 px-6 py-4 font-medium">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="border-b border-gray-200 bg-gray-50 px-6 py-4 font-medium">
                  Is it styled?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  Yes. It comes with default styles that match the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="border-b border-gray-200 bg-gray-50 px-6 py-4 font-medium">
                  Is it animated?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
