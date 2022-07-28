import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import image7 from "../assets/image 7.png";

const Message = () => {
  const [sendMessage, setSendMessage] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mainmessage: "",
  });
  // const []
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      sendMessage.fullName &&
      sendMessage.companyName &&
      sendMessage.email &&
      sendMessage.mainmessage
    ) {
      const newMessage = { ...sendMessage, id: new Date() };
    } else {
      console.log("meessage to be filled");
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSendMessage ({ ...sendMessage, [name]: value})
  };
  return (
    <div className="mb-[60px]">
      <div className="w-[90%] mx-auto mt-[94px] lg:flex md:flex">
        <div className="bg-[#171B29] mx-auto rounded-[25px] mb-[60px] md:w-[50%]">
          <div className="w-[90%] mx-auto lg:pb-[100px]">
            <h3 className="leading-[54px] text-[#fefefe] text-[36px] w-[50%] pt-12 pb-8 lg:w-[100%] font-bold">
              Send a message
            </h3>
            <form action="" onSubmit={handleSubmit}>
              <label className="text-[16px] text-[#fefefe] pb-2">
                Full name
              </label>{" "}
              <br />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={sendMessage.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="h-[56px] w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5 b outline-none bt opacity-[100%]"
              />{" "}
              <br />
              <label className="text-[16px] text-[#fefefe] pb-2">
                Company name
              </label>
              <br />
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={sendMessage.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="h-[56px] w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5 b outline-none bt opacity-[100%]"
              />
              <br />
              <label className="text-[16px] text-[#fefefe] pb-2">Email</label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                value={sendMessage.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="h-[56px] w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5 b outline-none bt opacity-[100%]"
              />
              <br />
              <label className="text-[16px] text-[#fefefe] pb-2 ">
                Message
              </label>
              <br />
              <textarea
                id="mainmessage"
                name="mainmessage"
                value={sendMessage.mainmessage}
                onChange={handleChange}
                cols="30"
                rows="10"
                className=" w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5 b outline-none bt opacity-[100%]"
              ></textarea>
              <br />
              <button className="w-[100%] h-[73px] text-[24px] text-[#fefefe] bg-[#0C56FE] mb-10 lg:mt-6">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="bg-[#0C56FE] rounded-[25px] md:w-[50%] md:h-[930px] lg:h-[1000px]">
          <div className="md:w-[70%] w-[90%] mx-auto">
            <h3 className="text-[#fefefe] text-[36px] pt-[34px] mb-14 lg:pt-12 lg:mb-3 font-bold">
              Contact
            </h3>
            <p className="bt opacity-[80%] t text-[16px] leading-[22px] mb-8">
              Drop us a line! We’ll set up a time to chat over the phone or
              in-person to know more about your business needs. All primary
              conferences are free of charge.
            </p>
            <div className="mb-8">
              <span className="flex gap-2 mb-3 lg:mb-7 ">
                <AiOutlineMail className="text-[24px] text-[#fefefe]" />
                <p className="text-[16px] t bt opacity-[80%]">
                  Email: Support@sanchykreations.com
                </p>
              </span>
              <span className="flex gap-2 mb-3">
                <FaMapMarkerAlt className="text-[24px] text-[#fefefe]" />
                <p className="text-[16px] bt t opacity-[80%]">
                  Address: 12d Wole Ariyo St, Lekki Phase 1 105102, Lagos
                  Nigeria
                </p>
              </span>
            </div>
            <div className=" pb-8 ">
              <img
                src={image7}
                alt=""
                className="md:w-[90%] sm:w-[80%] ml-[5%] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
