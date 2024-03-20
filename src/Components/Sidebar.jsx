import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TalkTrover from "../assets/TalkTrove.png";
import TalkTroverT from "../assets/TalkTrove_transparent.png";
import { auth } from "../Firebase";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogOut = async () => {
    setShowConfirmation(true);
  };

  const confirmLogOut = async () => {
    try {
      // await auth.signOut();
      localStorage.removeItem("role");
      navigate("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const cancelLogOut = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <div className="w-full fixed py-3 bg-black items-center overflow-y-visible">
        <div className="Navbar text-gray-50 flex justify-evenly items-center overflow-y-visible">
          <div className="">
            <img
              src={TalkTrover}
              alt="TalkTrove"
              className="rounded-lg w-28 h-16 object-cover"
            />
          </div>
          <div className="">
            <img
              src={TalkTroverT}
              alt="TalkTrove"
              className="rounded-lg w-64 pt-11 h-16 object-cover overflow-y-visible"
            />
          </div>
          <button
            type="button"
            onClick={handleLogOut}
            className="bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-lg text-sm p-2"
          >
            LogOut
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-lg text-sm mr-4 px-4 py-2"
                onClick={confirmLogOut}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg text-sm px-4 py-2"
                onClick={cancelLogOut}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
