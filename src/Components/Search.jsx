import React from "react";
import Photo from "../Images/photo.jpeg";

const Search = () => {
  return (
    <div className="flex flex-col min-w-full p-2">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Find a user"
          className="w-[90%] px-2 py-1 rounded-md focus:outline-none border-b-2"
          id="search"
        />
      </div>
      <div className="flex items-center justify-start p-4 border-b-2">
        <img
          src={Photo}
          alt="User"
          className="h-14 w-14 mx-3 rounded-full object-cover"
        />
        <div className="text-md font-medium">Ikshit</div>
      </div>
    </div>
  );
};

export default Search;
