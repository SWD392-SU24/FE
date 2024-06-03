import React from "react"

import AboutUsContact from "@/containers/about-us-page/about-us-contact"
import AboutUsHero from "@/containers/about-us-page/about-us-hero"
import AboutUsService from "@/containers/about-us-page/about-us-service"
import AboutUsStory from "@/containers/about-us-page/about-us-story"
import AboutUsTeam from "@/containers/about-us-page/about-us-team"

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
