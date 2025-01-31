"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function WhyUs() {
    return (
        <div className='bg-[#4A90E2]'>
            <h1 className='abhead1 font-poppins' >Why Us</h1>
            <h1 className='text-5xl text-center mt-[-20px] text-[#FF6F61] pb-10 font-black '>&#x291A;&#x2919;</h1>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 0.8, // Animation duration
                    ease: "easeInOut", // Easing function
                }}
            ><div className='flex flex-wrap justify-evenly justify-center items-center gap-5'>
                    <a href="#" className=" abcard ">
                        <img className="abimg1 " src='/svg/quality.svg' />
                        <h5 className="abcardHead">Quality</h5>
                        <p className="abcardContent">Our success has been based on the necessity of quality
                            We never compromise on the quality we work on during the last 7 years and so on.</p>
                    </a>
                    <a href="#" className=" abcard ">
                        <img className="abimg " src='/svg/service.svg' />
                        <h5 className="abcardHead">Service</h5>
                        <p className="abcardContent">We put great importance on the requirements of our clients and their investments in technology
                            and we are committed to providing the best possible outcomes.</p>
                    </a>
                    <a href="#" className=" abcard">
                        <img className="abimg " src='/svg/support.svg' />
                        <h5 className="abcardHead">Support</h5>
                        <p className="abcardContent">Our experienced professionals with defined processes and protocols enable
                            us to provide expedited business support, consequently, at all levels.</p>
                    </a>
                    <a href="#" className=" abcard ">
                        <img className="abimg1 " src='/svg/trust.svg' />
                        <h5 className="abcardHead">Trust</h5>
                        <p className="abcardContent">We have achieved what we are today primarily because of our faith in our
                            value system and mission to empower our clients with the right solutions.</p>
                    </a>

                </div></motion.div>
        </div>
    )
}
