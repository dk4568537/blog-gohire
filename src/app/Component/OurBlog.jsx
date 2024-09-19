import { Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'


// Sample data array
const cardData = [
    {
        id: 1,
        title: 'How to Choose the Right Equipment for Your Project',
        description: 'October 12, 2022No Comments',
        image: '/images/BlogImgOne.svg', // Replace with actual image path
    },
    {
        id: 2,
        title: 'Top 5 Reasons Why Renting is Better Than Buying',
        description: 'October 12, 2022No Comments',
        image: '/images/BlogImgTwo.svg', // Replace with actual image path
    },
    {
        id: 3,
        title: 'Maximizing Your Rental Experience',
        description: 'October 12, 2022No Comments',
        image: '/images/BlogImgThree.svg', // Replace with actual image path
    },
];

const OurBlog = () => {
    return (
        <div className=' bg-black text-white'>
            <div className=' container mx-auto p-5 py-10'>
                <div>
                    <p className=' text-center bg-green-600 w-14'>BLOG</p>
                    <div className=' flex justify-between items-center'>
                        <div className=' flex justify-center items-center gap-8'>
                            <h1 className=' font-bold sm:text-3xl'>Our Blog</h1>
                            <p className=' text-xs sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                        </div>
                        <Button borderRadius={"full"} rightIcon={<RiArrowRightSLine className=' text-lg' />} colorScheme='green' variant='solid'>View All</Button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {cardData.map((item) => (
                        <div key={item.id} className=' max-w-sm mt-10'>
                            <div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    borderRadius='lg'
                                    width={400}  // Adjust image size if necessary
                                    height={300} // Adjust image size if necessary
                                />
                                <div className=' mt-4 space-y-1'>
                                    <h1 className=' text-2xl font-bold'>{item.title}</h1>
                                    <Text>{item.description}</Text>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurBlog