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

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/project' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}
