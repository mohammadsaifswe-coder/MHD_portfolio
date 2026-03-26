import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/global/Footer'
import AboutPage from './pages/AboutPage'
import Header from './components/global/Header'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}
