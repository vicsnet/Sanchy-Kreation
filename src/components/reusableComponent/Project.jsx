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
            className=" hidden md:block w-[100%] h-auto absolute mt-[-15%] md:rounded-bl-[316px] lg:rounded-bl-[460px] xl:rounded-bl-[570px]"
          />
        </div>
        <div className="relative">
          <h2 className="text-[36px] text-[#FFFFFF] sm:text-center sm:pb-6 md:pt-32">
            Our Projects
          </h2>
          <div className="md:flex md:w-[90%] lg:w-[80%] md:mx-auto md:gap-5  sm:w-[60%] sm:mx-auto sm:pb-32 md:pb-0">
            <div className="bg-[#FFFFFF] mb-6 md:h-[700px] ">
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
                  <p className="text-center mt-4 mb-5 text-[16px]">
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
            <div className="bg-[#FFFFFF] mb-6 md:mt-[72px] md:h-[700px]">
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
                  <p className="text-center mt-4 mb-5 text-[16px]">
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
            <div className="bg-[#FFFFFF] md:mb-6 md:h-[700px]">
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
                  <p className="text-center mt-4 mb-5 text-[16px]">
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
      </div>
    </div>
  );
};

export default Project;
