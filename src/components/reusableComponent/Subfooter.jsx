import React from 'react'
import SubFoot from "../assets/Rectangle 5sub.png";
import Button from './Button';

const Subfooter = () => {
  return (
    <div>
      <div className=""></div>
      <div className="">
        <img
          src={SubFoot}
          alt=""
          className="w-[100%] h-[100%] md:h-cover md:h-screen absolute "
        />
        <div className="relative text-white">
          <h2 className="text-[36px] text-center leading-10 pt-11 w-[94%] mx-auto md:text-[48px] md:leading-[51px] md:pt-52">
            Tell us about your idea, and we’ll make it happen.
          </h2>
          <p className="text-[16px] leading-5 text-center pt-6 pb-9 w-[90%] mx-auto md:pb-20">
            Lorem ipsum dolor sit amet. Eum dignissimos libero qui tempore
            sapiente eum quia velit vel ducimus rerum est consequatur eveniet.
            Et commodi nihil sit voluptatem numquam est tempore perspiciatis et
            iure enim. Qui ipsa molestiae est omnis eaque id voluptate{" "}
          </p>
          <div className="pb-[28px] w-[50%] mx-auto sm:w-[34%] md:w-[27.6%] lg:w-[19.7%] md:pb-28">
            <Button className="" title=" Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subfooter