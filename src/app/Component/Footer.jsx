import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10'>
      {/* Grid for the footer content */}
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-5'>
        {/* Section 1 */}
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='text-lg font-bold'>Get support</li>
            <li>Help Center</li>
            <li>Live chat</li>
            <li>Check order status</li>
            <li>Refunds</li>
            <li>Report abuse</li>
          </ul>
        </div>
        {/* Section 2 */}
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='text-lg font-bold'>Trade Assurance</li>
            <li>ASafe and easy payments</li>
            <li>Money-back policy</li>
            <li>On-time shipping</li>
            <li>After-sales protections</li>
            <li>Product monitoring services</li>
          </ul>
        </div>
        {/* Section 3 */}
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='text-lg font-bold'>Source on gohire.com</li>
            <li>Request for Quotation</li>
            <li>Membership program</li>
            <li>Sales tax and VAT</li>
          </ul>
        </div>
        {/* Section 4 */}
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='text-lg font-bold'>Sell on gohire.com</li>
            <li>Start selling</li>
            <li>Seller Central</li>
            <li>Become a Verified Supplier</li>
            <li>Partnerships</li>
            <li>Download the app for suppliers</li>
          </ul>
        </div>
        {/* Section 5 */}
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='text-lg font-bold'>Get to know us</li>
            <li>About gohire.com</li>
            <li>Corporate responsibility</li>
            <li>News center</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      {/* Social media icons */}
      <div className='container mx-auto flex pl-4 gap-4 mt-8'>
        <Image src="/images/FacebookImg.svg" alt="Facebook" width={30} height={30} />
        <Image src="/images/LinkidinImg.svg" alt="LinkedIn" width={30} height={30} />
        <Image src="/images/TwitterImg.svg" alt="Twitter" width={30} height={30} />
        <Image src="/images/InstagramImg.svg" alt="Instagram" width={30} height={30} />
        <Image src="/images/YoutubeImg.svg" alt="YouTube" width={30} height={30} />
        <Image src="/images/TiktokImg.svg" alt="TikTok" width={30} height={30} />
      </div>
    </footer>
  )
}

export default Footer
