import React,{useState,useEffect} from 'react'
import FormatPrice from '../components/FormatPrice'
function Product() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("https://api.pujakaitem.com/api/products").then((result)=>{
    result.json().then((resp)=>{
      // console.log(resp)
      setdata(resp)
    })
  })
  },[])
  console.log(data)
  
  return (
    <div className='grid grid-cols-12 gap-4 mt-[10px] mb-[15%] justify-center items-center '>
      {
        data.map((curelem)=>{
          return(
              <div className="md:col-span-4 col-span-12 w-[70%] h-[90%] ml-[10%] hover:scale-105 shadow-xl shadow-black mt-[50px] rounded-2xl">
                  <img src={curelem.image} className=""/>
                  <div className='p-2'>{curelem.name}</div>
                  <div className='p-2'>Company-> {curelem.company}</div>
                  <div className='p-2'><FormatPrice price={curelem.price + 500000}></FormatPrice></div>
               
               </div>
          
          )
        })
      }
    </div>
  )
}

export default Product