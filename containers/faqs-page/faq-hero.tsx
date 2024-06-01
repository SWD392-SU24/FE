import React from "react"

export default function FaqsHero() {
  return (
    <div>
      <section
        className=" relative flex h-[400px] w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/assets/faq.jpg')",
        }}
      >
        <div className="container relative z-10 mx-auto text-center">
          <div className="section-title">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}
