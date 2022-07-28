import React from "react";
import Rectangle112 from "../assets/Rectangle 11 (6).png";
import Rectangle113 from "../assets/Rectangle 11 (7).png";
import Rectangle114 from "../assets/Rectangle 11 (8).png";
import Group37 from "../assets/Group 8482.png";
import Vector3 from "../assets/Vector3.png";
import ExploreBut from "./ExploreBut";

const Project = () => {
  return (
    <div className="">
      <div className="w-[100%] mx-auto lg:pb-36">
        <div className="">
          <img
            src={Group37}
            alt=""
            className=" hidden md:block w-[100%] h-auto absolute mt-[-15%] "
          />
        </div>
        <div className="relative">
          <h2 className="text-[36px] text-[#FFFFFF] sm:text-center sm:pb-6 md:pt-32 font-bold mx-auto w-[90%]">
            Our Projects
          </h2>
          <div className="md:flex md:w-[90%] lg:w-[80%] md:mx-auto md:gap-5  sm:w-[60%] sm:mx-auto sm:pb-32 md:pb-0">
            <div className="bg-[#FFFFFF] mb-6 md:h-[460px] ">
              <div className="bg-[#FFFFFF] w-[80%] mx-auto">
                <img
                  src={Rectangle112}
                  alt=""
                  className="pt-[38px] pb-[46px] w-[100%]"
                />
                <div className="">
                  <h3 className="text-center text-[24px] text-[#000000] font-bold">
                    Sanchy Technology
                  </h3>

                  <div className="px-auto mx-auto mt-4 flex pb-8 md:pb-0 ">
                    <ExploreBut className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] mb-6 md:mt-[72px] md:h-[460px]">
              <div className="bg-[#FFFFFF] w-[80%] mx-auto">
                <img
                  src={Rectangle113}
                  alt=""
                  className="pt-[38px] pb-[46px] w-[100%]"
                />
                <div>
                  <h2 className="absolute top-[45%] flex text-center items-center md:top-[50%] xl:top-[55%] left-[40.3%] t md:left-[45%] text-[16px]">
                    Coming Soon
                  </h2>
                </div>
                <div className="">
                  <h3 className="text-center text-[24px] text-[#000000] font-bold ">
                    Sanchy Real Estate
                  </h3>

                  <div className="px-auto mx-auto mt-4 flex pb-8 md:pb-0">
                    <ExploreBut className="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] md:mb-6 md:h-[460px]">
              <div className="bg-[#FFFFFF] w-[80%] mx-auto">
                <img
                  src={Rectangle114}
                  alt=""
                  className="pt-[38px] pb-[46px] w-[100%]"
                />
                <div className="">
                  <h3 className="text-center text-[24px] text-[#000000] font-bold">
                    Sanchy Nutrition
                  </h3>

                  <div className="px-auto mx-auto flex mt-4 pb-8 md:pb-0">
                    <ExploreBut />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
