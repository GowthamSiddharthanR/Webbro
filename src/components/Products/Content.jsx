"use client"
import React from 'react'
import "../../CSS/Products/Content.css"
import { motion } from 'framer-motion'
export default function Content() {
    return (
        <div>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pr1.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>CMS Software</div>
                            <h1 className='text-4xl text-center  mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify'>CMS programs are used to manage and publish web content. Multiple authors can contribute to the content via a CMS. 
                                Using this tool, you can also add, edit, or delete any published content on your website. In addition to managing 
                                the content of company web pages and websites, CMS is also used to manage marketing campaigns.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pr2.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>CRM Software</div>
                            <h1 className='text-4xl text-center  mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify'>CRM (Customer Relationship Management) entails the analysis of customer data to improve customer relations and 
                                personalize future communication. Businesses use CRM to manage their interaction with clients. Using CRM, companies
                                 can build the most effective communication model with clients, leading to a better understanding of customer needs, 
                                 increasing loyalty, and contributing to increased sales.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pr8.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>ERP Software</div>
                            <h1 className='text-4xl text-center  mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify'>The Enterprise Resource Planning (ERP) software is a management solution for improving business operations, 
                                communication, and collaboration. A comprehensive ERP software platform integrates sales, orders, finance, 
                                human resources, planning, production, inventory, and procurement process.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pr4.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>E-Commerce</div>
                            <h1 className='text-4xl text-center  mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify'>Web-based e-commerce software helps you order and fulfil orders, track inventory,
                                and manage product inventory. The software lets you manage a product database, track sales,
                                market to customers, offer discounts, create a loyalty program, and even connect with customers
                                through a blog.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pr5.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>GST Billing Software</div>
                            <h1 className='text-4xl text-center  mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify'>The GST billing software allows companies to create invoices, bills, inventory management, account statements, 
                                balance sheets, GST reports, and other features on a monthly, quarterly, or annual basis.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pr6.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>HealthCare</div>
                            <h1 className='text-4xl text-center  mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify'>Both clinics and hospitals use healthcare software for storing patient information in a digital format, 
                                and this software is sometimes integrated with hospital management software and practice management software. 
                                It is used by hospitals internally to store their patient's data.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pr7.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>Smarty School</div>
                            <h1 className='text-4xl text-center  mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify'>Smarty School is a school management software application that provides various services to assist schools in
                                 their day-to-day administrative and educational activities.Developed on a strong web architecture aligned 
                                 with the demands of the educational field, it is a comprehensive cloud-based system.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pr3.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>Digital Marketing Tool</div>
                            <h1 className='text-4xl text-center  mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify'>Companies and marketing professionals use digital marketing tools to create and implement marketing campaigns 
                                that successfully promote their products and services. Through Digital Marketing Tools, we promote brands to
                                 communicate with potential customers using the internet, social media, and other digital resources. We also 
                                 provide digital marketing servicesthat help you advertise or market your business online, such as through search engine
                                  marketing, social media, and paid advertising.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>

        </div>
    )
}
