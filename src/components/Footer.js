import React from "react";
import {FaInstagramSquare} from "react-icons/fa";
import {IoLogoYoutube} from "react-icons/io";
import {BsLinkedin} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <div className="maindiv font-[poppins] w-[88.92%] ">
    <div className="mt-[5%] flex justify-center items-center font-[poppins] scale-125 ]">
      <div className="bg-stone-300 flex justify-between items-center text-center px-[11%] w-[100%] py-[1%] ">
        <div className="font-bold">
          Ready to get Started <br />
          Talks to us Today
        </div>
        <NavLink to="/contact">
          <button className="hover:bg-blue-500 px-2 py-2 ml-6 rounded-md bg-gradient-to-tr from-red-400 to to-blue-600 text-white active:text-red-500">
            Get Started
          </button>
        </NavLink>
      </div>
    </div>
    {/* after scale div start from here */}
    <div>
        <div className="grid grid-cols-12 px-[20%] py-[2%] bg-blue-500 gap-4 w-[112.5%]">
            {/* fisrt dev strt */}
            <div className="md:col-span-3 col-span-12 text-center ">
                <h1 className="font-bold">Sangwan Store</h1>
                <p className="text-white">Best web designer, developer and video editor.</p>
            </div>
            {/* 2nd div start*/}
            <div className="md:col-span-3 col-span-12 text-center flex flex-col justify-center items-center space-y-2">
                <h1 className="font-bold ">Subscribe to get important Updates</h1>
                <form className="flex flex-col justify-center items-center space-y-2" method="post" action="https://formspree.io/f/mlevnjev">
                    <input required type="email" name="User Want Update" placeholder="Enter your Email" className="text-center rounded-md"/>
                    <input type="Submit" placeholder="Subscribe" className="bg-blue-900 text-white px-2 py-2 rounded-md"/>
                </form>
            </div>
            {/* 3rd div start */} 
            <div className="md:col-span-3 col-span-12 ">
                <h1 className="text-center font-bold ">Follow Us</h1>
                <div className="py-4 flex justify-center items-center gap-2 text-white ">
                    <a href="https://www.instagram.com/sachin_sangwan12/"><i ><FaInstagramSquare className="transition hover:scale-150"/></i></a>
                    <a href="https://www.youtube.com/channel/UCcjLYHHOBRQcBvm2HNbdXfg"><i><IoLogoYoutube className="transition hover:scale-150"/></i></a>
                    <a href="https://linkedin.com/in/sachin-sangwan-766233216"><i><BsLinkedin className="transition hover:scale-150"/></i></a>
                    <a href=" https://wa.me/8053081201"><i><IoLogoWhatsapp className="transition hover:scale-150"/></i></a>
                </div>
            </div>
            {/* fourth div start */}
            <div className="md:col-span-3 col-span-12 text-center">
                <h1 className="font-bold">Call us</h1>
                <a href="tel:8053081201" className="text-white">+91 8053081201</a>
            </div>
          {/* horizontal line */}
        
            <hr className="w-[60vw] "/>
            <div className="flex justify-between items-center w-[50vw] py-4">
                <p className="text-white text-center">@{new Date().getFullYear()} Sangwan Store. All Rights Reserved </p>
                <p className="text-center text-white">privace Policy<br/> Terms & Condition</p>

            </div>
          
        </div>
        
    </div>

    </div>
  );
}

export default Footer;
