import React from 'react';

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
<div className="font-['SF_Compact_Display_Medium'] font-bold w-full sm:w-64 bg-[#17202A] text-white flex flex-col items-start p-5 leading-tight">
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
          src="https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EzuyuCp~6s8tKQjyb4NqBZZ7y-Iwp7gzhirWHslWyWfNxLbp9zlTJMpznimNy4wGKYHuqhktWzaPE9-EbejqxHt6huniexyCSvjmR6fbFyLJ3YukvgGLaq1K917jIYBokB5srcuPbKJNTdErT02CTaxc8GQFVAsqaSGMv0Yp6K4aUzUkk03trmmyfwiy8eiHlUFiddC8yX1OaOUStLtiZqh1ltoc8NYaJhx4IBWdaX0cQeI0j5nps6OU36W-rZKc-Ov~oXDGRrMPsSdddjwRZeJsvqPJIEWsywuSW6bqklPCXBjwldkHSbiWmQ8p~i5gu0YV9gU8UPwyzU0se~1lbQ__"
          alt="User Avatar"
          className="rounded-full w-12 h-12"
        />
        <div className="ml-2">
        <div className="flex items-center gap-6 text-base font-bold">Davide Biscuso <TfiMore /></div> 
        <div className="text-sm text-gray-500">@biscuttu </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SideMenu;
