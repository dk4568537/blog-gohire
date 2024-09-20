"use client"
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import videoimg from '../../../public/images/Video-img.svg';

const QuickBooks = () => {
  const [activeContent, setActiveContent] = useState('');
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY); // For vertical scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  // Conditionally set width based on scrollValue and apply smooth transition
  const imageWidthClass = scrollValue >= 800 ? `w-[650px]` : scrollValue >= 620  ?'w-[780px]': scrollValue >= 520  ?'w-[900px]': 'w-full';


  return (
    <div className='bg-black pb-5'>
      <div className="flex justify-center flex-wrap items-center gap-2 sm:gap-14 pb-5 pt-8">
        <Button colorScheme='whiteAlpha' variant='ghost' onClick={() => handleButtonClick('QuickBooks')}>
          QuickBooks
        </Button>
        <Button colorScheme='whiteAlpha' variant='ghost' onClick={() => handleButtonClick('Chat')}>
          Chat
        </Button>
        <Button colorScheme='whiteAlpha' variant='ghost' onClick={() => handleButtonClick('Product')}>
          Product
        </Button>
        <Button colorScheme='whiteAlpha' variant='ghost' onClick={() => handleButtonClick('Vendor Registration')}>
          Vendor Registration
        </Button>
        <Button colorScheme='whiteAlpha' variant='ghost' onClick={() => handleButtonClick('Xero')}>
          Xero
        </Button>
      </div>

      {/* Conditionally render content based on active button */}
      <div className="w-full py-5">
        {activeContent == "QuickBooks" && (
          <div className=' flex justify-center items-center'>
            <Image
              className={`sm:h-[600px] ${imageWidthClass} transition-all ease-in-out duration-700`} 
              src={videoimg} 
              alt="" 
            />
          </div>
        )}
        {activeContent == "Chat" && (
          <div className=' flex justify-center items-center'>
            <Image
              className={`sm:h-[600px] ${imageWidthClass} transition-all ease-in-out duration-700`} 
              src={videoimg} 
              alt="" 
            />
          </div>
        )}
        {activeContent == "Product" && (
          <div className=' flex justify-center items-center'>
            <Image
              className={`sm:h-[600px] ${imageWidthClass} transition-all ease-in-out duration-700`} 
              src={videoimg} 
              alt="" 
            />
          </div>
        )}
        {activeContent == "Vendor Registration" && (
          <div className=' flex justify-center items-center'>
            <Image
              className={`sm:h-[600px] ${imageWidthClass} transition-all ease-in-out duration-700`} 
              src={videoimg} 
              alt="" 
            />
          </div>
        )}
        {activeContent == " Xero" && (
          <div className=' flex justify-center items-center'>
            <Image
              className={`sm:h-[600px] ${imageWidthClass} transition-all ease-in-out duration-700`} 
              src={videoimg} 
              alt="" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickBooks;
