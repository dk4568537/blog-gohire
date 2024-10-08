import { Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const OurBlog = () => {
    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    // Sample data array with dynamic date for one item
    const cardData = [
        {
            id: 1,
            title: 'How to Choose the Right Equipment for Your Project',
            description: `${formattedDate} No Comments`,
            image: '/images/BlogImgOne.jpg', // Replace with actual image path
        },
        {
            id: 2,
            title: 'Top 5 Reasons Why Renting is Better Than Buying',
            description: `${formattedDate} No Comments`,
            image: '/images/BlogImgTwo.jpg', // Replace with actual image path
        },
        {
            id: 3,
            title: 'Maximizing Your Rental Experience',
            description: `${formattedDate} No Comments`, // Dynamically updated date
            image: '/images/BlogImgThree.jpg', // Replace with actual image path
        },
    ];

    return (
        <div className="bg-black text-white">
            <div className="container mx-auto p-5 py-10">
                <div>
                    <p className="text-center bg-green-600 w-14">BLOG</p>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-8">
                            <h1 className="font-bold sm:text-3xl">Our Blog</h1>
                            <p className="text-xs sm:text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                        </div>
                        <Button borderRadius={"full"} rightIcon={<RiArrowRightSLine className="text-lg" />} colorScheme="green" variant="solid">View All</Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {cardData.map((item) => (
                        <div key={item.id} className="max-w-sm mt-10">
                            <div className='w-full'>
                                <div className='w-[100%] h-[250px] relative'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        // layout='fill'
                                        fill
                                        className="rounded-lg"
                                        // width={400} // Next.js requires width and height to be set
                                        // height={400} // Same height for consistency
                                        style={{ objectFit: 'cover' }} // Correct inline style for objectFit
                                    />
                                </div>

                                <div className="mt-4 space-y-1">
                                    <h1 className="w-full mb-5 lg:text-2xl font-bold">{item.title}</h1>
                                    <Text>{item.description}</Text>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
