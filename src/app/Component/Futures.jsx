import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

// Sample content data
const contentData = [
    {
        id: 1,
        title: 'Access Content Worldwide',
        description:
            'Whether youre looking to rent or hire items locally or internationally, Go-Hire.com connects you with trusted sellers around the globe. With just a few clicks, you can access a diverse range of rental products tailored to your specific needs, wherever you are.',
        image: '/images/picture-one.svg', // Ensure the path is correct and points to the public directory
    },
    {
        id: 2,
        title: 'Fast and Reliable Connections',
        description:
            'At Rent Hire Go, we value your time. Our platform is built to facilitate quick and secure transactions between sellers and customers. With real-time updates on rentals, deliveries, and orders, youll experience seamless communication and fast turnarounds.',
        image: '/images/pictureTwo.svg', // Ensure the path is correct and points to the public directory
    },
    {
        id: 2,
        title: 'Control Your Connection',
        description:
            'Stay in charge of your rental experience from start to finish. Our intuitive dashboard gives both sellers and customers complete control over their interactions, including easy management of orders, returns, and payments, all in one place.',
        image: '/images/pictureThree.svg', // Ensure the path is correct and points to the public directory
    },
    {
        id: 2,
        title: 'Easy-to-Use Interface',
        description:
            'Enjoy a hassle-free rental process with our user-friendly platform. Whether youre a first-time renter or a seasoned professional, Rent Hire Go streamlined design ensures a smooth experience with minimal learning curve, so you can focus on what matters most.',
        image: '/images/pictureFour.svg', // Ensure the path is correct and points to the public directory
    },
];

const Futures = () => {
    return (
        <div className=' bg-black'>
        <div className='container mx-auto sm:py-10 px-5'>
            {/* Title Section */}
            <div className='flex justify-center items-center flex-col text-center'>
                <p className='text-green-500 text-xl pb-2 sm:text-2xl'>Futures</p>
                <h1 className='w-full text-white sm:text-4xl mb-4 font-bold'>
                Access the Best Rental Services Anywhere, Anytime
                </h1>
                <p className='w-full text-white sm:w-[550px] text-xs sm:text-lg'>
                Rent Hire Go offers cutting-edge solutions for both sellers and customers, making rental transactions easy, secure, and efficient.
                </p>
            </div>

            {/* Content Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10'>
                {contentData.map((item) => (
                    <div
                        key={item.id}
                        className='flex bg-gray-950 rounded-lg text-white justify-center items-center flex-col text-center px-5 pt-5'
                    >
                        <h1 className='text-md sm:text-xl font-bold mb-4'>{item.title}</h1>
                        <p className='w-full text-xs sm:text-base lg:w-[480px] mb-4'>{item.description}</p>
                        <Button
                            rightIcon={<RiArrowRightSLine className='text-xl' />}
                            className='mb-4'
                        >
                            Read More
                        </Button>
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={300}
                            className='rounded-md'
                        />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Futures;
