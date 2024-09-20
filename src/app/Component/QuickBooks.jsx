"use client"
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import videoimg from '../../../public/images/Video-img.svg'
const QuickBooks = () => {
  const [activeContent, setActiveContent] = useState('');


  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className=' bg-black pb-5'>
      <div className="flex justify-center flex-wrap items-center gap-2 sm:gap-14 pb-5 pt-8">
        <Button bgColor={"gray"} color={'white'} onClick={() => handleButtonClick('QuickBooks')}>
          QuickBooks
        </Button>
        <Button  bgColor={"gray"} color={'white'} onClick={() => handleButtonClick('Chat')}>
          Chat
        </Button>
        <Button  bgColor={"gray"} color={'white'} onClick={() => handleButtonClick('Product')}>
          Product
        </Button>
        <Button  bgColor={"gray"} color={'white'} onClick={() => handleButtonClick('Vendor Registration')}>
          Vendor Registration
        </Button>
      </div>

      {/* Conditionally render content based on active button */}
      <div className="w-full py-5">
        {activeContent === 'QuickBooks' && (
          <div>
            <Image className=' sm:h-[600px] w-full' src={videoimg} alt="" />
          </div>
        )}
        {activeContent === 'Chat' && (
          <div>
            <Image className=' sm:h-[600px] w-full' src={videoimg} alt="" />
          </div>
        )}
        {activeContent === 'Product' && (
          <div>
            <Image className=' sm:h-[600px] w-full' src={videoimg} alt="" />
          </div>
        )}
        {activeContent === 'Vendor Registration' && (
          <div>
            <Image className=' sm:h-[600px] w-full' src={videoimg} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickBooks;
