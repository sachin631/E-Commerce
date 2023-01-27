import React, { useState } from "react";
import {AiOutlineCheck} from "react-icons/ai"
import {ImCross} from "react-icons/im"

function AddToCart({ singProduct }) {
  const { id, stock, colors } = singProduct;
  const [color,setColor]=useState(colors[0])
  console.log("colors: " + colors);
  return (
    <div className="flex gap-4 md:justify-start justify-center items-center">
      colors:
      {colors.map((curelem, index) => {
        return (
          <button 
          key={index}
          style={{backgroundColor:curelem}}
          className="text-blue-700 rounded-full px-1 py-1 w-6 h-6"
          onClick={()=>{setColor(curelem)}}
          >
           {color===curelem ? <AiOutlineCheck/>:null }
          </button>
        );
      })}
    </div>
  );
}

export default AddToCart;
