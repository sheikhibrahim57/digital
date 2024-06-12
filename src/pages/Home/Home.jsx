import React from 'react'
import Navbar from '../../Reuse/Navbar/Navbar'
import Header from '../../Reuse/Header/Header'
import Banner from './Banner/Banner'
import Slider from './Slider/Slider'
import Popular from './Popular/Popular'
import Success from './Success/Success'
import Graphic from './Graphic/Graphic'
import Web from './Web&Software/Web&Software'
import Digitalmarketing from './Digital-marketing/Digital-marketing'
import Companiesconnected from './Companies-connected/Companiesconnected'
import Footer from './Footer/Footer'
import Sliderone from './Slider/Slider'
import Payment from './Payment/Payment'
import Endpart from './Endpart/Endpart'

const Home = () => {
  return (
    <div>
      <div className='bg-[#faf0f0]'>
        <Header/>
        <Navbar/>
        <Banner/>
      </div>
      <Sliderone/>
      <Popular/>
      <Success/>
      <Graphic/>
      <Web/>
      <Digitalmarketing/>
      <Companiesconnected/>
      <Footer/>
      <Payment/>
      <Endpart/>
    </div>
  )
}

export default Home