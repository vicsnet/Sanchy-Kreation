import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import image7 from "../assets/image 7.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
  

  const url = `https://contact.sanchytech.com/`;

  const [sendMessage, setSendMessage] = useState({
    fname: "",
    phone: "",
    email: "",
    message: "",
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newMessage = { ...sendMessage };
    // setSendMessage(newMessage)
    // console.log(newMessage)

    // axios
    //   .post(url, {
    //     fname: sendMessage.fname,
    //     email: sendMessage.email,
    //     message: sendMessage.message,
    //     phone: sendMessage.phone,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // try {
    //   const resp = await Axios.post(`https://contact.sanchytech.com/`, {
    //     ...sendMessage,
    //   });
    //   console.log(resp.data);
    // } catch (error) {
    //   console.log(error.response);
    // }
    var FormData = require("form-data");

    var data = new FormData();
    data.append("fname", sendMessage.fname);
    data.append("phone", sendMessage.phone);
    data.append("message", sendMessage.message);
    data.append("email", sendMessage.email);

    if (
      sendMessage.fname &&
      sendMessage.phone &&
      sendMessage.email &&
      sendMessage.message
    ) {
      axios
        .post(
          url,
          //   {
          //   fname: sendMessage.fname,
          //   phone: sendMessage.phone,
          //   message: sendMessage.message,
          //   email: sendMessage.email,
          // }
          data
        )
        .then((res) => {
          //       // console.log("message sent")
          // setErrorMessage("message sent"),
          // setErrorMessage(notify);
        toast.success("Message sent you will receive a mail shortly");
          setSendMessage({
            fname: "",
            phone: "",
            email: "",
            message: "",
          });
        });

      // const newMessage = { ...sendMessage, id: new Date() };
    } else {
      console.log("meessage to be filled");
      
      toast.error("filled can not be empty");
    }
    // setSendMessage("")
    // setSendMessage.phone(""),
    // setSendMessage.email(""),
    // setSendMessage.message("");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSendMessage({ ...sendMessage, [name]: value });
  };
  return (
    <div className="mb-[60px]">
      <div className="w-[90%] mx-auto mt-[94px] lg:flex">
        <div className="bg-[#171B29] mx-auto rounded-[25px] mb-[60px] lg:w-[50%]">
          <div className="w-[90%] md:w-[80%] mx-auto lg:pb-[100px]">
            <h3 className="leading-[54px] text-[#fefefe] text-[36px] w-[50%] pt-12 pb-8 md:w-[100%] font-bold">
              Send a message
            </h3>
            {/* <p className="">{errorMessage}</p> */}
            <ToastContainer  />
            <form action="" onSubmit={handleSubmit}>
              <label className="text-[16px] text-[#fefefe] pb-2">
                Full name
              </label>{" "}
              <br />
              <input
                type="text"
                id="fullName"
                name="fname"
                value={sendMessage.fname}
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
                id="phone"
                name="phone"
                value={sendMessage.phone}
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
                id="message"
                name="message"
                value={sendMessage.message}
                onChange={handleChange}
                cols="30"
                rows="10"
                className=" w-[100%] text-[#999999] rounded-[8px] mb-7  pl-5 b outline-none bt opacity-[100%] pt-3"
              ></textarea>
              <br />
              <button className="w-[100%] h-[73px] text-[24px] text-[#fefefe] bg-[#0C56FE] mb-10 lg:mt-6">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="bg-[#0C56FE] rounded-[25px] lg:w-[50%] md:h-[930px] lg:h-[1000px]">
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
              <div className="flex gap-2 mb-3 lg:mb-7 ">
                <span>
                  <AiOutlineMail className="text-[24px] text-[#fefefe]" />
                </span>
                <p className=" hidden sm:block text-[16px] t bt opacity-[80%]">
                  Email: Support@sanchykreations.com
                </p>
                <p className="sm:hidden text-[16px] t bt opacity-[80%]">
                  <p>Email:</p> Support@sanchykreations.com
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <span>
                  <FaMapMarkerAlt className="text-[24px] text-[#fefefe] bg-transparent" />
                </span>
                <p className=" hidden sm:block text-[16px] bt t opacity-[80%] w">
                  Address: 12d Wole Ariyo St, Lekki Phase 1 105102, Lagos
                  Nigeria
                </p>
                <p className="sm:hidden text-[16px] bt t opacity-[80%] w">
                  <p>Address:</p> 12d Wole Ariyo St, Lekki Phase 1 105102, Lagos
                  Nigeria
                </p>
              </div>
            </div>
            <div className=" pb-8 ">
              <img
                src={image7}
                alt=""
                className="lg:w-[100%] w-[100%] sm:w-[70%] h-[400px] md:h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
