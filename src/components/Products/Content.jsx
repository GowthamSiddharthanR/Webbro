"use client"
import React from 'react'
import "../../CSS/Products/Content.css"
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function Content() {
    return (
        <div>
            <Link href={"/products/cms"}><motion.div
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
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>CMS programs are used to manage and publish web content. Multiple authors can contribute to the content via a CMS.
                                Using this tool, you can also add, edit, or delete any published content on your website. In addition to managing
                                the content of company web pages and websites, CMS is also used to manage marketing campaigns.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/crm"}><motion.div
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
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>CRM (Customer Relationship Management) entails the analysis of customer data to improve customer relations and
                                personalize future communication. Businesses use CRM to manage their interaction with clients. Using CRM, companies
                                can build the most effective communication model with clients, leading to a better understanding of customer needs,
                                increasing loyalty, and contributing to increased sales.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/erp"}><motion.div
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
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>The Enterprise Resource Planning (ERP) software is a management solution for improving business operations,
                                communication, and collaboration. A comprehensive ERP software platform integrates sales, orders, finance,
                                human resources, planning, production, inventory, and procurement process.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/eCommerce"}><motion.div
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
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>Web-based e-commerce software helps you order and fulfil orders, track inventory,
                                and manage product inventory. The software lets you manage a product database, track sales,
                                market to customers, offer discounts, create a loyalty program, and even connect with customers
                                through a blog.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/gst"}><motion.div
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
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white '>The GST billing software allows companies to create invoices, bills, inventory management, account statements,
                                balance sheets, GST reports, and other features on a monthly, quarterly, or annual basis.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/healthCare"}><motion.div
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
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>Both clinics and hospitals use healthcare software for storing patient information in a digital format,
                                and this software is sometimes integrated with hospital management software and practice management software.
                                It is used by hospitals internally to store their patient's data.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/smartySchool"}><motion.div
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
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>Smarty School is a school management software application that provides various services to assist schools in
                                their day-to-day administrative and educational activities.Developed on a strong web architecture aligned
                                with the demands of the educational field, it is a comprehensive cloud-based system.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
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
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>Companies and marketing professionals use digital marketing tools to create and implement marketing campaigns
                                that successfully promote their products and services. Through Digital Marketing Tools, we promote brands to
                                communicate with potential customers using the internet, social media, and other digital resources. We also
                                provide digital marketing servicesthat help you advertise or market your business online, such as through search engine
                                marketing, social media, and paid advertising.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <Link href={"/products/finance"}><motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/finance.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>Financial Applications</div>
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>Software used for recording all financial activity within a business organization is known as Financial Application Software. Financial software includes payroll, accounts receivables, and payables, general ledger, spreadsheets, financial planning, check writing, and portfolio management.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/lms"}><motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/lms.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>LMS Software</div>
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>Learning management systems are software applications used in the administration, documentation, tracking, reporting, and automation of educational courses, training programs, and learning and development programs.

                                <br />With Our learning management system, you can administer, document, track, report, and deliver educational classes, training programs, and learning and development programs.

                                <br /> Our Professional Developers have developed a comprehensive learning management system that enables you to manage, execute, and monitor learning in schools.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/travel"}><motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/travel.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>Travel & Tourism</div>
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>The software is used to manage customer information, tour information, and back-office activities. It helps tour operators manage the organizational aspects of tours, such as scheduling, itinerary, meals, and more.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
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
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/job.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>Job Portal</div>
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>The JobPortal software is a user-friendly, all-in-one online recruiting software solution. This software is fully featured for modern recruitment websites.</h1>
                        </div>

                    </div>
                </div>
            </motion.div>
            <Link href={"/products/pos"}><motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/pos.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>POS</div>
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>A Point Of Sale (POS) software system allows a customer to enter the information necessary for the payment of goods and services for the company as well as for the filing of sales taxes.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>
            <Link href={"/products/chitFund"}><motion.div
                initial={{ y: 150, opacity: 0 }} // Start at size zero
                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                transition={{
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Easing function
                }}>
                <div className='prcard'>
                    <div className=' md:flex'>
                        <div className='md:w-[50%]  justify-items-center'>
                            <img className='md:h-[100%] md:w-[80%] w-[50%] ' src="/svg/chit.svg" />
                        </div>
                        <div className='w-[100%]'>
                            <div className='prheading'>Chit Fund Software</div>
                            <h1 className='text-4xl text-center  mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
                            <h1 className='text-justify text-white'>Our ChitFund software helps your business be more profitable and secure at every step by improving your chit fund business and finance.</h1>
                        </div>

                    </div>
                </div>
            </motion.div></Link>

        </div>
    )
}
