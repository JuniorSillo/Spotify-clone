import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-full cursor-pointer hover:bg-gray-700"
            src={assets.arrow_left}
            alt="Go back"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-full cursor-pointer hover:bg-gray-700"
            src={assets.arrow_right}
            alt="Go forward"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-full hidden md:block cursor-pointer hover:bg-gray-300">
            Explore Premium
          </p>
          <img
            className="w-6 cursor-pointer hover:opacity-80"
            src={assets.bell_icon} // Ensure this path points to your bell icon
            alt="Notifications"
          />
          <p className="bg-black py-1 px-3 rounded-full text-[15px] cursor-pointer hover:bg-gray-700">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            O
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-full cursor-pointer hover:bg-gray-300">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-full cursor-pointer hover:bg-gray-700">
          Music
        </p>
        <p className="bg-black px-4 py-1 rounded-full cursor-pointer hover:bg-gray-700">
          Podcast
        </p>
      </div>
    </>
  );
};

export default NavBar;
