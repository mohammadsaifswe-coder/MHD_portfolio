import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/global/Footer'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
