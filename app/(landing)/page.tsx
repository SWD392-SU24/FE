import Calendar from "@/containers/calendar-section/calendar"
import AboutClinic from "@/containers/landing-page/about-clinic"
import Feedback from "@/containers/landing-page/feedback"
import HeroSection from "@/containers/landing-page/hero-section"
import Partners from "@/containers/landing-page/partners"
import ServiceCardSection from "@/containers/landing-page/service-card-section"

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutClinic />
      <ServiceCardSection />
      <Calendar />
      <Feedback />
      <Partners />
    </div>
  )
}
