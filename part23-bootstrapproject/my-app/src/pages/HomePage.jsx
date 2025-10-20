import React from "react"

import AboutUs from '../components/AboutUs'
import BackToTop from '../components/BackToTop'
import Contact from '../components/Contact'
import Customers from '../components/Customers'
import Furniture from '../components/Furniture'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Properties from '../components/Properties'
import Services from '../components/Services'
import Clients from "../components/Clients"
import Adv from "../components/Adv"
import Quote from "../components/Quote"

const HomePage = ()=>{
    return (
        <>
            <Header/>
            <Navbar/>
            <AboutUs/>

            
       
            
            <Properties/>
            <Adv/>
            <Services/>
            <Clients/>

            <Customers/>
            <Quote/>
            <Furniture/>
            <Contact/>

            <BackToTop/>
            
        </>
    )
};

export default HomePage;