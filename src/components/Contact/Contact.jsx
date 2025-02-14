"use client"
import React from 'react'
import { motion } from 'framer-motion'
import '../../CSS/Contact/Contact.css'
import { useState } from "react"



export default function Contact() {
    const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        message: "",
        email: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("cccccccccc")
        setStatus("Sending...");
        try {
            const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent!");
                setFormData({ name: "", message: "", email: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("Error occurred.");

        }
    };
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
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="text-[#FF6F61] font-semibold" htmlFor="email">Name : </label>
                                        <input className="border p-1"
                                            required
                                            onChange={handleChange}
                                            value={formData.name}
                                            name="name"
                                            type="text"
                                            placeholder=" Enter name"  ></input>

                                        <label className="text-[#FF6F61] font-semibold" htmlFor="email">Mail : </label>
                                        <input className="border p-1"
                                            required
                                            onChange={handleChange}
                                            value={formData.email}
                                            name="email"
                                            type="email"
                                            placeholder=" MailId" ></input>

                                        <label className="text-[#FF6F61] font-semibold" htmlFor="email">Message : </label>
                                        <textarea className="border p-1"
                                            required
                                            onChange={handleChange}
                                            value={formData.message}
                                            name="message"
                                            type="text"
                                            placeholder=" Message"></textarea>
                                    </div>
                                    <button 
                                        className="cobutton" type="submit">Send Message</button>
                                    <p className="mx-5 text-center"> {status}</p>
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
                            <img className="coimg animate-bounce " src='/svg/call.svg' />
                            <h5 className="cocardHead">Call</h5>
                            <div className="cocardContent"><p>+91-9876543210</p><p>+91-9876543210</p></div>
                        </a>
                        <a href="#" className=" cocard ">
                            <img className="coimg1 animate-bounce" src='/svg/mail.svg' />
                            <h5 className="cocardHead">Mail</h5>
                            <div className="cocardContent"><p>contact@webbro.com</p><p>info@webbro.com</p></div>
                        </a>
                        <a href="#" className=" cocard">
                            <img className="coimg animate-bounce" src='/svg/location.svg' />
                            <h5 className="cocardHead">Location</h5>
                            <div className="cocardContent">
                                <p>WEBBRO Softwares</p>
                                <p>No: 01, Whitefield cross, </p>
                                <p>Main road, Pondicherry</p>
                                <p>605100</p>
                            </div>
                        </a>
                    </div></motion.div>
            </div>
        </div>
    )
}
