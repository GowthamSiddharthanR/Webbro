"use client"
import React from 'react'
import { motion } from 'framer-motion'
import '../../CSS/Contact/Contact.css'


export default function Contact() {
    return (
        <div>
            <div className='bg-[#F4F4F4]'>
                <h1 className='cHead font-poppins'>Contact Us</h1>
                <h1 className='text-5xl text-center mt-[-20px] text-[#FF6F61] font-black '>&#x291A;&#x2919;</h1>
                <div className='lg:flex  md:justify-around pb-10 px-5 lg:px-0 '>
                    <div className='w-[100%]  pt-5' >
                        <motion.div
                            initial={{ x: -500, opacity: 0 }} // Start at size zero
                            animate={{ x: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 1, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        >
                            <div className="container">
                                <h1 className='cCardhead'>Lets Start a Conversation!</h1>
                                <form action="submit_form.php" method="POST">
                                    <label className="text-[#FF6F61] font-semibold" htmlFor="name">Your Name</label>
                                    <input placeholder="Name" type="text" id="name" name="name" required />

                                    <label className="text-[#FF6F61] font-semibold" htmlFor="email">Your Email</label>
                                    <input placeholder="Email" type="email" id="email" name="email" required />

                                    <label className="text-[#FF6F61] font-semibold" htmlFor="message">Your Message</label>
                                    <textarea className="mb-4" placeholder="Message" id="message" name="message" required></textarea>

                                    <a className="cobutton cobutton:hover" type="submit">Send Message</a>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                    <div className='pl-10 w-[100%] pt-5'>
                        <motion.div
                            initial={{ x: 500, opacity: 0 }} // Start at size zero
                            animate={{ x: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 1, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><img className='h-[100%] w-[100%] lg:w-[550] lg:h-[450]' src="/Images/Contact-us.png" /></motion.div>
                    </div>
                </div>
            </div>
            <div className='bg-[#4A90E2] py-10'>

                <motion.div
                    initial={{ y: 150, opacity: 0 }} // Start at size zero
                    whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                    transition={{
                        duration: 0.5, // Animation duration
                        ease: "easeInOut", // Easing function
                    }}
                ><div className='flex flex-wrap justify-evenly justify-center items-center gap-5'>
                        <a href="#" className=" cocard ">
                            <img className="coimg " src='/svg/call.svg' />
                            <h5 className="cocardHead">Call</h5>
                            <div className="cocardContent"><p>+91-9876543210</p><p>+91-9876543210</p></div>
                        </a>
                        <a href="#" className=" cocard ">
                            <img className="coimg1 " src='/svg/mail.svg' />
                            <h5 className="cocardHead">Mail</h5>
                            <div className="cocardContent"><p>contact@webbro.com</p><p>spartansfire@webbro.com</p></div>
                        </a>
                        <a href="#" className=" cocard">
                            <img className="coimg " src='/svg/location.svg' />
                            <h5 className="cocardHead">Location</h5>
                            <div className="cocardContent">
                                <p>WEBBRO Softwares</p>
                                <p>No:01, Whitefield cross, </p>
                                <p>Main road, Pondicherry</p>
                                <p>605100</p>
                                </div>
                        </a>


                    </div></motion.div>
            </div>
        </div>
    )
}
