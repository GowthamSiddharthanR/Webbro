import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function CMS() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/cmsi.png' />
            </ScaleAnimation>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <LeftToRightAnimation className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/cmsp.svg" />
                    </LeftToRightAnimation>
                    <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">CMS programs are used to manage and publish web content. Multiple authors
                             can contribute to the content via a CMS.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>Content management systems (CMSs) allow users to build and maintain websites without having to code
                                 them from scratch or know how to code at all. Content can be managed, modified, and published easily
                                  with a CMS.</li>
                            <li> This platform enables anyone with authorization to publish images or content with ease. You can 
                                control the platform's functionality, interface, and updates with a custom CMS, which is a solution 
                                developed exclusively for you or your company.</li>
                            <li> The company provides CMS development services to businesses of all sizes and types. Its content 
                                creation system lets users easily design and format content. A centralized storage system keeps 
                                content in one place while maintaining consistency.</li>
                        </ul>
                        <p>A CMS system offers simplicity, flexibility, scalability, and an affordable solution. It helps generate 
                            revenue and traffic to your site by allowing you to easily create content for your website.</p>
                    </RightToLeftAnimation>
                </div>
            </div>
        </div>
    )
}
