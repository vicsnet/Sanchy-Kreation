import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-[#0C56FE] h-[60px] w-52 text-[#fefefe] text-[24px] text-center">
        {title}
      </button>
    </div>
  );
};

export default Button;
