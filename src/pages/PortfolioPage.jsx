import ExploreProjects from '@/components/portfolioPage/ExploreProjects'
import PortfolioBanner from '@/components/portfolioPage/PortfolioBanner'
import PortfolioSection from '@/components/portfolioPage/PortfolioSection'
import React from 'react'

export default function PortfolioPage() {
  return (
    <>
      <PortfolioBanner/>
      <PortfolioSection/>
      <ExploreProjects/>
    </>
  )
}
