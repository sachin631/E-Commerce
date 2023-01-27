import React from "react";
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GrMoney} from "react-icons/gr";
import {GrShieldSecurity} from "react-icons/gr";


const Services=()=>{
    return(
        <>
        <div className="mainDiv font-[poppins] mx-[10%]">
            <div className="maincontainer ">
                <div className="grid grid-cols-12 gap-2 ">
                    <div className="md:col-span-4 col-span-12  flex flex-col justify-center items-center   bg-[crimson] text-white hover:bg-blue-500 hover:text-white py-2 ">
                        <div className="py-2"><TbTruckDelivery/></div>
                        <div>Super Fast and Free Delivery</div>
                    </div>
                    <div className="md:col-span-4 col-span-12 flex flex-col justify-center items-center  gap-y-8 ">
                        <div className="flex justify-center items-center gap-3  bg-[crimson] text-white w-[100%] hover:bg-blue-500 hover:text-white">
                            <div className="py-4  "><MdSecurity/></div>
                            <div className="py-4">Non-contact Shipping</div>
                        </div>
                        <div className="md:col-span-4 col-span-12 gap-4 flex justify-center items-center  bg-[crimson] text-white w-[100%] hover:bg-blue-500 hover:text-white">
                            <div className="py-4" ><GrMoney/></div>
                            <div className="py-4" >Money-back Guranteed</div>
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 flex flex-col justify-center items-center gap-3  bg-[crimson] text-white hover:bg-blue-500 hover:text-white">
                        <div className="py-2"><GrShieldSecurity/></div>
                        <div>Super Secure Payment System</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Services;