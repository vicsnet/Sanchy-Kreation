import React from 'react'
import Logo from "../assets/logo.png";
// import Foot from "../assets/retfoot.png";
import Footbg from "../assets/footer.png";
import Copy from "../assets/copyright.png";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

const Foot = () => {
  return (
      <div className="w-[100%]">
          <div></div>
      <div >
        <img src={Logo} alt="" className="w-[60%]" />
      </div>
    </div>
  );
}

export default Foot