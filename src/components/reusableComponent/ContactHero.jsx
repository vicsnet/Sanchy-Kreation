import React from 'react'
import MainHero from "./MainHero";
import Navbar from "./Navbar";
import Herobg from "../assets/bg.png";
import Group8444 from "../assets/Group 8444.png";

const ContactHero = () => {
  const hell =
    " text-[16px] leading-5 t mb-10 tracking-[3%]  lg:leading-7 bt opacity-[80%]";
  return (
    <div className="bg-[#0F1320]">
      <img src={Herobg} alt="" className="w-[80%] ml-[20%] absolute" />
      <div className="relative">
        <Navbar />
        <div>
          <MainHero
            Heading="Contact US"
            details=" We’re always up for a chat!"
            image={Group8444}
            Active={hell}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactHero