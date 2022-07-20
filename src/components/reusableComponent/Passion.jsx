import React from "react";
import Rectangle22712 from "../assets/Rectangle22712.png";
import Rectangle22707 from "../assets/Rectangle 22707.png";
import Rectangle11 from "../assets/Rectangle 11.png";
import Rectangle111 from "../assets/Rectangle111.png";

const Passion = () => {
  return (
    <div>
      <div className=" lg:flex xl:flex mt-16">
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
            className="absolute w-[100%] max-h-96 md:hidden "
          />
          <img
            src={Rectangle111}
            alt=""
            className=" hidden absolute md:max-h-[490px] lg:h-[500px] md:w-[100%] lg:w-[51%] xl:w-[57.18%]  md:block xl:ml-[-1%] lg:ml-[-1%]  "
          />
          <h2 className="text-[#0F1320] text-[40px] leading-[60px] relative w-[90%] mx-auto pt-16 sm:w-[50%] sm:mx-0 sm:ml-[5%] sm:pb-16 xl:ml-[10%] xl:w-[60%] xl:pt-[20%] md:w-[70%] md:ml-[10%] md:mb-[20%] md:pt-[20%] lg:w-[80%]">
            Passionate, Empathy, Cooperation, and collaration hand in hand.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Passion;
