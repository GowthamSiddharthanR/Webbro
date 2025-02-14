import React from 'react'

export default function ServerMaintenance() {
  return (
    <div className="bg-[url('/Images/cardpagebg.png')] mt-5 bg-cover">
    <div className='aspect-[18/10] lg:aspect-[18/7] '>
    <img className=' h-[100%] w-[100%] object-contain' src='/Images/serverMaintanance.png' />
    </div>
   <div className='justify-items-center mt-5 lg:mt-10'>
   <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
      <div className='lg:w-[40%] my-4 '>
        <img className=" w-[100%]" alt='image' src="/svg/serverMaintanance.svg" />
      </div>
      <div className='lg:w-[60%] my-4 md:px-5'>
        <h1 className="font-bold text-xl">Server maintenance involves keeping a server's software up to date and running so that a computer network runs smoothly without disruption.</h1>
        <ul className='m-5 list-disc list-inside'>
          <li>We provide a service that eliminates any security issues and implements program updates by providing efficient server maintenance. We manage security and server maintenance meticulously in order to maintain the site's continuous functioning. Our servers are kept in the best possible condition to prevent any slowdowns or interruptions in service.</li>
          <li> Our team offers a comprehensive range of Server Maintenance Services for Linux and Windows servers with high efficiency and seamless effort.</li>
          <li> Also, we make sure that the website runs optimally to maintain the reputation of the business with its visitors. It is our goal to ensure that the servers on your network deliver the expected performance to all users.</li>
        </ul>
        <p>We provide dedicated server maintenance services to keep your website running round-the-clock with the best performance. The server monitoring service provides 24-hour support service to your hardware and software when your system is in a critical state or service is down.</p>
      </div>
    </div>
   </div>
  </div>
  )
}
