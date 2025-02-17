import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function Finance() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/financei.png' />
            </ScaleAnimation>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <LeftToRightAnimation className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/financep.svg" />
                    </LeftToRightAnimation>
                    <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">Software used for recording all financial activity within a business organization is known as Financial Application Software.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>Financial applications are software programs that streamline business processes involving money.</li>
                            <li>It is a personal finance management system that is GST-ready Accounting, Invoicing, and Inventory management software. Different modules are included in this software, such as Personal Accounting, Asset Management, Loan Management, Investment Management, Income Tax Preparation, Personal Organizer, etc.</li>
                            <li>Our Billing, Inventory Management, and Accounting Software is Windows-based, and Besides being reliable, user-friendly, and affordable, this software stands out for its standout application features. All your financial operations can be managed in one place so that you can remain on top of your finances and make informed decisions.</li>
                        </ul>

                    </RightToLeftAnimation>
                </div>
            </div>
        </div>
    )
}
