import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function SmartSchool() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/schooli.png' />
            </ScaleAnimation>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <LeftToRightAnimation className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/schoolp.svg" />
                    </LeftToRightAnimation>
                    <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">Smarty School is a school management software application that provides various services to assist schools in their day-to-day administrative and educational activities.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>Smarty School is a school management software application that provides various services to assist schools in their day-to-day administrative and educational activities. Developed on a strong web architecture aligned with the demands of the educational field, it is a comprehensive cloud-based system.</li>
                            <li> We built it in accordance with the requirements of each institution. Our software allows you to manage student attendance, examinations, report cards, SMS, emails, staff information, notifications, report tracking, and leave management.</li>
                            <li> As well as being compatible, accessible, and flexible on numerous platforms and devices, school software is also very user-friendly and helps in connecting parents, staff, and management on one platform. It also gives the management a way to evaluate the performance of schools based on various metrics</li>
                        </ul>
                  
                    </RightToLeftAnimation>
                </div>
            </div>
        </div>
    )
}
