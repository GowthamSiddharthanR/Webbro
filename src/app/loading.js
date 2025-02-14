
import React from 'react'

function loading() {

  return (
    <div className='w-full h-full flex items-center justify-center animate-ping bg-[black]'>
      <div className='h-screen flex flex-col justify-center items-center'>
      <div role="status" >
        <img height={100} width={100}  src='/Images/logoupdate.png'/>
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    </div>
  )
}

export default loading