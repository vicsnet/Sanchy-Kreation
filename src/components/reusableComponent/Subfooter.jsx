import React from "react";
import SubFoot from "../assets/Rectangle 5sub.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Subfooter = () => {
  return (
    <div>
      <div className="bg-[#0F1320] mb-[40%] sm:mb-[25%] md:mb-[104px] h-[460px] sm:h-[400px] md:h-[550px] lg:h-[600px] pt-[8%] sm:pt-0 ">
        <div className="object-contain w-[100%] object-fit ">
          <img
            src={SubFoot}
            alt=""
            className="w-[100%] h-[60%]   md:h-cover  lg:h-[80%] xl:h-auto absolute "
          />
        </div>
        <div className="relative t ">
          <h2 className="font-bold text-[36px] text-center leading-10 pt-[50px] sm:pt-[100px] w-[94%] mx-auto md:text-[46px] md:leading-[51px] md:pt-52">
            Tell us about your idea, and we’ll make it happen.
          </h2>
          <p className="text-[16px] leading-5 text-center pt-6 pb-9 w-[90%] mx-auto md:pb-20 bt">
            Pop your details into our Contact Request Form and we’ll get right
            back to you…
          </p>
          <div className="pb-[28px] mx-auto flex px-auto justify-items-center items-center w-[155px] md:pb-28">
            <Link to="contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="" title=" Contact Us" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
