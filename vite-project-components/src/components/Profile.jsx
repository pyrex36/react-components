import React from "react";

import { CiLocationOn } from "react-icons/ci";
import { BsCalendar3 } from "react-icons/bs";

const ProfileCard = () => {
  return (
    <div className="font-[DM Sans] font-bold max-w-lg mx-auto bg-black text-white rounded-md overflow-hidden shadow-lg">
      {/* Cover Image */}
      <div className="relative h-40 bg-gradient-to-r from-purple-500 to-pink-500">
        <img
          src="https://images.unsplash.com/photo-1735657090719-7f92cb44170b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cover"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Profile Section */}
      <div className="p-6">
        <div className="flex items-center">
          {/* Profile Picture */}
          <div className="absolute w-24 h-24 bg-gray-800 border-4 border-black rounded-full -mt-16">
            <img
              src="https://images.unsplash.com/photo-1735509903556-602b4d7d3ae5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="bg-transparent ml-auto px-4 py-2 bg-blue-500 hover:bg-blue-500 text-[#1da1f2] text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
            Edit profile
          </button>
        </div>

        {/* User Info */}
        <div className="mt-4">
          <h2 className="text-xl font-bold">Davide Biscuso</h2>
          <p className="text-gray-400">@biscuittu</p>
          <p className="text-sm text-gray-300 mt-2">Product Designer</p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
            <div className="flex items-center gap-1">
              <i className="fas fa-map-marker-alt">
                {" "}
                <CiLocationOn />
              </i>{" "}
              London
            </div>
            <div className="flex items-center gap-1">
              <i className="fas fa-calendar-alt">
                {" "}
                <BsCalendar3 />
              </i>{" "}
              Joined September 2011
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-4 text-sm">
            <div>
              <span className="font-bold text-white">589</span>{" "}
              <span className="text-gray-400">Following</span>
            </div>
            <div>
              <span className="font-bold text-white">72</span>{" "}
              <span className="text-gray-400">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
