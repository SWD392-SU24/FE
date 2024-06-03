import React from "react"

import AboutUsContact from "@/containers/aboutus-page/about-us-contact"
import AboutUsHero from "@/containers/aboutus-page/about-us-hero"
import AboutUsService from "@/containers/aboutus-page/about-us-service"
import AboutUsStory from "@/containers/aboutus-page/about-us-story"
import AboutUsTeam from "@/containers/aboutus-page/about-us-team"

export default function AboutUs() {
  return (
    <div>
      <AboutUsHero />
      <AboutUsStory />
      <AboutUsService />
      <AboutUsTeam />
      <AboutUsContact />
    </div>
  )
}
