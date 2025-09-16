import React from 'react'
import { Routes, Route } from 'react-router' 

import Navbar from './components/Navbar.jsx'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PropertiePage from './pages/PropertiePage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import CustomerPage from './pages/CustomerPage.jsx'
import FurniturePage from './pages/FurniturePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div className="App">
       
          <Navbar/>
            <Routes>
              <Route path='/' element={<HomePage/>} />    
              <Route path='/abouts' element={<AboutPage/>} />    
              <Route path='/properties' element={<PropertiePage/>} />    
              <Route path='/services' element={<ServicePage/>} />    
              <Route path='/customers' element={<CustomerPage/>} />    
              <Route path='/furnitures' element={<FurniturePage/>} />    
              <Route path='/contacts' element={<ContactPage/>} />              
            </Routes>
          <Footer/>
    </div>
  )
}

export default App
