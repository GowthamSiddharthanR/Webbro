
import React from 'react'

function loading() {

  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='h-screen flex flex-col justify-center items-center'>
      <div role="status" >
        <img src='/Images/logo.png'/>
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    </div>
  )
}

export default loading