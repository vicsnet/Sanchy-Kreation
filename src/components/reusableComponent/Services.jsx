import React from "react";
import Group8484 from "../assets/Group8484.png";
import Group8491 from "../assets/Group 8491.png";
import Group8490 from "../assets/Group 8490.png";
import Group8489 from "../assets/Group 8489.png";

const Services = () => {
  return (
    <div className="bg-[#0F1320] xl:mt-[-3%]">
      <div className="w-[90%] mx-auto">
        <h2 className=" text-[36px] text-[#fefefe] md:text-[46px] font-bold">
          Our Roadmap to Success
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          <div className=" bg-[#171B29] rounded-[25px] mt-9 mb-7 md:max-h-[466px] lg:max-h-[400px]">
            <div className="w-[90%] mx-auto pb-4 ">
              <img
                src={Group8484}
                alt=""
                className="w-[16%] h-auto pt-[27px] sm:w-[12%] md:w-[16%] lg:w-[10%]"
              />
              <div className="mt-8 ">
                <h2 className="text-[#0C56FE] text-[36px] underline font-bold">
                  Different
                </h2>
                <p className="text-[16px] t tracking-[3%] mt-5">
                  We don’t aim for mid to decent, rather we establish stable and
                  truly reliable products, each proven as a leading name in its
                  own niche.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-[76px] ">
            <div className=" bg-[#171B29] rounded-[25px] mt-9 mb-7 ">
              <div className="w-[90%] mx-auto pb-[101px] ">
                <img
                  src={Group8489}
                  alt=""
                  className="w-[16%] h-auto pt-[27px] sm:w-[12%] md:w-[16%] lg:w-[10%]"
                />
                <div className="mt-8 ">
                  <h2 className="text-[#FFD100] text-[36px] underline font-bold">
                    Pioneering
                  </h2>
                  <p className="text-[16px] t tracking-[3%] mt-5">
                    We are pioneers in providing unified communications for
                    today's rapidly changing world, where digital solutions are
                    the new normal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#171B29] rounded-[25px] mt-9 mb-7 md:max-h-[436px] lg:max-h-[400px]">
            <div className="w-[90%] mx-auto pb-7 ">
              <img
                src={Group8490}
                alt=""
                className="w-[16%] h-auto pt-[27px] sm:w-[12%] md:w-[16%] lg:w-[10%]"
              />
              <div className="mt-8 ">
                <h2 className="text-[#FF6827] text-[36px] underline font-bold">
                  Strategic
                </h2>
                <p className="text-[16px] t tracking-[3%] mt-5">
                  We constantly validate business strategy for our services &
                  products in the respective target market. We engage in an
                  end-to-end strategy implementation to introduce our solutions
                  to the market niche.
                </p>
              </div>
            </div>
          </div>

          <div className="md:mt-[100px] ">
            <div className=" bg-[#171B29] rounded-[25px] mt-9 mb-7">
              <div className="w-[90%] mx-auto pb-[76px] ">
                <img
                  src={Group8491}
                  alt=""
                  className="w-[16%] h-auto pt-[27px] sm:w-[12%] md:w-[16%] lg:w-[10%]"
                />
                <div className="mt-8 ">
                  <h2 className="text-[#22A75D] text-[36px] underline font-bold">
                    Approach
                  </h2>
                  <p className="text-[16px] t tracking-[3%] mt-5">
                    Instead of dreaming of overnight success, we work smarter to
                    deliver value to all stakeholders and solve business
                    problems in the niches we are operating in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
