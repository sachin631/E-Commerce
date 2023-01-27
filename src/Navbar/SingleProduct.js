import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../context/Productcontext";
import FormatPrice from "../components/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

import ImageSingle from "../components/ImageSingle";
import AddToCart from "../components/AddToCart";


function SingleProduct() {
  const { getSingleproduct, isSingleLoading, singleProduct } =
    useProductContext();

  const [Amount, setAmount] = useState(1);

  const apI = "https://api.pujakaitem.com/api/products";
  const { id } = useParams();

  useEffect(() => {
    getSingleproduct(`${apI}?id=${id}`);
  }, []);
  // console.log(singleProduct);
  //singleproduct page data
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
    colors,
  } = singleProduct;
  console.log(singleProduct);
  const ratingStar = Array.from({ length: 5 }, (curelem, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="m-2">
        <NavLink to="/" className="text-blue-500">
          HOME/
        </NavLink>
        {name}
      </div>
      <div className="mt-8  grid grid-cols-12 md:space-x-20 space-y-4 font-serif md:mx-24 mx-2">
        <div className="md:col-span-6 col-span-12 text-end">
          <figure className=" ">
            <ImageSingle imgs={image} />
          </figure>
        </div>
        <div className="md:col-span-6 col-span-12 md:text-start text-center">
          <div>{name}</div>
          <div className="flex  gap-3 md:justify-start justify-center items-center">
            {ratingStar} ({reviews} customer reviews)
          </div>
          <del>
            MRP:
            <FormatPrice price={price + 500000} />
          </del>
          <div className="font-serif">
            Deal of the Day:
            <FormatPrice price={price + 5000} />
          </div>
          <div className="font-[poppins] text-slate-700">{description}</div>
          <div className="flex justify-start items-center gap-7 mt-4">
            <div className="text-slate-700 text-center flex flex-col gap-2 justify-center items-center">
              <TbTruckDelivery />
              Free Delivery
            </div>
            <div className="text-slate-700 text-center flex flex-col gap-2 justify-center items-center">
              {" "}
              <TbReplace />
              Free Delivery
            </div>
            <div className="text-slate-700 text-center flex flex-col gap-2 justify-center items-center">
              <MdSecurity />
              Free Delivery
            </div>
            <div className="text-slate-700 text-center flex flex-col gap-2 justify-center items-center">
              <TbTruckDelivery />
              Free Delivery
            </div>
          </div>
          <div className="mt-4">
            <div className="text-slate-700">
              Available:
              <span className="text-gray-800">
                {stock > 0 ? "in stock" : "not in stack"}
              </span>
            </div>
            <div className="text-slate-700">
              ID:<span className="text-gray-800">{id}</span>
            </div>
            <div className="text-slate-700">
              Brand:<span className="text-gray-800">{company}</span>
            </div>
            {/* select colors */}
            <div className="mt-4">
              {stock > 0 && <AddToCart singProduct={singleProduct} />}
            </div>
            {/* select add to cart increment decrement button*/}
            <div className="flex md:justify-start justify-center items-center mt-4 gap-6 mb-3 ">
              <AiFillMinusCircle
                onClick={() => {
                 if(Amount>1){
                  setAmount(Amount-1)
                 }
                 else{
                  alert("select atleast one")
                 }
                }}
              />
              {Amount}
              <AiFillPlusCircle
                onClick={() => {
                  if(Amount<stock){
                    
                    setAmount(Amount+1)
                  }
                  else{
                    alert(`only ${stock} available`)
                  }
                }}
              />
              
            </div>
            {/* Add to cart button */}
            <div >
              <NavLink to="/cart"><button className="bg-blue-500 rounded-lg text-white px-2 py-2" >Add to Cart</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
