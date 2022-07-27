import React from 'react'
import Heroimg from "../assets/heroimg.png";

const MainHero = ({ title, Heading, details, image, Active }) => {
  
  return (
    <div>
      <div className=" w-[90%] mx-auto md:flex mt-12">
        <div className="md:w-[50%] lg:w-[55%] md:mr-[6%] md:pt-[14%] lg:pt-[16%]">
          <h3 className="text-[#0C56FE] text-[16px] md:text-[20px] pb-2 font-bold bt tracking-[10%]">
            {title}
          </h3>
          <h1 className="text-[36px] t pb-2 lg:text-[50px] xl:text-[60px] lg:w-[100%] font-bold">
            {Heading}
          </h1>
          <p className={Active} >
            {details}
          </p>
        </div>
        <div className="md:w-[50%] lg:w-[50%]">
          <img src={image} alt="" className="w-[100%] h-auto mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default MainHero