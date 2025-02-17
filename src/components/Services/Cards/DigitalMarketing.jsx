import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function DigitalMarketing() {
  return (
    <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
      <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
        <img className=' h-[100%] w-[100%] object-contain' src='/Images/digitalMarketing.png' />
      </ScaleAnimation>
      <div className='justify-items-center mt-5 lg:mt-10'>
        <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
          <LeftToRightAnimation className='lg:w-[40%] my-4 '>
            <img className=" w-[100%]" alt='image' src="/svg/digitalMarketing.svg" />
          </LeftToRightAnimation>
          <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
            <h1 className="font-bold text-xl">Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the web and other sorts of data communication.</h1>
            <ul className='m-5 list-disc list-inside'>
              <li> Our team of highly skilled digital marketing experts works tirelessly to analyze your business goals and provide you with the most suitable digital marketing solutions to help you reach your goals.</li>

              <li><span className='text-lg font-bold'>Search Engine Optimization:</span> The goal of SEO is to enhance your business website's ranking and visibility in search engine results.
                This will increase sales and return on investment as well.</li>
              <li> <span className='text-lg font-bold'>Pay Per Click: </span>Using a pay per click campaign for your business is the best method of getting more leads online in a short period of time by spending money per click and getting effective results fast.</li>
            </ul>
            <p>We offer a wide range of digital marketing services including Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Optimization (SMO), Google My Business, Email Marketing, as well as Affiliate Marketing to help make brands more visible in the market, build long-term results, brand awareness, and build a solid reputation.</p>
          </RightToLeftAnimation>
        </div>
      </div>
    </div>
  )
}
