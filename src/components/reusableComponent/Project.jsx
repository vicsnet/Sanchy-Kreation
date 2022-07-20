import React from "react";
import Rectangle112 from "../assets/Rectangle112.png";
import Rectangle113 from "../assets/Rectangle113.png";
import Rectangle114 from "../assets/Rectangle114.png";
import Group37 from "../assets/Group37.png";
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
            className=" hidden lg:block w-[100%] h-auto absolute mt-[-15%]"
          />
        </div>
        <div className="relative">
          <h2 className="text-[36px] text-[#FFFFFF] lg:text-center lg:pb-6 lg:pt-32" >
            Our Projects
          </h2>
          <div className="lg:flex lg:w-[70%] lg:mx-auto lg:gap-5">
            <div className="bg-[#FFFFFF] mb-6 lg:h-[700px] ">
              <div className="bg-[#FFFFFF] w-[80%] mx-auto">
                <img
                  src={Rectangle112}
                  alt=""
                  className="pt-[38px] pb-[46px] w-[100%]"
                />
                <div className="">
                  <h3 className="text-center text-[24px] text-[#000000]">
                    Sanchy Technology
                  </h3>
                  <p className="text-center mt-4 mb-5">
                    Lorem ipsum dolor sit amet. Eum dignissimos libero qui
                    tempore sapiente eum quia velit vel ducimus rerum est
                    consequatur eveniet.
                  </p>
                  <div className="px-auto mx-auto flex pb-8">
                    <ExploreBut className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] mb-6 lg:mt-[72px] lg:h-[700px]">
              <div className="bg-[#FFFFFF] w-[80%] mx-auto">
                <img
                  src={Rectangle113}
                  alt=""
                  className="pt-[38px] pb-[46px] w-[100%]"
                />
                <div className="">
                  <h3 className="text-center text-[24px] text-[#000000]">
                    Sanchy Healthcare
                  </h3>
                  <p className="text-center mt-4 mb-5">
                    Lorem ipsum dolor sit amet. Eum dignissimos libero qui
                    tempore sapiente eum quia velit vel ducimus rerum est
                    consequatur eveniet.
                  </p>
                  <div className="px-auto mx-auto flex pb-8">
                    <ExploreBut className="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] lg:mb-6 lg:h-[700px]">
              <div className="bg-[#FFFFFF] w-[80%] mx-auto">
                <img
                  src={Rectangle114}
                  alt=""
                  className="pt-[38px] pb-[46px] w-[100%]"
                />
                <div className="">
                  <h3 className="text-center text-[24px] text-[#000000]">
                    Sanchy Nutrition
                  </h3>
                  <p className="text-center mt-4 mb-5">
                    Lorem ipsum dolor sit amet. Eum dignissimos libero qui
                    tempore sapiente eum quia velit vel ducimus rerum est
                    consequatur eveniet.
                  </p>
                  <div className="px-auto mx-auto flex pb-8">
                    <ExploreBut />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute mt-[-45%]">
          <img src={Vector3} alt="" className="w-[30%]" />
        </div>
      </div>
    </div>
  );
};

export default Project;
