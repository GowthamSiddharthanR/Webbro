import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import React from 'react'

export default function CRM() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <div className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/crmi.png' />
            </div>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                   <LeftToRightAnimation className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/crmp.svg" />
                    </LeftToRightAnimation>
                    <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">CRM (Customer Relationship Management) entails the analysis of customer data to improve customer relations and personalize future communication.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>CRM software helps you give customers a unique and seamless experience while building stronger relationships by keeping a record of all customer interactions, tracking sales, and organizing and prioritizing tasks</li>
                            <li> A platform that connects all departments within your organization, from marketing to sales to customer service, and brings their notes, activities, and metrics together into one. The user has easy, direct access to all the client data they require in real-time. As a result, businesses are able to offer their customers something extra special: personalized and one-to-one customer journeys.</li>
                            <li> With this level of functionality compared to old analog and legacy systems, you have something that has the potential to transform how businesses interact with customers. It is impossible to define CRM software without considering SaaS and cloud computing, both of which work together to ensure CRM platforms are always available wherever a user has access to the internet.</li>
                        </ul>
                        <p>The cloud-based CRM software can grow and scale with your business as this technology develops, so any business, no matter what its size, can reap the benefits of CRM-based software.</p>
                    </RightToLeftAnimation>
                </div>
            </div>
        </div>
    )
}
