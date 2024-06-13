import React from 'react'
import Navbar from '../../Reuse/Navbar/Navbar'
import Header from '../../Reuse/Header/Header'
import Banner from './Banner/Banner'
import Popular from './Popular/Popular'
import Success from './Success/Success'
import Graphic from './Graphic/Graphic'
import Web from './Web&Software/Web&Software'
import Digitalmarketing from './Digital-marketing/Digital-marketing'
import Companiesconnected from './Companies-connected/Companiesconnected'
import Footer from '../../Reuse/Footer/Footer'
import Sliderone from './Slider/Slider'
import Payment from '../../Reuse/Payment/Payment'
import Endpart from '../../Reuse/Endpart/Endpart'

const Home = () => {
  return (
    <div>
      <div className='md:visible invisible h-0 md:h-auto '>
      <Header/>
      </div>
      <Navbar/>
      <Banner/>
      <Sliderone/>
      <Popular/>
      <Success/>
      <Graphic/>
      <Web/>
      <Digitalmarketing/>
      <Companiesconnected/>
      <Payment/>
      <Footer/>
      <Endpart/>
    </div>
  )
}

export default Home