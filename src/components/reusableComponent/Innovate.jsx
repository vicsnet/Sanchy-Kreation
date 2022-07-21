import React from 'react'
import Group8489 from "../assets/Group 8489.png";
import Rectangle227121 from "../assets/Rectangle227121.png";
const Innovate = () => {
  return (
    <div>
      <div className="lg:flex lg:gap-6 lg:mt-[10%]">
        <div className="lg:w-[50%] lg:mt-[10%] ml-[2%] ">
          <div className=" bg-[#171B29] rounded-[25px] mt-9 mb-7 w-[90%] mx-auto lg:w-[100%] lg:h-[418px]">
            <div className="w-[90%] mx-auto pb-[101px] ">
              <img
                src={Group8489}
                alt=""
                className="w-[16%] h-auto pt-[27px] lg:pt-[60px] sm:w-[12%] md:w-[8%] lg:w-[10%]"
              />
              <div className="mt-8 ">
                <h2 className="text-[#FFD100] text-[36px] underline ">
                  Innovate with Research & Balance
                </h2>
                <p className="text-[20px] t tracking-[3%] mt-5 width-[100%] leading-6">
                  Passion and curiosity drive everything we do; wisdom and
                  experience ensure we accomplish our goals. We demand
                  excellence, no matter how challenging the task and push each
                  other out of our comfort zones to unleash our true potential.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <img src={Rectangle227121} alt="" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default Innovate