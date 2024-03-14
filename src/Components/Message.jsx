import React from "react";
import Photo from "../Images/photo.jpeg";


const Message = () => {
  return (
    <div className="flex p-2 flex-row-reverse"> {/* reverse the order of messages */}
      <div className=" rounded-md flex ">
        <div className="">
          <img
            src={Photo}
            alt="User"
            className="h-8 w-8 mx-3 rounded-full object-cover"
          />
          <div className="text-sm text-center font-normal">Ikshit</div>
        </div>
      </div>
      <div className=" text-center p-1">Message</div>
    </div>
  );
};

export default Message;
