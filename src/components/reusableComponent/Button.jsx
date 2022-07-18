import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-[#0C56FE] h-[73px] w-52 text-[#FFFFFF] text-[24px] text-center">
        {title}
      </button>
    </div>
  );
};

export default Button;
