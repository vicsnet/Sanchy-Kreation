import React from "react";
import MainHero from "./MainHero";
import Navbar from "./Navbar";
import Herobg from "../assets/bg.png";
import Group8493 from "../assets/Group 8493.png";


const AboutHero = () => {
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
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
