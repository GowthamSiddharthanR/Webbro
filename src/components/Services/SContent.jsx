"use client"
import React from 'react'
import "../../CSS/Services/content.css"
import { motion } from 'framer-motion'
import Link from 'next/link'


export default function SContent() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')]">
            <div>
                <div >
                    <div className=' hidden md:flex'>
                        <div className='h-80 pr-10 srelative w-[100%] justify-items-center content-center'>
                            <motion.div
                                initial={{ y: 150, opacity: 0 }} // Start at size zero
                                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                                transition={{
                                    duration: 0.5, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><Link href={"/services/webDesign"} className='scard cursor-pointer'>
                                    <h1 className='scardHead font-poppins'>Web Design</h1>
                                    <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                    <p className='slcardContent'>Web design is the design and creation of internet sites. This includes a selection of separate skills that
                                        everybody falls into the umbrella of web design. Some samples of these skills are information architecture,
                                        interface, site structure, navigation, layout, colors, fonts, and overall imagery.

                                    </p>
                                </Link></motion.div>
                            <div className="slabsolute">
                                <motion.div
                                    initial={{ scale: 0 }} // Start at size zero
                                    whileInView={{ scale: 1 }} // Transition to full size
                                    transition={{
                                        duration: 1, // Animation duration
                                        ease: "easeInOut", // Easing function
                                    }}
                                ><img src='/svg/webdesign.svg' /></motion.div>

                            </div>
                        </div>
                        <div className='h-80 w-[100%]'></div>
                    </div>
                    <div className='hidden md:flex'>
                        <div className='h-80 w-[100%]'></div>
                        <div className='h-80 pl-10 srelative w-[100%] justify-items-center content-center'>
                            <motion.div
                                initial={{ y: 150, opacity: 0 }} // Start at size zero
                                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                                transition={{
                                    duration: 0.5, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><Link href={"/services/webApplication"} className='scard cursor-pointer'>
                                    <h1 className='scardHead font-poppins'>Web Application</h1>
                                    <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                    <p className='srcardContent'>
                                        An application that uses web-based technology to perform specific tasks is called a website
                                        application, commonly known as a web app. The server hosts the web application and stores information
                                        from numerous connected computers. Web applications can be run through client programs so that you can
                                        access and enter data.
                                    </p>
                                </Link></motion.div>
                            <div className="srabsolute">
                                <motion.div
                                    initial={{ scale: 0 }} // Start at size zero
                                    whileInView={{ scale: 1 }} // Transition to full size
                                    transition={{
                                        duration: 1, // Animation duration
                                        ease: "easeInOut", // Easing function
                                    }}
                                ><img src='/svg/webapp.svg' /></motion.div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile view */}
                <div>
                    <div className='md:hidden bg-[white] p-10'>
                        <div>
                            <motion.div className='justify-items-center py-5'
                                initial={{ scale: 0 }} // Start at size zero
                                whileInView={{ scale: 1 }} // Transition to full size
                                transition={{
                                    duration: 1, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><img className='h-[50%] w-[50%]' src='/svg/webdesign.svg' /></motion.div>

                        </div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }} // Start at size zero
                            whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 0.5, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><Link href={"/services/webDesign"}> <div className='bg-[#4A90E2] cursor-pointer'>
                                <h1 className='scardHead font-poppins'>Web Design</h1>
                                <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                <p className='slcardContent'>Web design is the design and creation of internet sites. This includes a selection of separate skills that
                                    everybody falls into the umbrella of web design. Some samples of these skills are information architecture,
                                    interface, site structure, navigation, layout, colors, fonts, and overall imagery.

                                </p>
                            </div></Link></motion.div>

                    </div>
                    <div className='md:hidden bg-[white] p-10'>
                        <div>
                            <motion.div className='justify-items-center py-5'
                                initial={{ scale: 0 }} // Start at size zero
                                whileInView={{ scale: 1 }} // Transition to full size
                                transition={{
                                    duration: 1, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><img className='h-[50%] w-[50%]' src='/svg/webapp.svg' /></motion.div>

                        </div>
                         <motion.div
                            initial={{ y: 100, opacity: 0 }} // Start at size zero
                            whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 0.5, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><Link href={"/services/webApplication"}> <div className='bg-[#4A90E2] cursor-pointer'>
                            <h1 className='scardHead font-poppins'>Web Application</h1>
                            <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                            <p className='slcardContent'>An application that uses web-based technology to perform specific tasks is called a website
                                application, commonly known as a web app. The server hosts the web application and stores information
                                from numerous connected computers. Web applications can be run through client programs so that you can
                                access and enter data.

                            </p>
                        </div></Link></motion.div>

                    </div>
                </div>
            </div>
            <div>
                <div >
                    <div className=' hidden md:flex'>
                        <div className='h-80 pr-10 srelative w-[100%] justify-items-center content-center'>
                            <motion.div
                                initial={{ y: 150, opacity: 0 }} // Start at size zero
                                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                                transition={{
                                    duration: 0.5, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><Link href={"/services/mobileApplication"} className='scard cursor-pointer'>
                                    <h1 className='scardHead font-poppins'>Mobile Application</h1>
                                    <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                    <p className='slcardContent'>Mobile application development is the process of creating software for
                                        smartphones and digital assistants, most ordinarily for Android and iOS. The software is often
                                        preinstalled on the device, downloaded from a mobile app store, or accessed through a mobile browser.
                                    </p>
                                </Link></motion.div>
                            <div className="slabsolute">
                                <motion.div
                                    initial={{ scale: 0 }} // Start at size zero
                                    whileInView={{ scale: 1 }} // Transition to full size
                                    transition={{
                                        duration: 1, // Animation duration
                                        ease: "easeInOut", // Easing function
                                    }}
                                ><img src='/svg/mobile.svg' /></motion.div>

                            </div>
                        </div>
                        <div className='h-80 w-[100%]'></div>
                    </div>
                    <div className='hidden md:flex'>
                        <div className='h-80 w-[100%]'></div>
                        <div className='h-80 pl-10 srelative w-[100%] justify-items-center content-center'>
                            <motion.div
                                initial={{ y: 150, opacity: 0 }} // Start at size zero
                                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                                transition={{
                                    duration: 0.5, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><Link href={"/services/digitalMarketing"} className='scard cursor-pointer'>
                                    <h1 className='scardHead font-poppins'>Digital Marketing</h1>
                                    <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                    <p className='srcardContent'>
                                        Digital marketing, also called online marketing, is the promotion of brands to connect with potential
                                        customers using the web and other sorts of data communication. This includes not only email, social
                                        media, and web-based advertising, but also text and multimedia messages as a marketing channel.
                                    </p>
                                </Link></motion.div>
                            <div className="srabsolute">
                                <motion.div
                                    initial={{ scale: 0 }} // Start at size zero
                                    whileInView={{ scale: 1 }} // Transition to full size
                                    transition={{
                                        duration: 1, // Animation duration
                                        ease: "easeInOut", // Easing function
                                    }}
                                ><img src='/svg/digital.svg' /></motion.div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile view */}
                <div>
                    <div className='md:hidden bg-[white] p-10'>
                        <div>
                            <motion.div className='justify-items-center py-5'
                                initial={{ scale: 0 }} // Start at size zero
                                whileInView={{ scale: 1 }} // Transition to full size
                                transition={{
                                    duration: 1, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><img className='h-[50%] w-[50%]' src='/svg/mobile.svg' /></motion.div>

                        </div>
                         <motion.div
                            initial={{ y: 100, opacity: 0 }} // Start at size zero
                            whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 0.5, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><Link href={"/services/mobileApplication"}> <div className='bg-[#4A90E2] cursor-pointer'>
                            <h1 className='scardHead font-poppins'>Mobile Application</h1>
                            <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                            <p className='slcardContent'>Mobile application development is the process of creating software for
                                smartphones and digital assistants, most ordinarily for Android and iOS. The software is often
                                preinstalled on the device, downloaded from a mobile app store, or accessed through a mobile browser.

                            </p>
                       </div> </Link></motion.div>

                    </div>
                    <div className='md:hidden bg-[white] p-10'>
                        <div>
                            <motion.div className='justify-items-center py-5'
                                initial={{ scale: 0 }} // Start at size zero
                                whileInView={{ scale: 1 }} // Transition to full size
                                transition={{
                                    duration: 1, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><img className='h-[50%] w-[50%]' src='/svg/digital.svg' /></motion.div>

                        </div>
                         <motion.div
                            initial={{ y: 100, opacity: 0 }} // Start at size zero
                            whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 0.5, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><Link href={"/services/digitalMarketing"}> <div className='bg-[#4A90E2] cursor-pointer'>
                            <h1 className='scardHead font-poppins'>Digital Marketing</h1>
                            <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                            <p className='slcardContent'>Digital marketing, also called online marketing, is the promotion of brands to connect with potential
                                customers using the web and other sorts of data communication. This includes not only email, social
                                media, and web-based advertising, but also text and multimedia messages as a marketing channel.
                            </p>
                        </div></Link></motion.div>

                    </div>
                </div>
            </div>
            <div>
                <div >
                    <div className=' hidden md:flex'>
                        <div className='h-80 pr-10 srelative w-[100%] justify-items-center content-center'>
                            <motion.div
                                initial={{ y: 150, opacity: 0 }} // Start at size zero
                                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                                transition={{
                                    duration: 0.5, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><Link href={"/services/customisedSoftware"} className='scard cursor-pointer'>
                                    <h1 className='scardHead font-poppins'>Customized Software</h1>
                                    <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                    <p className='slcardContent'>Customized services are instrumental in attracting guests and establishing
                                        a long-term relationship with them, for they need a positive effect on the guests level of
                                        satisfaction and the degree of comfort experienced during their stay.
                                    </p>
                                </Link></motion.div>
                            <div className="slabsolute">
                                <motion.div
                                    initial={{ scale: 0 }} // Start at size zero
                                    whileInView={{ scale: 1 }} // Transition to full size
                                    transition={{
                                        duration: 1, // Animation duration
                                        ease: "easeInOut", // Easing function
                                    }}
                                ><img src='/svg/cussoft.svg' /></motion.div>

                            </div>
                        </div>
                        <div className='h-80 w-[100%]'></div>
                    </div>
                    <div className='hidden md:flex'>
                        <div className='h-80 w-[100%]'></div>
                        <div className='h-80 pl-10 srelative w-[100%] justify-items-center content-center'>
                            <motion.div
                                initial={{ y: 150, opacity: 0 }} // Start at size zero
                                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                                transition={{
                                    duration: 0.5, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><Link href={"/services/cloudHosting"} className='scard cursor-pointer'>
                                    <h1 className='scardHead font-poppins'>Cloud Computing</h1>
                                    <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                    <p className='srcardContent'>
                                        Cloud hosting is where your site is stored on multiple servers,
                                        which allows you to tug resources from a selection of varied places. This makes cloud hosting a very
                                        scalable, reliable, and versatile kind of hosting, perfect for sites that have hikes and dips in things
                                        like traffic.
                                    </p>
                                </Link></motion.div>
                            <div className="srabsolute">
                                <motion.div
                                    initial={{ scale: 0 }} // Start at size zero
                                    whileInView={{ scale: 1 }} // Transition to full size
                                    transition={{
                                        duration: 1, // Animation duration
                                        ease: "easeInOut", // Easing function
                                    }}
                                ><img src='/svg/cloud.svg' /></motion.div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile view */}
                <div>
                    <div className='md:hidden bg-[white] p-10'>
                        <div>
                            <motion.div className='justify-items-center py-5'
                                initial={{ scale: 0 }} // Start at size zero
                                whileInView={{ scale: 1 }} // Transition to full size
                                transition={{
                                    duration: 1, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><img className='h-[50%] w-[50%]' src='/svg/cussoft.svg' /></motion.div>

                        </div>
                         <motion.div
                            initial={{ y: 100, opacity: 0 }} // Start at size zero
                            whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 0.5, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><Link href={"/services/customisedSoftware"}> <div className='bg-[#4A90E2] cursor-pointer'>
                            <h1 className='scardHead font-poppins'>Customized Software</h1>
                            <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                            <p className='slcardContent'>Customized services are instrumental in attracting guests and establishing
                                a long-term relationship with them, for they need a positive effect on the guests level of satisfaction
                                and the degree of comfort experienced during their stay.

                            </p>
                       </div> </Link></motion.div>

                    </div>
                    <div className='md:hidden bg-[white] p-10'>
                        <div>
                            <motion.div className='justify-items-center py-5'
                                initial={{ scale: 0 }} // Start at size zero
                                whileInView={{ scale: 1 }} // Transition to full size
                                transition={{
                                    duration: 1, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><img className='h-[50%] w-[50%]' src='/svg/cloud.svg' /></motion.div>

                        </div>
                         <motion.div
                            initial={{ y: 100, opacity: 0 }} // Start at size zero
                            whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 0.5, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><Link href={"/services/cloudHosting"}> <div className='bg-[#4A90E2] cursor-pointer'>
                            <h1 className='scardHead font-poppins'>Cloud Computing</h1>
                            <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                            <p className='slcardContent'>Cloud hosting is where your site is stored on multiple servers,
                                which allows you to tug resources from a selection of varied places. This makes cloud hosting a very
                                scalable, reliable, and versatile kind of hosting, perfect for sites that have hikes and dips in things
                                like traffic.
                            </p>
                       </div> </Link></motion.div>

                    </div>
                </div>
            </div>
            <div>
                <div >
                    <div className=' hidden md:flex'>
                        <div className='h-80 pr-10 srelative w-[100%] justify-items-center content-center'>
                            <motion.div
                                initial={{ y: 150, opacity: 0 }} // Start at size zero
                                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                                transition={{
                                    duration: 0.5, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><Link href={"/services/softwareTesting"} className='scard cursor-pointer'>
                                    <h1 className='scardHead font-poppins'>Software Testing</h1>
                                    <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                    <p className='slcardContent'>Software Testing includes activities that ensure the identification of bugs,
                                        errors, defects & other types of technical issues. Generally, testing is a process of evaluating a
                                        system or component. Testing is executing a system to find out gaps, errors, or any type of missing
                                        requirements.
                                    </p>
                                </Link></motion.div>
                            <div className="slabsolute">
                                <motion.div
                                    initial={{ scale: 0 }} // Start at size zero
                                    whileInView={{ scale: 1 }} // Transition to full size
                                    transition={{
                                        duration: 1, // Animation duration
                                        ease: "easeInOut", // Easing function
                                    }}
                                ><img src='/svg/testing.svg' /></motion.div>

                            </div>
                        </div>
                        <div className='h-80 w-[100%]'></div>
                    </div>
                    <div className='hidden md:flex'>
                        <div className='h-80 w-[100%]'></div>
                        <div className='h-80 pl-10 srelative w-[100%] justify-items-center content-center'>
                            <motion.div
                                initial={{ y: 150, opacity: 0 }} // Start at size zero
                                whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                                transition={{
                                    duration: 0.5, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><Link href={"/services/serverMaintenance"} className='scard cursor-pointer'>
                                    <h1 className='scardHead font-poppins'>Server Maintanance</h1>
                                    <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                                    <p className='srcardContent'>Server maintenance is the process of keeping the server updated and dealing
                                        in tip-top shape. Because servers check out all of your data, it is vital to watch and properly take
                                        care of them so that you simply dont lose valuable information just in case of an error.
                                    </p>
                                </Link></motion.div>
                            <div className="srabsolute">
                                <motion.div
                                    initial={{ scale: 0 }} // Start at size zero
                                    whileInView={{ scale: 1 }} // Transition to full size
                                    transition={{
                                        duration: 1, // Animation duration
                                        ease: "easeInOut", // Easing function
                                    }}
                                ><img src='/svg/server.svg' /></motion.div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile view */}
                <div>
                    <div className='md:hidden bg-[white] p-10'>
                        <div>
                            <motion.div className='justify-items-center py-5'
                                initial={{ scale: 0 }} // Start at size zero
                                whileInView={{ scale: 1 }} // Transition to full size
                                transition={{
                                    duration: 1, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><img className='h-[50%] w-[50%]' src='/svg/testing.svg' /></motion.div>

                        </div>
                         <motion.div
                            initial={{ y: 100, opacity: 0 }} // Start at size zero
                            whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 0.5, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><Link href={"/services/softwareTesting"}> <div className='bg-[#4A90E2] cursor-pointer'>
                            <h1 className='scardHead font-poppins'>Software Testing</h1>
                            <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                            <p className='slcardContent'>Software Testing includes activities that ensure the identification of bugs,
                                errors, defects & other types of technical issues. Generally, testing is a process of evaluating a
                                system or component. Testing is executing a system to find out gaps, errors, or any type of missing
                                requirements.
                            </p>
                        </div></Link></motion.div>

                    </div>
                    <div className='md:hidden bg-[white] p-10'>
                        <div>
                            <motion.div className='justify-items-center py-5'
                                initial={{ scale: 0 }} // Start at size zero
                                whileInView={{ scale: 1 }} // Transition to full size
                                transition={{
                                    duration: 1, // Animation duration
                                    ease: "easeInOut", // Easing function
                                }}
                            ><img className='h-[50%] w-[50%]' src='/svg/server.svg' /></motion.div>

                        </div>
                         <motion.div
                            initial={{ y: 100, opacity: 0 }} // Start at size zero
                            whileInView={{ y: 0, opacity: 1 }} // Transition to full size
                            transition={{
                                duration: 0.5, // Animation duration
                                ease: "easeInOut", // Easing function
                            }}
                        ><Link href={"/services/serverMaintenance"}> <div className='bg-[#4A90E2] cursor-pointer'>
                            <h1 className='scardHead font-poppins'>Server Maintanance</h1>
                            <h1 className='text-5xl text-center mt-[-20px] text-[white] font-black '>&#x291A;&#x2919;</h1>
                            <p className='slcardContent'>Server maintenance is the process of keeping the server updated and dealing
                                in tip-top shape. Because servers check out all of your data, it is vital to watch and properly take
                                care of them so that you simply dont lose valuable information just in case of an error.
                            </p>
                        </div></Link></motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}
