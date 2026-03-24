import AboutBanner from '@/components/aboutPage/AboutBanner'
import AboutService from '@/components/aboutPage/AboutService'
import CTAAbout from '@/components/aboutPage/CTAAbout'
import OurAchivements from '@/components/aboutPage/OurAchivements'
import OurExperts from '@/components/aboutPage/OurExperts'
import RecentWorks from '@/components/aboutPage/RecentWorks'
import WhoWeAre from '@/components/aboutPage/WhoWeAre'
import React from 'react'

export default function AboutPage() {
  return (
    <>
        <AboutBanner/>
        <AboutService/>
        <WhoWeAre/>
        <RecentWorks/>
        <OurAchivements/>
        <OurExperts/>
        <CTAAbout/>
    </>
  )
}
