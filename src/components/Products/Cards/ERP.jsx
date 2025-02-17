import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function ERP() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/erpi.png' />
            </ScaleAnimation>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <LeftToRightAnimation className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/erpp.svg" />
                    </LeftToRightAnimation>
                    <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">The Enterprise Resource Planning (ERP) software is a management solution for improving business operations, communication, and collaboration.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>Enterprise resource planning software is a business process management software that is a simple but powerful tool that can help you keep track of all your business activities and track the progress of multiple business processes in one place, while ERP systems are also used for managing manufacturing processes, customer issues, and managing multiple user roles simultaneously.</li>
                            <li> Our software provides business owners the ability to track every aspect of their business. It has many components that can be added to the system as needed, providing easy expansion of the system.</li>
                            <li> In addition to overseeing a company's financials, supply chain, operations, commerce, reporting, manufacturing, and human resources, it can also organize orders linked to the website, production, raw materials, costing, inventory, as well as the point of sale.</li>
                        </ul>
                       
                    </RightToLeftAnimation>
                </div>
            </div>
        </div>
    )
}
