import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { createcontext } from './context/Productcontext';

function Error() {
  const usecontext=useContext(createcontext);
  return (
    
    <div>
      {usecontext}
      <div className='text-center flex flex-col justify-center items-center h-[40vh]'>
        <h1 className='text-4xl bg-[crimson] hover:bg-gradient-to-tr hover:from-red-500 hover:to-orange-500 px-4 py-4 mt-4 mb-4 text-white rounded-md'>Page Not found!  404 Error</h1>
        <NavLink to="/"><button className='text-3xl bg-green-500 hover:bg-red-500 active:bg-blue-500 font-bold text-center px-2 py-2 text-white rounded-md'>Go Home</button></NavLink>
      </div>
    </div>
  )
}

export default Error;