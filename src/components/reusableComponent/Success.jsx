import React from "react";
import Group371 from "../assets/Group 37 (1).png";
import Group8470 from "../assets/Group 8470.png";
import Group8468 from "../assets/Group 8468.png";

const Success = () => {
  return (
    <div className="h-[900px]">
      <div className="">
        <img
          src={Group371}
          alt=""
          className="hidden w-[100%] h-[821px] absolute"
        />
        <img src={Group8468} alt="" className="w-[100%] h-[821px] absolute" />
      </div>
      <div className=" w-[90%] mx-auto relative pt-[36%]">
        <h2 className="text-[36px] text-[#fefefe] leading-[44px] text-center">
          Some Happy Faces using our products
        </h2>
        <p className="text-[#fefefe] text-[20px] leading-[24px] text-center mt-6">
          We excel through cooperation and refrain from working as a
          conventional tech company. Instead, our evolved, performance-based
          development system drives proven quantitative results for our users
          and partners alike. We are rewarded for that.
        </p>
        <div className="mt-[39px]">
          <img src={Group8470} alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Success;
