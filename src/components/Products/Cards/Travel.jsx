import React from 'react'

export default function Travel() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <div className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/traveli.png' />
            </div>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <div className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/travelp.svg" />
                    </div>
                    <div className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">The software is used to manage customer information, tour information, and back-office activities.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>Our Travel & Tourism Software simplifies travel processes, improves customer service standards, and motivates travelers by automating complicated tasks, as well as automating costly and time-consuming manual processes.</li>
                            <li> With this software, you can automate your tasks and increase your bookings while at the same time-saving time and it allows you to quickly process reservations from any device and offer a smooth online booking experience.</li>
                            <li> This software is designed to manage bookings, operations, and finances for Tour operators, Travel Agencies, Online Travel Agencies, and Travel Companies.</li>
                        </ul>
                        <p>In addition to managing customer information and tour information, our software also handles back-office operations so Users will be able to track their bills, manage their information, customize policies, make payments easily and manage customer information.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
