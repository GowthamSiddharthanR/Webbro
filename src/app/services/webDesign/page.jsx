
import React from 'react'

export default function page() {
  return (
    <div className="bg-[url('/Images/cardpagebg.png')] bg-cover">
      <div className='aspect-[18/10] lg:aspect-[18/7] '>
      <img className=' h-[100%] w-[100%] object-contain' src='/Images/webDesign.png' />
      </div>
     <div className='justify-items-center mt-5 lg:mt-10'>
     <div className="lg:flex md:px-10 p-4 bg-[url('/Images/cardpagebg.png')] shadow-2xl shadow-gray-800 mb-10 w-[90%] bg-cover">
        <div className='lg:w-[40%] my-4 '>
          <img className=" w-[100%]" alt='image' src="/svg/web-design-page.svg" />
        </div>
        <div className='lg:w-[60%] my-4 md:px-5'>
          <h1 className="font-bold text-xl">A Good Web Design not only attracts customers but also makes a positive impression on consumers of your brand.</h1>
          <ul className='m-5 list-disc list-inside'>
            <li>Our premium web design & development services provide you the right foot forward to build your business, promote your services,
              or display your products, regardless of whether you are a startup, enterprise, or an established brand.</li>
            <li> By combining our expert knowledge and cutting-edge technology, we help you create engaging, attractive, Mobile-Friendly, and
              meaningful experiences for your audience.</li>
            <li> As professional web designers, we craft not just the design, but the experience your target customers encounter while
              interacting with your business, and we adhere to all web design trends.</li>
          </ul>
          <p>We build you a user-friendly and suitable website design while making sure it complements your specific business needs, market,
            target audience, etc. With Website Designing, you receive a Mobile-Friendly/Optimized Website, a Responsive Design, an
            Easy-to-Manage Interface, and After Delivery Support.</p>
        </div>
      </div>
     </div>
    </div>
  )
}
