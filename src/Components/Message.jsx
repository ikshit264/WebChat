import React, { useState } from "react";
import { storage } from "../Firebase";

const Message = ({ message }) => {
  const getTimeFromTimestamp = (timestamp) => {
    const milliseconds =
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
    const date = new Date(milliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return formattedHours + ":" + formattedMinutes;
  };

  const getDayAndDate = (timestamp) => {
    const milliseconds =
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
    const date = new Date(milliseconds);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[date.getDay()];
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    // Return formatted day and date string
    return formattedDate;
  };

  return (
    <div
      className={`flex p-1 ${
        message.senderId == localStorage.getItem("role") ? "justify-end " : " "
      }`}
    >
      <div className={`mx-2 relative max-w-[40%]`}>
        <div className="flex flex-col px-2 bg-[#625D5D] rounded-md ">
          <div className="flex flex-col self-end ">
            <div className="flex flex-col gap-1 ">
              <div className= {`text-[16px] text-[#AE939F] ${message.senderId == localStorage.getItem("role") ? "self-end pr-2" : " "}`} >@{message.Name}</div>
              <div className="px-3 py-1 rounded-xl bg-[#EEEAEA]" style={{ wordBreak: 'break-word' }}>
                {message.text.charAt(0).toUpperCase() +
                  message.text.slice(1).trim()}
              </div>
              <div className="flex flex-col">
                <div className="text-[13px] text-[#C3BFBF]">
                  {getDayAndDate(message.date)}
                </div>
                <div className="text-[11px] text-[#ACFFFF] font-normal self-end">
                  {getTimeFromTimestamp(message.date)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
