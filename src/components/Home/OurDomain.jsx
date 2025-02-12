import React from 'react'
import '../../CSS/Home/OurDomain.css'
import { motion } from 'framer-motion'

export default function OurDomain() {
  return (
    <div className='main'>
      <div className='heading2'>Our Domain Expertise</div>
      <h1 className='text-5xl text-center mb-5 mt-[-20px] text-[#FF6F61] font-black text-stone-100'>&#x291A;&#x2919;</h1>
      <h2 className='para2  md:px-10'>As domain experts, but also with excellent technological skills,
        We are well suited to transform a complex business problem into a simple solution.</h2>
      <div className='flex flex-wrap justify-evenly justify-center items-center  md:mb-10 gap-5  '>

       <motion.div className='relative1'
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/crm.svg' />
          </div>

          <a href="#" className=" card2 card2:hover">

            <h5 className="cardHead2">CMS Software</h5>
            <p className="cardContent2">The content management system (CMS) manages the creation and management of digital content.</p>
          </a>
        </motion.div>

       <motion.div className='relative1'
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/calculator.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">CRM Software</h5>
            <p className="cardContent2">Customer Support Software is customizable and scales to meet the needs of any business.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/pair.svg' />
          </div>
          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2"> ERP Software</h5>
            <p className="cardContent2">An ERP-based software solution used for automating back-office processes and everyday business tasks.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/cart.svg' />
          </div>
          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">E-Commerce</h5>
            <p className="cardContent2">A specialist eCommerce software platform helps merchants set up an online business.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/money.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">GST Billing Software</h5>
            <p className="cardContent2">The free invoice software for businesses with GST and all possible invoice features.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/heart.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">Health Care</h5>
            <p className="cardContent2">The software stores patient information in an electronic format in hospitals and clinics.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/school.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">Smart School</h5>
            <p className="cardContent2">We offer software modules such as student attendance, examinations, report cards, SMS,
              email, staff information and attendance and more.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/bank.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">Financial Application</h5>
            <p className="cardContent2">Facilitate the management of business processes dealing with money through software programs.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/book.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">LMS Software</h5>
            <p className="cardContent2">Our learning management system allows you to document, track,
              report and administer training programs.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/camera.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">Travel and Tourism</h5>
            <p className="cardContent2">Software used is typically equipped with booking management and payment processing.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 100, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/bill.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">POS</h5>
            <p className="cardContent2">POS software monitors and records all transactions between a seller and a buyer.</p>
          </a>

        </motion.div>
       <motion.div className='relative1'
          initial={{ y: 150, opacity: 0 }} // Start at size zero
          whileInView={{ y: 0, opacity: 1 }} // Transition to full size
          transition={{
            duration: 0.8, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        >
          <div className="absolute1 animate-bounce">
            <img src='/svg/pig.svg' />
          </div>

          <a href="#" className="card2 card2:hover">

            <h5 className="cardHead2">Chit Fund Software</h5>
            <p className="cardContent2">With this software, you will be able to conduct online bidding and manage
              multiple branches and locations all on a single platform</p>
          </a>

        </motion.div>

      </div>

    </div>
  )
}
