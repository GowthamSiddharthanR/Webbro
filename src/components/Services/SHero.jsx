"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function SHero() {
    return (
        <div className='bg-[#4A90E2] '>
            <div className='lg:flex  md:justify-around py-5 px-5 lg:px-0 '>
                <div className='w-[100%]  pt-5 content-center pl-10   xl:p-20' >
                    <h1 className=' text-xl  lg:text-3xl text-white font-bold '>We are committed to making your business better through latest technology without compromising Quality.</h1>
                </div>
                <div className='px-10 w-[100%] justify-items-center pt-5 lg:pt-20'>
                    <motion.div
                        initial={{ y: 400, opacity: 0 }} // Start at size zero
                        animate={{ y: 0, opacity: 1 }} // Transition to full size
                        transition={{
                            duration: 1.5, // Animation duration
                            ease: "easeInOut", // Easing function
                        }}
                    ><img className='h-[15cm] w-auto lg:w-[14cm] lg:h-[14cm]' src="/svg/serviceMain.svg" /></motion.div>
                </div>
            </div>
        </div>
    )
}
