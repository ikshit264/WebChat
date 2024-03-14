import React from "react";
import Photo from "../Images/photo.jpeg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[100%] p-2 bg-slate-400 rounded-tl-md">
        <div className="text-lg font-semibold">Ikshit Chat</div>
        <div className="flex items-center">
        <img
          src={Photo}
          alt="User"
          className="h-10 w-10 mx-3 rounded-full object-cover"
        />
        <div className="text-md font-medium">Ikshit</div>
      </div>
      <button
        type="button"
        className="bg-zinc-500 hover:bg-zinc-600 text-white font-medium rounded-lg text-sm p-3"
      >
        Log In
      </button>
    </div>
  );
};

export default Navbar;
