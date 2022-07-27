import React from "react";
import Group371 from "../assets/Group 37 (1).png";
import Group8470 from "../assets/Group 8470.png";
import Group8479 from "../assets/Group 8479.png";
import Group8468 from "../assets/Group 8494.png";

const Success = () => {
  return (
    <div className="h-[700px] md:h-[700px] lg:h-[900px] mt-10 md:mt-0">
      <div className="">
        {/* <img
          src={Group371}
          alt=""
          className=" hidden w-[100%] h-[821px] absolute lg:rounded-tr-[600px] lg:rounded-bl-[300px]"
        /> */}
        <img
          src={Group8479}
          alt=""
          className="hidden md:block w-[100%]  absolute"
        />
        <img
          src={Group8468}
          alt=""
          className=" md:hidden w-[100%] h-[700px] absolute"
        />
      </div>
      <div className=" w-[90%] mx-auto relative md:pt-[17%] lg:pt-[20%] pt-[10%]">
        <h2 className="text-[36px] t leading-[44px] text-center font-bold">
          Dynamic digital tools with proven success stories
        </h2>
        <p className="t text-[20px] leading-[24px] text-center mt-6 bt">
          We excel through cooperation and refrain from working as a
          conventional tech company. Instead, our evolved, performance-based
          development system drives proven quantitative results for our users
          and partners alike. We are rewarded for that.
        </p>
        <div className="mt-[39px]">
          <img
            src={Group8470}
            alt=""
            className="mx-auto lg:w-[50%] md:w-[40%] w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
