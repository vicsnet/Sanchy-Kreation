import React from 'react'
import {   AiOutlineMail} from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import image7 from "../assets/image 7.png";

const Message = () => {
  return (
    <div className="mb-[60px]">
      <div className="w-[90%] mx-auto mt-[94px] lg:flex md:flex">
        <div className="bg-[#171B29] mx-auto rounded-[25px] mb-[60px] md:w-[50%]">
          <div className="w-[90%] mx-auto lg:pb-[200px]">
            <h3 className="leading-[54px] text-[#fefefe] text-[36px] w-[50%] pt-12 pb-8 lg:w-[100%] ">
              Send a message
            </h3>
            <form action="">
              <label className="text-[16px] text-[#fefefe] pb-2">
                Full name
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Enter full name"
                className="h-[56px] w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5"
              />{" "}
              <br />
              <label className="text-[16px] text-[#fefefe] pb-2">
                Company name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter company name"
                className="h-[56px] w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5"
              />
              <br />
              <label className="text-[16px] text-[#fefefe] pb-2">Email</label>
              <br />
              <input
                type="text"
                placeholder="Enter email address"
                className="h-[56px] w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5"
              />
              <br />
              <label className="text-[16px] text-[#fefefe] pb-2">Message</label>
              <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className=" w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5"
              ></textarea>
              <br />
              <button className="w-[100%] h-[73px] text-[24px] text-[#fefefe] bg-[#0C56FE] rounded-[4px] mb-10 lg:mt-6">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="bg-[#0C56FE] rounded-[25px] md:w-[50%] md:h-[930px] lg:h-[1100px]">
          <div className="w-[90%] mx-auto">
            <h3 className="text-[#fefefe] text-[36px] pt-[34px] mb-14 lg:pt-12 lg:mb-3">
              Contact
            </h3>
            <p className="text-[#fefefe] text-[18px] leading-[22px] mb-8">
              Drop us a line! We’ll set up a time to chat over the phone or
              in-person to know more about your business needs. All primary
              conferences are free of charge.
            </p>
            <div className="mb-8">
              <span className="flex gap-2 mb-3 lg:mb-7 ">
                <AiOutlineMail className="text-[24px] text-[#fefefe]" />
                <p className="text-[16px] text-[#fefefe]">
                  Email: Support@sanchykreations.com
                </p>
              </span>
              <span className="flex gap-2 mb-3">
                <FaMapMarkerAlt className="text-[24px] text-[#fefefe]" />
                <p className="text-[16px] text-[#fefefe]">
                  Address: 12d Wole Ariyo St, Lekki Phase 1 105102, Lagos
                  Nigeria
                </p>
              </span>
            </div>
            <div className=" pb-8 ">
              <img src={image7} alt="" className="md:w-[60%] mx-auto sm:w-[60%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message