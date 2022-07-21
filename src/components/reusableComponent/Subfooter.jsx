import React from "react";
import SubFoot from "../assets/Rectangle 5sub.png";
import Button from "./Button";

const Subfooter = () => {
  return (
    <div>
      <div className="bg-[#0F1320] mb-[40%] sm:mb-[25%] md:mb-[104px] ">
        <div className="">
          <img
            src={SubFoot}
            alt=""
            className="w-[100%] h-[80%] sm:h-[70%] md:h-[100%] xl:h-[90%] absolute "
          />
        </div>
        <div className="relative text-[#fefefe] ">
          <h2 className="text-[36px] text-center leading-10 pt-[50px] w-[94%] mx-auto md:text-[48px] md:leading-[51px] md:pt-52">
            Tell us about your idea, and we’ll make it happen.
          </h2>
          <p className="text-[16px] leading-5 text-center pt-6 pb-9 w-[90%] mx-auto md:pb-20">
            Lorem ipsum dolor sit amet. Eum dignissimos libero qui tempore
            sapiente eum quia velit vel ducimus rerum est consequatur eveniet.
            Et commodi nihil sit voluptatem numquam est tempore perspiciatis et
            iure enim. Qui ipsa molestiae est omnis eaque id voluptate{" "}
          </p>
          <div className="pb-[28px] mx-auto flex px-auto justify-items-center items-center w-[208px] md:pb-28">
            <Button className="" title=" Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
