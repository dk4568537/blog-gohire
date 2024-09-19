import { Button, Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'


// Sample data array
const cardData = [
    {
        id: 1,
        title: 'Living Room Sofa',
        description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for people who love a chic design with a sprinkle of vintage design.',
        image: '/images/sofa.jpg', // Replace with actual image path
    },
    {
        id: 2,
        title: 'Luxury Dining Table',
        description: 'A beautiful dining table that enhances any dining space with a touch of luxury and sophistication.',
        image: '/images/dining-table.jpg', // Replace with actual image path
    },
    {
        id: 3,
        title: 'Modern Bed Frame',
        description: 'This modern bed frame adds a stylish and contemporary touch to any bedroom, offering both comfort and design.',
        image: '/images/bed-frame.jpg', // Replace with actual image path
    },
];

const OurBlog = () => {
    return (
        <div>
            <div className=' container mx-auto'>
                <div>
                    <p className=' text-center bg-green-600 w-14'>BLOG</p>
                    <div className=' flex justify-between items-center'>
                        <div className=' flex justify-center items-center gap-8'>
                            <h1 className=' font-bold text-3xl'>Our Blog</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                        </div>
                        <Button borderRadius={"full"} rightIcon={<RiArrowRightSLine className=' text-lg' />} colorScheme='green' variant='solid'>View All</Button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {cardData.map((item) => (
                        <Card key={item.id} maxW='sm'>
                            <CardBody>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    borderRadius='lg'
                                    width={400}  // Adjust image size if necessary
                                    height={300} // Adjust image size if necessary
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{item.title}</Heading>
                                    <Text>{item.description}</Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurBlog