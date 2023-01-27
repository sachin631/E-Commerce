import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {BiMenu} from 'react-icons/bi';
import { useState } from 'react';
import {ImCross } from "react-icons/im";



const Nav = () => {
  const[Active,SetActive]=useState(false);
  return (
    <div className='bg-gradient-to-r from-[crimson] to-orange-500  w-[100%]'>
        <ul className='flex justify-between items-center '>
           <NavLink to="/"><li className='px-2  py-2 hover:bg-red-500 hover:text-white '><img src='../../sangwanlogo.PNG' alt="logo" className="w-[5vw] h-[10%] rounded-sm"/></li></NavLink> 
           <div className='flex justify-between items-center'>
           <NavLink to="/"><li className='px-2  py-6 hover:bg-black hover:text-white md:block hidden'>Home</li></NavLink> 
           <NavLink to="/About"><li className='px-2  py-6 hover:bg-black hover:text-white md:block hidden'>About</li></NavLink> 
           <NavLink to="/Product"><li className='px-2  py-6 hover:bg-black hover:text-white md:block hidden'>Product</li></NavLink> 
           <NavLink to="/contact"><li className='px-2   py-6 hover:bg-black hover:text-white md:block hidden'>Contact</li></NavLink> 
           {/* <NavLink to="/cart"><li className='px-4 py-6 hover:bg-black hover:text-white md:block hidden'>10<FaShoppingCart/></li></NavLink>  */}
           <NavLink ><li className='px-4 py-6 hover:bg-black hover:text-white md:hidden block'onClick={()=>{
            if(Active===false){
              SetActive(true);
            }
            else if(Active===true){
              SetActive(false)
            }
           }}><BiMenu /></li></NavLink> 

           </div>
        </ul>
        {/* vertical navbar start from here */}
        
        <ul className={Active===true?" flex flex-col jsutfy-center items-center space-y-4 md:hidden":"hidden"}>
        <li className='flex justify-center items-center hover:bg-black hover:text-white' onClick={()=>{
            if(Active===false){
              SetActive(true);
            }
            else if(Active===true){
              SetActive(false)
            }
           }}><ImCross/></li>
        <NavLink to="/"><li className='text-center hover:bg-black hover:text-white px-4 py-4'>Home</li></NavLink>
        <NavLink to="/about"><li className='text-center hover:bg-black hover:text-white px-4 py-4'>About</li></NavLink>
        <NavLink to="/playlist"><li className='text-center hover:bg-black hover:text-white px-4 py-4'>PROJECTS</li></NavLink>
        <NavLink to="/contact"><li className='text-center hover:bg-black hover:text-white px-4 py-4'>Contact</li></NavLink>
        {/* <NavLink to="/cart" className=' px-4 py-4 text-center flex justify-center items-center hover:bg-black hover:text-white'><li>1h0<FaShoppingCart /></li></NavLink> */}
        </ul>
        {/* vertical navbar end  here */}
    </div>
  )
}

export default Nav