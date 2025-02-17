import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function MobileApplication() {
  return (
    <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
      <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
        <img className=' h-[100%] w-[100%] object-contain' src='/Images/mobileApplication.png' />
      </ScaleAnimation>
      <div className='justify-items-center mt-5 lg:mt-10'>
        <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
          <LeftToRightAnimation className='lg:w-[40%] my-4 '>
            <img className=" w-[100%]" alt='image' src="/svg/mobileApplication.svg" />
          </LeftToRightAnimation>
          <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
            <h1 className="font-bold text-xl">Mobile application development is the process of creating software for smartphones and digital assistants, most ordinarily for Android and iOS.</h1>
            <p>We develop Mobile Applications for Android, IOS, and cross-platform systems. We offer Apps that are reliable, compatible, user-friendly, and easy to use. Within the given time frame, we deliver the best UX, accurate functionality, testing, and providing high-level security to meet all client requirements.</p>

            <ul className='m-5 list-disc list-inside'>
              <li> We create apps that are both reliable and best-in-class in the iOS app store We launch apps that are equally compatible with all platforms and devices, so they are versatile in nature.</li>

              <li>We develop mobile that is reliable, secure, dependable, and compatible for all platforms and different mobile devices. Each App must be complex and advanced in its level of coding, but it must be customized easily and quickly to suit the needs of the users.</li>
              <li> Since quality and performance are precisely maintained, our mobile applications are reliable and require less maintenance. And, when it comes to ensuring that an application meets industry-specific security requirements and offers maximum protection, we provide a 100% secure mobile application.</li>
            </ul>
            <p>As well as the functionality, we pay attention to the user interface design. It is our goal to provide a user-friendly interface that makes the user feel comfortable within the app.</p>
          </RightToLeftAnimation>
        </div>
      </div>
    </div>
  )
}
