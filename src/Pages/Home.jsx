import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="border flex rounded-md w-[80%] h-[90%] justify-center">
            <Sidebar className=""/>
            <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
