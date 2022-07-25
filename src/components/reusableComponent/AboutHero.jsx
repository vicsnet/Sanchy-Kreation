import React from "react";
import MainHero from "./MainHero";
import Navbar from "./Navbar";
import Herobg from "../assets/bg.png";

const AboutHero = () => {
  return (
    <div className="bg-[#0F1320]">
      <img src={Herobg} alt="" className="w-[80%] ml-[20%] absolute" />
      <div className="relative">
        <Navbar />
        <div>
          <MainHero
            Heading="About Us"
            details=" We’ve Built Our Business Around
Skilled, Dedicated & Passionate Staff"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
