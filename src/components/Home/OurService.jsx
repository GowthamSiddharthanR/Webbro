"use client"
import React from 'react'
import '../../CSS/Home/OurService.css'
import { motion } from 'framer-motion'
export default function OurService() {
  return (
    <div className='bg-[#F4F4F4] p-5'>
      <div className='heading1'>Our Services</div>
      <h1 className='text-5xl text-center mt-[-20px] text-[#FF6F61] font-black '>&#x291A;&#x2919;</h1>
      <h2 className='para'>We provide customers with high-quality, dependable, and cost-effective IT services.
        We provide world-class technology services by constantly exploring and implementing innovative solutions
        that create long-term value for our customers.</h2>
      <div className='flex flex-wrap justify-evenly justify-center gap-5 items-center  md:mb-10 py-5 '>
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >

          <a href="#" className="card card:hover">

            <h5 className="cardHead">Web Design</h5>
            <p className="cardContent">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>

        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >

          <a href="#" className="card card:hover">

            <h5 className="cardHead">Web Application</h5>
            <p className="cardContent">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>

        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >

          <a href="#" className="card card:hover">

            <h5 className="cardHead"> Digital Marketing</h5>
            <p className="cardContent">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>

        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >

          <a href="#" className="card card:hover">

            <h5 className="cardHead">Customised Software</h5>
            <p className="cardContent">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>

        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >

          <a href="#" className="card card:hover">

            <h5 className="cardHead">Mobile Application</h5>
            <p className="cardContent">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>

        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >

          <a href="#" className="card card:hover">

            <h5 className="cardHead">Cloud Hosting</h5>
            <p className="cardContent">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>

        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >

          <a href="#" className="card card:hover">

            <h5 className="cardHead">Server Maintenance</h5>
            <p className="cardContent">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>

        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >

          <a href="#" className="card card:hover">

            <h5 className="cardHead">Software Testing</h5>
            <p className="cardContent">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a>

        </motion.div>
      </div>

    </div>

  )
}
