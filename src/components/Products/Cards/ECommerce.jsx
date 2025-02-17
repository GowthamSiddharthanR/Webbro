import LeftToRightAnimation from '@/components/LeftToRightAnimation'
import RightToLeftAnimation from '@/components/RightToLeftAnimation'
import ScaleAnimation from '@/components/ScaleAnimation'
import React from 'react'

export default function ECommerce() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <ScaleAnimation className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/ecomi.png' />
            </ScaleAnimation>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <LeftToRightAnimation className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/ecomp.svg" />
                    </LeftToRightAnimation>
                    <RightToLeftAnimation className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">Web-based e-commerce software helps you order and fulfil orders, track inventory, and manage product inventory.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>An eCommerce transaction involves the transfer of money and data in order to complete a transaction, as well as the sale of goods or services.</li>
                            <li> Ecommerce is also known as electronic commerce or internet commerce. A typical example of eCommerce is the sale of physical products online, but it can also be used to describe any type of commercial transaction conducted online.</li>
                            <li> E-commerce Software is the perfect software web store solution that offers you everything that you may need for your online business. This eCommerce software provides full customization and is built using highly scalable technology..it is a web-based, multi-channel order fulfillment software. It is one of the best eCommerce platform software for both B2C and B2B companies</li>
                        </ul>
                        <p>This eCommerce platform builds a full-fledged eCommerce store equipped with a Multiple manager Setup, multiple secure payment gateways, and other options as well which improves your online services and business.</p>
                    </RightToLeftAnimation>
                </div>
            </div>
        </div>
    )
}
