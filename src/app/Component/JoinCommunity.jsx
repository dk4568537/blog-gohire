import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React from 'react'
const joinImg = '/images/Join.png'

const JoinCommunity = () => {
    return (
        <div className='bg-black pb-12'>
            <div
                style={{
                    backgroundImage: `url(${joinImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className='container rounded-lg mx-auto py-10'
            >
                <div className='flex justify-center items-center text-center'>
                    <div className='flex justify-center items-center flex-col text-center max-w-7xl px-5'>
                        <h1 className='w-full text-white text-2xl sm:text-4xl mb-4 font-bold'>
                            Join Our Community
                        </h1>
                        <p className='w-full text-white text-base sm:text-lg mb-6'>
                            Ready to take your rental business to the next level? Join Go-Hire.com today and unlock a world of possibilities for your store.
                        </p>
                        <InputGroup size="lg" maxW="500px">
                            <Input
                                type='email'
                                placeholder='Your Email Address'
                                bg="white"
                                _placeholder={{ color: 'gray.400' }}
                            />
                            <InputRightAddon
                                bgColor={'green'}
                                color={'white'}
                                cursor="pointer"
                                border={"none"}
                            >
                                Join Now
                            </InputRightAddon>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinCommunity
