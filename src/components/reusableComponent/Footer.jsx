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
      <div className="w-[90%] bg-[#171B29] h-auto lg:rounded-t-[25px] rounded-t-[50px] mx-auto ">
        <div className="w-[86%] mx-auto">
          <div className=" md:flex justify-between  mx-auto pt-20 ">
            <div className="lg:p-8 pb-[40px] md:w-[30%]">
              <img
                src={Logo}
                alt=""
                className="w-[30%] md:w-[60%] lg:w-[70%] md:pt-8 lg:pt-0"
              />
            </div>
            <ul className="md:flex text-left ">
              <li className="text-[18px] t md:p-8 pb-[24px] ">
                Home
              </li>
              <li className="text-[18px] t md:p-8 pb-[24px]  ">
                About Us
              </li>
              <li className="text-[18px] t md:p-8 pb-[24px]">
                Contact
              </li>
            </ul>
          </div>
          <div className="  mx-auto md:flex justify-between flex flex-col-reverse md:flex-row">
            <div className="flex lg:p-8 pt-[28px] pb-[3%]">
              <span className="flex">
                <AiOutlineCopyright className="text-[#fefefe] text-[18px] lg:mt-[4px]" />
                <h2 className="t  text-[13px] lg:text-[18px] pl-[4px]">
                  2022 Sanchy Kreations. All rights reserved
                </h2>
              </span>
            </div>

            <div className="flex md:mr-[4%]">
              <div className="w-[40px] h-[40px] rounded-[20px] bg-[#0C56FE] pl-[11px] pt-[10px]">
                <FaTwitter className="text-[#fefefe] text-[20px] " />
              </div>
              <div className="bg-[#0C56FE] ml-8 w-[40px] h-[40px] rounded-[20px]  pl-[11px] pt-[10px]">
                <FaInstagram className="text-[#fefefe]  text-[20px] " />
              </div>

              <div className="ml-8 w-[40px] h-[40px] bg-[#0C56FE] rounded-[20px]  pl-[11px] pt-[10px]">
                <FaFacebook className="text-[#fefefe]  text-[20px] " />
              </div>
              <div className="ml-8 w-[40px] h-[40px] bg-[#0C56FE] rounded-[20px]  pl-[11px] pt-[10px]">
                <FaLinkedin className="text-[#fefefe]  text-[20px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
