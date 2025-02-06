"use client"
import React from 'react'
import { motion } from 'framer-motion'


export default function Hero() {
  return (
    <div className='bg-[#4A90E2] '>
      <div className='lg:flex  md:justify-around py-5 px-2 lg:px-0 '>

        <div className='px-10 w-[100%] justify-items-center pt-5 lg:pt-20'>
          <motion.div
           initial={{ scale: 0 }} // Start at size zero
           animate={{ scale: 1 }} // Transition to full size
           transition={{
               duration: 1.5, // Animation duration
               ease: "easeInOut", // Easing function
           }}
          >
            <img className='h-[350] w-[400] lg:w-[14cm] lg:h-[14cm]' src="/Images/product.png" />
            </motion.div>
        </div>
        <div className='w-[100%]  pt-5 content-center pl-10   xl:p-20' >
          <h1 className=' text-xl  lg:text-4xl text-white font-bold '>We are Delivering the simplest solution for the most 
            <span className='text-[#FF6F61]'> complex problems.</span></h1>
        </div>
      </div>
    </div>
  )
}

