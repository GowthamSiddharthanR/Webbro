import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function HealthCare() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/healthi.png' />
            </ScaleAnimation>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <LeftToRightAnimation className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/healthp.svg" />
                    </LeftToRightAnimation>
                    <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">Both clinics and hospitals use healthcare software for storing patient information in a digital format</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>One of the best clinic software programs we offer is our Primary Health Care ( PHC ) software, which is more productive, efficient, and customizable through better data management, patient tracking, medical billing, lab and inventory management systems, and reporting tools.</li>
                            <li> With our software, you will be able to perform on time and patient-centered care with managed workflow and reminders. This software is a complete and ultimate clinic management and reporting program that gives you the ability to conduct all activities from anywhere at any time.</li>
                            <li> Primary Health Care Software provides end-to-end clinic management. With this software, you can manage, maintain and share your health records which include electronic medical records, electronic prescription writing, drugs databases, lab reports, and more.</li>
                        </ul>
                        <p>Our hospital management software is an all-in-one software system for keeping track of everything from staff details to patient histories, drug information, lab results, and more.</p>
                    </RightToLeftAnimation>
                </div>
            </div>
        </div>
    )
}
