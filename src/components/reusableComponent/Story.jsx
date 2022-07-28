import React from "react";
import Group48 from "../assets/Group48.png";
import Group8481 from "../assets/Group8481.png";
import Group8464 from "../assets/Group 8464.png";
import Vector from "../assets/Vector2.png";
import Button from "./Button";

const Story = () => {
  return (
    <div className="  pb-20 mt-[5%] sm:mt-0">
      <div className="w-[90%] mx-auto lg:flex lg:flex-row-reverse gap-5">
        <div className="lg:w-[50%]">
          <img
            src={Group48}
            alt=""
            className="w-[100%] mx-auto pt-[10%] sm:w-[80%] md:pt-0 sm:hidden"
          />
          <img
            src={Group8481}
            alt=""
            className="hidden mx-auto sm:w-[70%] sm:block lg:w-[100%]"
          />
        </div>
        <div className="lg:w-[50%]">
          <h2 className="text-[#fefefe] text-[36px] mb-8 mt-20 md:text-[40px] md:mt-0 xl:w-[100%] font-bold">
            A road map to increased productivity and improved product-driven
            solutions.
          </h2>
          <p className="t text-[16px] leading-5 lg:leading-8 bt opacity-[80%]">
            Each element of our solutions works smarter by being fully
            integrated, the net result is higher levels of productivity and
            efficiency in our work force, as well as greater levels of
            satisfaction, as frustrations caused by lack of cohesion disappear.
          </p>
          <p className="t text-[16px] leading-5 pt-5 mb-10 lg:leading-8 bt opacity-[80%]">
            We achieve this through the integration of data analysis and
            adequate research into development and new technologies, full
            analytics and development management information from the get-go.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
