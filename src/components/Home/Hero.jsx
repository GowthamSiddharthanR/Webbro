"use client"
import React from 'react'
import { motion } from 'framer-motion'
import '../../CSS/Hero.css'


export default function Hero() {
    return (
        <div className='bg-[#4A90E2] '>
            <div className='lg:flex lg:pb-24 md:justify-around py-5 md:px-5 lg:px-0 '>
                <div className='w-[100%]  pt-5 content-center pl-10   xl:p-20' >
                    <h1 className='text-3xl text-white font-bold ' >Next-Generation <span className='text-[#FF6F61]'><div className="container1"><div className="text1">Web Application</div></div></span><br /><br />
                        We Value Our Customers' Business and <br />Their Digital Presence.
                    </h1>
                </div>
                <div className='px-10 w-[100%] justify-items-center pt-5 lg:pt-20'>
                    <motion.div
                        initial={{ scale: 0 }} // Start at size zero
                        animate={{ scale: 1 }} // Transition to full size
                        transition={{
                            stiffness: 80,
                            type: "spring",
                            damping: 5,
                            duration: 1, // Animation duration
                            ease: "easeInOut", // Easing function
                        }}
                    ><img className='h-[350] w-[400] lg:w-[600] lg:h-[450]' src="/Images/hero.png" /></motion.div>
                </div>
            </div>
        </div>
    )
}
