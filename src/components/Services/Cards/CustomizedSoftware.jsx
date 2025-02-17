import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function CustomizedSoftware() {
  return (
    <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
      <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7]'>
        <img className=' h-[100%] w-[100%] object-contain' src='/Images/customisedSoftware.png' />
      </ScaleAnimation>
      <div className='justify-items-center mt-5 lg:mt-10'>
        <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
          <LeftToRightAnimation className='lg:w-[40%] my-4 '>
            <img className=" w-[100%]" alt='image' src="/svg/customizedSoftware.svg" />
          </LeftToRightAnimation>
          <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
            <h1 className="font-bold text-xl">Customized software refers to software that is specifically developed for a specific organization or user.</h1>
            <ul className='m-5 list-disc list-inside'>
              <li> We develop software for automating enterprise-wide processes, including interdepartmental data flows and transactions with customers, vendors, and partners, for example, ERP, POS, and others.</li>

              <li>In order to meet a specific department's needs within your organization, we customize the software with features that are not available in commercial or free software. Examples: CRM, inventory management.</li>
              <li> Our invoicing, billing software and billing automation products cover all business-specific and industry-specific functions, so they don't require complicated customization as does market-available software.</li>
              <li>  Using our mobile apps, patient portals, and shopping applications, we can help you win the market.</li>

            </ul>
          </RightToLeftAnimation>
        </div>
      </div>
    </div>
  )
}
