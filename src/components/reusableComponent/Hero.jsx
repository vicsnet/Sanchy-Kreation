import React from 'react'
import Herobg from '../assets/bg.png'
import Heroimg from '../assets/heroimg.png'
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="bg-[#0F1320] ">
      <img src={Herobg} alt="" className="w-[80%] ml-[20%] absolute" />
      <div className="relative">
        <Navbar />
        <div className=" w-[90%] mx-auto md:flex mt-12">
          <div className="md:mr-[6%] md:pt-[14%] lg:pt-[16%]">
            <h3 className="text-[#0C56FE] text-[16px] md:text-[24px] pb-2">
              At Sanchy Kreations we are{" "}
            </h3>
            <h1 className="text-[36px] text-[#FFFFFF] pb-2 lg:text-[60px] lg:w-[100%]">
              Solution-Driven
            </h1>
            <p className="text-[16px] leading-5 text-[#FFFFFF] mb-10 tracking-[3%] lg:text-[20px] lg:leading-7 ">
              Our values act as guidelines, so we know how to approach our work
              and collaborate when developing digital solutions that work. We
              desire to not only build but pioneer as the leader in emerging
              digital solutions for every lifestyle.
            </p>
          </div>
          <div className="">
            <img src={Heroimg} alt="" className="w-[100%] h-auto mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero