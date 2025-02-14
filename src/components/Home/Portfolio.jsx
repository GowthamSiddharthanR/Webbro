"use client"
import React from 'react'
import "../../CSS/Home/Portfolio.css"
import { motion } from 'framer-motion'

export default function Portfolio() {
    return (
        <div className='pomain'>
            <div className='poheading'>Portfolio</div>
            <h1 className='text-5xl text-center mt-[-20px] text-[#FF6F61] font-black '>&#x291A;&#x2919;</h1>
            <div className='flex flex-wrap justify-evenly justify-center gap-5 items-center  md:mb-10 py-5 '>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}
                >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg1.jpg' />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}  >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg7.jpg' />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}  >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg4.png' />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}  >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg8.jpg' />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}  >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg13.jpg' />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}  >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg10.jpg' />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}  >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg11.jpg' />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}  >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg12.jpg' />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }} // Start at size zero
                    whileInView={{ scale: 1 }} // Transition to full size
                    transition={{
                        duration: 1, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}  >
                    <a href="#" >
                        <img className="poimg" src='Images/pimg9.jpg' />
                    </a>
                </motion.div>
            </div>
        </div>
    )
}
