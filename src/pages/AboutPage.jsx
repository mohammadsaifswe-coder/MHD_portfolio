import AboutBanner from '@/components/aboutPage/AboutBanner'
import AboutContact from '@/components/aboutPage/AboutContact'
import AboutService from '@/components/aboutPage/AboutService'
import CTAAbout from '@/components/aboutPage/CTAAbout'
import Expertise from '@/components/aboutPage/Expertise'
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
        <Expertise/>
        <OurAchivements/>
        <OurExperts/>
        <CTAAbout/>
        <AboutContact/>
    </>
  )
}
