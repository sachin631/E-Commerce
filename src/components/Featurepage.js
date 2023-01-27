import React from 'react'
import { NavLink } from 'react-router-dom';
import { useProductContext } from "../context/Productcontext";
import FormatPrice from './FormatPrice';

const Featurepage=()=> {
    const { isloading, featureproducts } = useProductContext();
    if(isloading===true){
        return <div className='text-center py-4'>😂😂😂😂😂😂😂😂  Loading........  😂😂😂😂😂😂😂😂😂😂😂</div>
    }

  return (
    <>
    <div className='pb-[5%]'>

        <div className="flex justify-center items-center b-blue-400">
            <div className='g-red-500 mx-[20%] '>
                <h1 className='' >Check Now</h1>
                <h1 className='font-bold text-2xl'>Our Feature Services</h1>
                <div className='flex md:flex-row flex-col justify-start items-center gap-[10%] text-center pt-[3%] '>
                {
                    featureproducts.map((curelem)=>{
                        return(
                            <div key={curelem.id} className="">

                                <div className='relative'><NavLink to={`/singleproduct/${curelem.id}`}><img src={curelem.image} alt="alt" className='hover:scale-105'/></NavLink><h1 className="absolute mt-[-65%] ml-[50%] text-white px-1 py-1 bg-slate-400 rounded-md">{curelem.category}</h1></div>
                                    <div className='flex justify-between items-center py-4'>
                                        <h1>{curelem.name}</h1>
                                        <h1><FormatPrice price={curelem.price}/></h1>
                                    </div>             
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Featurepage