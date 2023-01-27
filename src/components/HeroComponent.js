import React from "react";
import { NavLink } from "react-router-dom";
const HeroComponent = (props) => {
  return (
    <>
      <div className="font-[poppins] flex md:flex-row md:justify-center md:items-center flex-col justify-start   md:px-[20%] px-[2%] gap-y-6 md:gap-[4%] py-[4%]">
        <div className="flex flex-col justify-start space-y-2">
          <p>Welcome to</p>
          <h1 className="font-bold text-2xl">{props.name}</h1>
          <p>
            loremOfficia adipisicing sunt non sunt dolor nisi reprehenderit ea
            amet. Exercitation ea amet amet anim do. Adipisicing laborum
            consequat sint ullamco magna dolore tempor consequat dolor. Fugiat
          </p>
          <NavLink to="/product">
          <button className="bg-blue-800 rounded-md text-white hover:bg-green-600 active:bg-red-700 px-2 text-center">
            Shop Now
          </button>
          </NavLink>
        </div>
        <div>
            <img src="../../shoppingimg.jpg" alt="welocme sangwan store" className="h-[] w-[80rem]"/>
        </div>
      </div>
    </>
  );
};
export default HeroComponent;
