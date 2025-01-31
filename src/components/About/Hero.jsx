"use client"
import React from 'react'
import "../../CSS/About/hero.css"
import { motion } from 'framer-motion'
import 'typeface-poppins';
import 'typeface-montserrat';
import 'typeface-open-sans';

export default function Hero() {
    return (
        <div className='bg-[#F4F4F4]'>
            <h1 className='abhead font-poppins'>About Us</h1>
            <h1 className='text-5xl text-center mt-[-20px] text-[#FF6F61] font-black '>&#x291A;&#x2919;</h1>
            <div className='lg:flex  md:justify-around pb-10 px-5 lg:px-0 '>
                <div className='pl-10 w-[100%] pt-5'>
                    <motion.div
                        initial={{ y: 400, opacity: 0 }} // Start at size zero
                        animate={{ y: 0, opacity: 1 }} // Transition to full size
                        transition={{
                            duration: 1.5, // Animation duration
                            ease: "easeInOut", // Easing function
                        }}
                    ><img className='h-[100%] w-[100%] lg:w-[650] lg:h-[450]' src="/Images/aboutus.png" /></motion.div>
                </div>
                <div className='w-[100%]  pt-5' >
                <motion.div
                        initial={{ y: 100, opacity: 0 }} // Start at size zero
                        animate={{ y: 0, opacity: 1 }} // Transition to full size
                        transition={{
                            duration: 1.2, // Animation duration
                            ease: "easeInOut", // Easing function
                        }}
                    ><p className="abPara xl:pr-[2cm] font-open-sans">Webbro is an Enterprise Consulting and IT Services organization, providing solutions around Web portals,
                        Enterprise Applications, Mobility, Cloud and Analytics through On-Premise as well as Cloud solutions.</p>
                        
                    <p className='abPara xl:pr-[2cm] font-open-sans'>Webbro team comprises professionals with more than 10+ years&#x0027; industry experience and has expertise
                        working with a variety of industry verticals like Healthcare,
                        Manufacturing, Hospitality, Tourism, Retail, Finance, and Education.</p></motion.div>
                       
                        <motion.div
                        initial={{ y: 200, opacity: 0 }} // Start at size zero
                        animate={{ y: 0, opacity: 1 }} // Transition to full size
                        transition={{
                            duration: 1.6, // Animation duration
                            ease: "easeInOut", // Easing function
                        }}
                    ><p className='abPara xl:pr-[2cm] font-open-sans'>Our portfolio of services on Enterprise Solutions includes Design, Development & Implementation, Upgrade &
                        Modernization, Support and Maintenance, Analytics and Reporting, Integration, Mobility, and Managed Services.
                        We put science to work by creating innovative products and solutions that have proved to be increasingly
                        critical to the client&#x0027;s business success. This is accomplished by helping organizations manage change, manage
                        the lifecycle of information assets, and meet compliance and audit challenges.</p></motion.div>
                </div>
            </div>
        </div>
    )
}
