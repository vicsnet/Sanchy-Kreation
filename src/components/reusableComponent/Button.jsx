import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-[#0C56FE] w-[154px] h-[60px] t text-[24px] text-center">
        {title}
      </button>
    </div>
  );
};

export default Button;
