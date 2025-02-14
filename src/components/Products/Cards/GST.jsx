import React from 'react'

export default function GST() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <div className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/gsti.png' />
            </div>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <div className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/gstp.svg" />
                    </div>
                    <div className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">The GST billing software allows companies to create invoices, bills, inventory management, etc.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>GST billing software offers organizations the ability to manage GST compliance and ensure businesses conform to the required regulations. It gives organizations easy features for invoicing, data filling in returns, downloading comparative analysis reports, and checking the client return status on a dashboard.</li>
                            <li> With our software, you can manage your finances, accounts, and taxes. Using these tools, the GST rates are automatically calculated for your tax liability. We simplify the GST Return filing process for Chartered Accountants, Tax Professionals & Corporations with our GST Return software. This software has a number of innovative features that help businesses automate functions to drive efficiency.</li>
                            <li> Also, it is designed to simplify taxation and to offer key advantages to business owners, such as customization and reports, ensuring full tax compliance, and it is fast, reliable, and easy to use.</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
