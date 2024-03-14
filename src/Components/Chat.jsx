import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Message from "./Message";
import Input from "./Input.jsx";

const iconSize = 24; // Adjust the size as needed

const Chat = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center p-4 bg-slate-400 rounded-tr-md">
          <div className="text-lg font-semibold">Ikshit</div>
          <div className="flex gap-2">
            <FaVideo size={iconSize} />
            <IoMdPersonAdd size={iconSize} />
            <BsThreeDots size={iconSize} />
          </div>
        </div>
        <div
          className="overflow-y-scroll scroll-smooth bg-scroll"
          style={{
            height: "calc(100% - 115px)",
            scrollbarWidth: "thin",
            scrollbarColor: "#888 #f1f1f1",
          }}
        >
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          {/* Add more messages here */}
        </div>
        <div>
          <Input />
        </div>
      </div>
    </>
  );
};

export default Chat;
