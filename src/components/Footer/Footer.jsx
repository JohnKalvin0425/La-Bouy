import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import aaa from '..//icons/aaa.png'
import bbb from '..//icons/bbb.png'
import ccc from '..//icons/ccc.png'


const Footer = () => {
  return (
    <footer>
      <div className="bg-[#01dada]  lg:h-[253px] h-[240px]">
        
        <h1 className="text-center font-semibold text-3xl pt-7">AWARDS AND RECOGNATION</h1>
      <div className="flex justify-center gap-6 sm:gap-3 mt-5">
          <img src={aaa} className="lg:w-[200px] lg:h-[150px] w-[90px] h-[90px]" />
          <img src={bbb} className="lg:w-[200px] lg:h-[150px] w-[90px] h-[90px]" />
          <img src={ccc} className="lg:w-[200px] lg:h-[150px] w-[90px] h-[90px]" />
      
          

      
        </div>
        <hr className="my-5" />
      <div className="pb-10 lg:ml-0 ml-2">
        <div className="grid lg:grid-cols-3 grid-cols-1 mb-12">
          <div className="grid-cols-1 lg:ml-40 lg:mt-10">
            <h1 className="text-xl font-semibold lg:my-0 my-3">PHONE & MAIL</h1>
            <p className="text-gray-600">+63 9388797478</p>
            <p className="text-gray-600">labouy@customer.com</p>
          </div>
          <div className="grid-cols-1 lg:ml-40 lg:mt-10">
            <p className="text-xl font-semibold lg:my-0 my-3 lg:ml-6 ml-1">SOCIAL MEDIA SITES</p>
            <div className="flex gap-3 mt-3 ">
              
            <SocialIcons Icons={Icons} />
            
            </div>

          </div>
          <div className="grid-cols-1 lg:ml-40 lg:mt-10">
            <h1 className="text-xl font-semibold lg:my-0 my-3">SUBSCRIBE NEWSLETTER</h1>
            <input type="text"  placeholder="Email" className="rounded-l-lg"/>
            <button className="px-3 py-2  text-black font-bold bg-yellow-300 rounded-r-lg">SUBSCRIBE</button>
          </div>
          </div>
        </div>
       
      </div>
     
    </footer>
  );
};

export default Footer;;