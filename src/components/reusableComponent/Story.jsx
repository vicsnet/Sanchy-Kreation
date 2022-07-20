import React from "react";
import Group48 from "../assets/Group48.png";
import Group8481 from "../assets/Group8481.png";
import Group8464 from "../assets/Group 8464.png";
import Vector from "../assets/Vector2.png";
import Button from "./Button";

const Story = () => {
  return (
    <div className=" md:mt-14 pb-20">
      <div className="">
        <img
          src={Vector}
          alt=""
          className="hidden absolute lg:block w-[20%] ml-[80%] xl:mt-[-12.8%] lg:mt-[-10%]"
        />
      </div>
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
          <h2 className="text-[#FFFFFF] text-[36px] mb-8 mt-20 md:text-[48px] md:mt-0">
            Our Story
          </h2>
          <p className="text-[#CFD0D2] text-[16px] leading-5 lg:leading-8">
            As an established technology-driven company, we pride ourselves on
            providing comprehensive arrays of solutions comprising of making
            card payment across any e-commerce website a stress free routine,
            making your memory last longer for generations through wall
            portraits and also makes information available for B2B purpose and
            many more. Our team consistently delivers first hand solutions
            solutions in various areas including, but not limited to, marketing
            services, recruitment services, and communication & network
            management services.
          </p>
          <p className="text-[#CFD0D2] text-[16px] leading-5 pt-5 mb-10 lg:leading-8">
            At Sanchy Kreations, we embrace the power of change to create
            long-lasting value in every direction for our clients, people and
            communities and we strive to continuously equip ourselves with the
            latest digital know-how and pave the way for our clients and
            partners to navigate the technology landscape most effectively in
            this ever changing world.
          </p>
          <Button title="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Story;
