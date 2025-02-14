import React from 'react'

export default function LMS() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <div className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/lmsi.png' />
            </div>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <div className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/lmsp.svg" />
                    </div>
                    <div className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">Learning management systems are software applications used in the administration, documentation, tracking, reporting, and automation of educational courses, training programs, and learning and development programs.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>The Learning Management System is very easy to implement in your educational center and within no time, you can add all academic programs, subject study guides, and training materials.</li>
                            <li> You can access our LMS from anywhere and at any time. Just with an internet connection and your smart device, be it a computer, mobile phone, or tablet, you can access all the information in one place, avoiding any loss of data or information, and making it accessible to all users at the same time.</li>
                            <li>Your students will always have access to topic-specific study materials on the cloud so you don't have to worry about going out of stock. Enable timely alerts in your educational institution and send push notifications to students, parents, and teachers With our LMS, you are able to connect teachers and students, empowering them with a structured academic calendar and scheduler, and many more</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
