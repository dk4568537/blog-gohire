import React from 'react'
import Navbar from '@/app/Component/Navber'
import QuickBooks from '@/app/Component/QuickBooks'
import Futures from '@/app/Component/Futures'
import OurBlog from '@/app/Component/OurBlog'
import Frequency from '@/app/Component/Frequency'
import JoinCommunity from '@/app/Component/JoinCommunity'
import Footer from '@/app/Component/Footer'



const page = () => {
  return (
    <div>
      <Navbar/>
      <QuickBooks/>
      <Futures/>
      <OurBlog/>
      <Frequency/>
      <JoinCommunity/>
      <Footer/>
    </div>
  )
}

export default page