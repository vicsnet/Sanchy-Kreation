import React from "react";
import Rectangle22712 from "../assets/Rectangle22712.png";
import Rectangle22707 from "../assets/Rectangle 22707.png";
import Rectangle11 from "../assets/Rectangle 11.png";
import Rectangle111 from "../assets/Group 8464 (4).png";
import Group84642 from "../assets/Group84642.png";

const Passion = () => {
  return (
    <div>
      <div className=" lg:flex xl:flex mt-16 h-[820px] sm:h-[1100px] md:h-[1000px] lg:h-[600px]">
        <img
          src={Rectangle22712}
          alt=""
          className="w-[100%] h-auto md:hidden"
        />
        <img
          src={Rectangle22707}
          alt=""
          className="xl:w-[50%]  hidden md:block lg:z-10 md:max-h-[490px] lg:w-[50%] md:w-[100%]"
        />

        <div className="mb-[96px] sm:mb-0 ">
          <img
            src={Rectangle11}
            alt=""
            className="absolute w-[100%] h-96 md:hidden "
          />
          <img
            src={Rectangle111}
            alt=""
            className=" hidden absolute md:h-[550px] xl:h-[665px] lg:h-[665px] md:w-[100%] lg:w-[51%] xl:w-[57.18%]  md:block xl:ml-[-1%] lg:ml-[-1%]  "
          />
          {/* <img
            src={Group84642}
            alt=""
            className=" hidden absolute md:max-h-[490px] lg:h-[500px] md:w-[100%] lg:w-[51%] xl:w-[57.18%]  md:block xl:ml-[-1%] lg:ml-[-1%]  "
          /> */}

          <h2 className="text-[#0F1320]  bt font-bold text-[40px] pt-16 md:pt-8 leading-[60px] md:leading-[80px] md:text-[60px] xl:text-[60px] lg:leading-[80px] relative w-[90%] mx-auto lg:pt-24 xl:pt-24 sm:w-[50%] sm:mx-0 sm:ml-[5%] sm:pb-16 lg:ml-[10%] xl:w-[60%]  md:w-[60%] md:ml-[20%] md:mb-[20%]  lg:w-[85%] xl:ml-[15%]">
            <span className="bt"> Passionate, Empathy, </span>
            <span className="text-[#22A75D] bt">Cooperation </span>&{" "}
            <span className="text-[#22A75D] bt">Collaboration. </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Passion;
