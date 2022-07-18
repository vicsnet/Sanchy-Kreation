import React from "react";
import Logo from "../assets/logo.png";
import Foot from "../assets/retfoot.png";
import Footbg from "../assets/footer.png";
import Copy from "../assets/copyright.png";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  return (
    <div className=" w-[100%] ">
      <div className="w-[100%] bg-[#0F1320] h-auto ">
        <div className="absolute">
          <img src={Footbg} alt="" className="  w-[90%] mx-auto lg:pt-[19.8%] xl:pt-[14.5%] h-auto" />
        </div>
        <div className="relative lg:pt-[20%] xl:pt-[15%]">
          <div className=" md:flex justify-between w-[80%] mx-auto  ">
            <div className="lg:p-8 pb-[40px] ">
              <img src={Logo} alt="" className="w-[30%] md:w-[50%]" />
            </div>
            <ul className="md:flex text-left">
              <li className="text-[18px] text-[#FFFFFF] md:p-8 pb-[24px]">
                Home
              </li>
              <li className="text-[18px] text-[#FFFFFF] md:p-8 pb-[24px]">
                About Us
              </li>
              <li className="text-[18px] text-[#FFFFFF] md:p-8 pb-[24px]">
                Contact
              </li>
            </ul>
          </div>
          <div className=" w-[80%] mx-auto md:flex justify-between flex flex-col-reverse md:flex-row">
            <div className="flex lg:p-8 pt-[28px] pb-[3%]">
              <span className="flex">
                <AiOutlineCopyright className="text-[#FFFF] text-[18px] lg:mt-[4px]" />
                <h2 className="text-[#FFFFFF]  text-[13px] lg:text-[18px] pl-[4px]">
                  2022 Sanchy Kreations. All rights reserved
                </h2>
              </span>
            </div>

            <div className="flex">
              <div className="w-[40px] h-[40px] rounded-[20px] bg-[#0C56FE] pl-[11px] pt-[10px]">
                <FaTwitter className="text-[#ffff] text-[20px] " />
              </div>
              <div className="bg-[#0C56FE] ml-8 w-[40px] h-[40px] rounded-[20px]  pl-[11px] pt-[10px]">
                <FaInstagram className="text-[#ffff]  text-[20px] " />
              </div>

              <div className="ml-8 w-[40px] h-[40px] bg-[#0C56FE] rounded-[20px]  pl-[11px] pt-[10px]">
                <FaFacebook className="text-[#ffff]  text-[20px] " />
              </div>
              <div className="ml-8 w-[40px] h-[40px] bg-[#0C56FE] rounded-[20px]  pl-[11px] pt-[10px]">
                <FaLinkedin className="text-[#ffff]  text-[20px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
