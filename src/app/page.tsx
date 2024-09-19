import React from 'react'
import Navbar from '@/app/Component/Navber'
import QuickBooks from '@/app/Component/QuickBooks'
import Futures from '@/app/Component/Futures'
import OurBlog from '@/app/Component/OurBlog'


const page = () => {
  return (
    <div>
      <Navbar/>
      <QuickBooks/>
      <Futures/>
      <OurBlog/>
    </div>
  )
}

export default page