import React from 'react'

export default function POS() {
    return (
        <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
            <div className='aspect-[18/10] lg:aspect-[18/7] '>
                <img className=' h-[100%] w-[100%] object-contain' src='/Images/posi.png' />
            </div>
            <div className='justify-items-center mt-5 lg:mt-10'>
                <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
                    <div className='lg:w-[40%] my-4 '>
                        <img className=" w-[100%]" alt='image' src="/svg/posp.svg" />
                    </div>
                    <div className='lg:w-[60%] my-4 md:px-5'>
                        <h1 className="font-bold text-xl">A point of sale (POS) software system allows a customer to enter the information necessary for the payment of goods and services for the company as well as for the filing of sales taxes.</h1>
                        <ul className='m-5 list-disc list-inside'>
                            <li>Our POS Software system is a robust and simple POS retail management software that helps you grow your business rapidly. You can easily create bills, manage inventory, track accounts payables/receivables, retail POS, accounting.</li>
                            <li> Additionally, this software helps you improve your operations for your customers which includes reducing waiting time, faster scanning of items, quicker payments, etc.</li>
                            <li> This POS software helps with streamlining store processes from stock coming in, generating barcodes, updating inventory, generating invoices, stock out, and tracking payment collection, thus offering an end-to-end solution.</li>
                        </ul>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
