import React from "react";
import MainHero from "./MainHero";
import Navbar from "./Navbar";
import Herobg from "../assets/bg.png";
import Group8493 from "../assets/Group 8493.png";


const AboutHero = () => {
  const hell =
    " text-[16px] leading-5 t mb-10 tracking-[3%]  lg:leading-7 w-[50%]";
  return (
    <div className="bg-[#0F1320]">
      <img src={Herobg} alt="" className="w-[80%] ml-[20%] absolute" />
      <div className="relative">
        <Navbar />
        <div>
          <MainHero
            Heading="Our Story"
            details=" We’ve Built Our Business Around
Skilled, Dedicated & Passionate Staff"
            image={Group8493}
            Active={hell}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
