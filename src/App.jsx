import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/global/Footer'
import AboutPage from './pages/AboutPage'
import Header from './components/global/Header'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import ScrollToTop from './components/global/ScrollToTop'
import { domAnimation, LazyMotion } from 'framer-motion'
import PopUpForm from './components/global/PopUpForm'
import { FormProvider } from './context/FormContext'

export default function App() {
  return (
    <>
      <FormProvider>

        <PopUpForm />
        <LazyMotion features={domAnimation}>

          <Header />
          <ScrollToTop />
          <main id="main-content">

            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/services' element={<ServicePage />} />
              <Route path='/project' element={<PortfolioPage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </LazyMotion>
      </FormProvider>

    </>
  )
}
