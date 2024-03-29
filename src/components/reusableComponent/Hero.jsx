import React from 'react'
import Herobg from '../assets/bg.png'
import Heroimg from '../assets/heroimg.png'
import MainHero from './MainHero';
import Navbar from './Navbar';

const Hero = () => {
  const hell =
    " text-[16px] leading-5 t mb-10 tracking-[3%]  lg:leading-7 bt opacity-[80%]";
  return (
    <div className="bg-[#0F1320]">
      <img src={Herobg} alt="" className="w-[80%] ml-[20%] absolute" />
      <div className="relative">
        <Navbar />
        <div>
          <MainHero
            title=" At Sanchy Kreations we are"
            Heading="Solution-Driven"
            details=" Our values act as guidelines, so we know how to approach our work
            and collaborate when developing digital solutions that work. We
            desire to not only build but pioneer as the leader in emerging
            digital solutions for every lifestyle."
            image={Heroimg}
            Active={hell}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero