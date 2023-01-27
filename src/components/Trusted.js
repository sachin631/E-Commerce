import React from 'react'

function Trusted() {
  return (
    <div className='maindiv pt-[4%] font-[poppins]'>

        <div className='maincontainer flex-col justify-center items-center space-y-4 bg-orange-500  '>
          <h1 className='text-center tracking-widest font-bold py-2'>Trusted By 1000+ Company</h1>
          <div className='pb-[5%] flex md:flex-row flex-col  justify-center items-center md:space-x-[0%] md:space-y-0 space-y-[8%] gap-4'>
            <div className='bg-gradient-to-tr  from-red-500 to-blue-500 hover:bg-gradient-to-tr  hover:from-red-700 hover:to-blue-700'><img src='../../sangwanlogo.png' className='h-[9rem] mix-blend-overlay' alt='img' /></div>
            <div className='bg-gradient-to-tr  from-red-500 to-blue-500 hover:bg-gradient-to-tr  hover:from-red-700 hover:to-blue-700'><img src='../../amzone.png' className='h-[9rem] mix-blend-overlay' alt='img'/></div>
            <div className='bg-gradient-to-tr  from-red-500 to-blue-500 hover:bg-gradient-to-tr  hover:from-red-700 hover:to-blue-700'><img src='../../google.png' className='h-[9rem] mix-blend-overlay' alt='img'/></div>
            <div className='bg-gradient-to-tr  from-red-500 to-blue-500 hover:bg-gradient-to-tr  hover:from-red-700 hover:to-blue-700'><img src='../../tata.png' className='h-[9rem] mix-blend-overlay' alt='img'/></div>
            <div className='bg-gradient-to-tr  from-red-500 to-blue-500 hover:bg-gradient-to-tr  hover:from-red-700 hover:to-blue-700'><img src='../../wipro.jfif' className='h-[9rem] mix-blend-overlay' alt='img'/></div>
          </div>
        </div>

    </div>
  )
}

export default Trusted