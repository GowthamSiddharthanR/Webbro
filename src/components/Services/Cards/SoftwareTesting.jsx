import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function SoftwareTesting() {
  return (
    <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
      <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
      <img className=' h-[100%] w-[100%] object-contain' src='/Images/softwareTesting.png' />
      </ScaleAnimation>
     <div className='justify-items-center mt-5 lg:mt-10'>
     <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
        <LeftToRightAnimation className='lg:w-[40%] my-4 '>
          <img className=" w-[100%]" alt='image' src="/svg/softwareTesting.svg" />
        </LeftToRightAnimation>
        <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
          <h1 className="font-bold text-xl">Software Testing includes activities that ensure the identification of bugs, errors, defects & other types of technical issues.</h1>
          <ul className='m-5 list-disc list-inside'>
            <li>Software Testing is the practice of checking whether a product meets customer requirements. The purpose of Software Testing is to facilitate and define goals related to product design, development, and production.</li>
            <li> Our functional testing services ensure that all of your software application's functions comply with the specified behavioral requirements, protecting quality and ensuring compliance with specifications. By enhancing speed, quality, and security, as well as customer experience, our top-notch software quality assurance services save you money.</li>
            <li> A primary Testing is to Track and resolve defects before products are released. It focuses on improving processes to deliver a quality product to the customer.</li>
          </ul>
          <p>As a provider of end-to-end testing services, we have expertise in both manual and automated testing using advanced technology. Our team follows a meticulous process for improving user experience and usability with the latest tools and methodologies. We ensure quality is over delivered and our products are guaranteed.</p>
        </RightToLeftAnimation>
      </div>
     </div>
    </div>
  )
}
