import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function WebApplication() {
  return (
    <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
      <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7]  py-10'>
        <img className=' h-[100%] w-[100%] object-contain' src='/Images/webApplication1.png' />
      </ScaleAnimation>
      <div className='justify-items-center mt-5 lg:mt-10'>
        <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
          <LeftToRightAnimation className='lg:w-[40%] my-4 '>
            <img className=" w-[100%]" alt='image' src="/svg/webApplication.svg" />
          </LeftToRightAnimation>
          <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
            <h1 className="font-bold text-xl">An application that uses web-based technology to perform specific tasks is called a website application, commonly known as a web app.</h1>
            <ul className='m-5 list-disc list-inside'>
              <li>We are one of the top companies providing top-notch web application development services to small and large companies. We code
                the Application using high levels of standard coding, which makes it more efficient and secure. Our web applications are
                mobile-responsive, customizable, and also user-friendly.</li>
              <li> As part of our commitment to helping our clients leverage cutting-edge tools and technologies and implement the same in their businesses to achieve competitive
                advantages, we ensure that you will create a standout solution that matches the specific requirements of your business.</li>
              <li> Our developers are familiar with various technologies and have a good understanding of how to leverage them when developing solutions based on them. Our aim is
                to deliver you smart solutions that can catch the attention of users and inspire higher user engagement.</li>
            </ul>
            <p>We keep track of the latest practices in web app development using the latest technologies during our development process, and we implement all these while creating
              the solutions for you. With us, your business gets more benefit from our solutions.</p>
          </RightToLeftAnimation>
        </div>
      </div>
    </div>
  )
}
