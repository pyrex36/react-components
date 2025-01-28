import React from "react";

import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { PiHash } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LuBookmark } from "react-icons/lu";
import { RiFileList2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { TfiMore } from "react-icons/tfi";

const SideMenu = () => {
  return (
    <div className="font-[DM Sans] font-bold w-full sm:w-64 bg-[#17202A] text-white flex flex-col items-start p-5 leading-tight">
      <div className="flex items-center gap-4 text-sm sm:text-lg my-4 cursor-pointer">
        <FaTwitter />
      </div>
      <div className="flex items-center gap-4 text-sm sm:text-lg my-3 text-white cursor-pointer">
        <RiHome7Fill /> Home
      </div>
      <div className="flex items-center gap-4 text-sm sm:text-lg my-3 text-white cursor-pointer">
        <PiHash /> Explore
      </div>
      <div className="flex items-center gap-4 text-sm sm:text-lg my-3 text-white cursor-pointer">
        <IoNotificationsOutline /> Notifications
      </div>
      <div className="flex items-center gap-4 text-sm sm:text-lg my-3 text-white cursor-pointer">
        <CiMail /> Messages
      </div>
      <div className="flex items-center gap-4 text-sm sm:text-lg my-3 text-white cursor-pointer">
        <LuBookmark /> Bookmarks
      </div>
      <div className="flex items-center gap-4 text-sm sm:text-lg my-3 text-white cursor-pointer">
        <RiFileList2Line /> Lists
      </div>
      <div className="flex items-center gap-4 text-sm sm:text-lg my-3 cursor-pointer font-bold text-[#1da1f2]">
        <CiUser /> Profile
      </div>
      <div className="flex items-center gap-4 text-sm sm:text-lg my-3 text-white cursor-pointer">
        <CiCircleMore /> More
      </div>
      <button className="bg-[#1DA1F2] text-white border-none rounded-full py-2 px-6 text-sm sm:text-base cursor-pointer mt-5 w-full hover:bg-[#1a91da]">
        Tweet
      </button>
      <div className="flex items-center mt-40 pt-5">
        <img
   src="https://images.unsplash.com/photo-1721332149274-586f2604884d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"          alt="User Avatar"
          className="rounded-full w-12 h-12"
        />
        <div className="ml-2">
          <div className="flex items-center gap-6 text-base font-bold">
            Davide Biscuso <TfiMore />
          </div>
          <div className="text-sm text-gray-500">@biscuttu </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SideMenu;
