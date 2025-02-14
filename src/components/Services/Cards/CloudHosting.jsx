import React from 'react'

export default function CloudHosting() {
  return (
    <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
    <div className='aspect-[18/10] lg:aspect-[18/7] '>
    <img className=' h-[100%] w-[100%] object-contain' src='/Images/cloudHosting.png' />
    </div>
   <div className='justify-items-center mt-5 lg:mt-10'>
   <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
      <div className='lg:w-[40%] my-4 '>
        <img className=" w-[100%]" alt='image' src="/svg/cloudHosting.svg" />
      </div>
      <div className='lg:w-[60%] my-4 md:px-5'>
        <h1 className="font-bold text-xl">Cloud hosting gives users access to applications and websites via cloud resources.</h1>
        <ul className='m-5 list-disc list-inside'>
          <li>In the growing field of Cloud hosting services, Cloudways stands out for several reasons with its cloud hosting services. You have the option of choosing one of five platforms, including Google Cloud Platform.</li>
          <li> When your website experiences a sudden spike in traffic, it can utilize resources from another server to prevent slow page loads or site failure. Furthermore, cloud hosting makes it easy to scale resources up or down, as needed, for your website.</li>
        </ul>
       
      </div>
    </div>
   </div>
  </div>
  )
}
