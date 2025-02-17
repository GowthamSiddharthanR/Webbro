import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function Chit() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/chiti.png' />
            </ScaleAnimation>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <LeftToRightAnimation className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/chitp.svg" />
                    </LeftToRightAnimation>
                    <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">ChitFund software helps your business be more profitable and secure at every step by improving your chit fund business and finance.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>Our Chit Fund Software system provides a complete set of tools for managing all aspects of your chit fund business, including Client management, Staff management, Accounting, Reporting, and Chit Management and it also comes with integrated HR and payroll management for easy administration of agents and employees.</li>
                            <li> With this software, you will be able to conduct online bidding and manage multiple branches and locations all on a single platform.</li>
                            <li> Software like this lets you maintain a report electronically instead of using paper ledgers. In addition, this software allows for easy customization to meet your chit fund business needs. Furthermore, these business reports provide an analysis of your chit fund business and predict its growth.</li>
                        </ul>

                    </RightToLeftAnimation>
                </div>
            </div>
        </div>
    )
}
