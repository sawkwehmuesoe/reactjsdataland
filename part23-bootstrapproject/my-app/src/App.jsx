import React from 'react'
import { BrowserRouter as Router ,Routes, Route , Link } from 'react-router'
import './App.css'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PropertiesPage from './pages/PropertiesPage'
import ServicePage from './pages/ServicePage.jsx'
import CustomerPage from './pages/CustomerPage.jsx'
import FurniturePage from './pages/FurniturePage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
              <Route path='/' element={<HomePage/>} />    
              <Route path='/abouts' element={<AboutPage/>} />    
              <Route path='/properties' element={<PropertiesPage/>} />    
              <Route path='/services' element={<ServicePage/>} />    
              <Route path='/customers' element={<CustomerPage/>} />    
              <Route path='/furnitures' element={<FurniturePage/>} />    
              <Route path='/contacts' element={<ContactPage/>} />              
            </Routes>
        </Router>
    </div>
  )
}

export default App
