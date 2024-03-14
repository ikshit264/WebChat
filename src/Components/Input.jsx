import React from "react";
import { TfiClip } from "react-icons/tfi";
import { CiImageOn } from "react-icons/ci";

const Input = () => {
  const iconsize = 24;

  return (
    <div className=" h-14 bg-white p-4 border-t-2 border  flex justify-between rounded-br-md">
      <div>
        <input type="text" placeholder="Type Something..."/>
      </div>
      <div className="flex items-center gap-2">
        <TfiClip size={iconsize} />
        <CiImageOn size={iconsize} />
        <div>
          <button
            type="button"
            className="bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-lg text-sm p-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
