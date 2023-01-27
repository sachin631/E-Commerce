import React from 'react';
import { useState } from 'react';

function ImageSingle({imgs=[{url:""}]}) {
    const [ChangeImage,SetChangeImage]=useState(imgs[0]);
  return (
    <div>
        <div className='md:flex  justify-center  space-y-1 space-x-2 items-center  '>
            <div className="flex md:flex-col  justify-start items-start  md:w-[80%] gap-2 ">
                {imgs.map((curelem,index)=>{
                    return(
                        <img src={curelem.url} key={index}  onClick={()=>{SetChangeImage(curelem)}} className="md:w-auto w-[23%]"/>
                    )
                })}
            </div>
            <div className='flex justify-center items-center'>
               <img src={ChangeImage.url} />
               {/* <img src={imgs[0].url} /> */}
            </div>
        </div>
    </div>
  )
}

export default ImageSingle