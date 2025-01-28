import React from "react";
import { CiImageOn } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { RiFileGifFill } from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import { TbCalendarStats } from "react-icons/tb";

const Post = ({ profilePic }) => {
  return (
    <div className="font-[DM Sans] font-bold max-w-md mx-auto bg-gray-900 text-white p-4 rounded-lg">
      <div className="flex items-start space-x-4">
        {/* Profile Picture */}
        <img
          src={
            profilePic ||
            "https://images.unsplash.com/photo-1684966610091-f6beda2d025a?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          } // Replace with a default profile picture if none is provided
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />

        {/* Tweet Input Section */}
        <div className="flex-1">
          <textarea
            className="w-full bg-gray-800 text-white p-2 rounded-lg resize-none"
            placeholder="What’s happening?"
            aria-placeholder="What’s happening?"
            rows="3"
          ></textarea>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex space-x-4 text-blue-500">
              <button aria-label="Add Image">
                <CiImageOn className="w-6 h-6" />
              </button>
              <button aria-label="Add GIF">
                <RiFileGifFill className="w-6 h-6" />
              </button>
              <button aria-label="Add Poll">
                <BiPoll className="w-6 h-6" />
              </button>
              <button aria-label="Add Emoji">
                <CiFaceSmile className="w-6 h-6" />
              </button>
              <button aria-label="Schedule Tweet">
                <TbCalendarStats className="w-6 h-6" />
              </button>
            </div>

            {/* Tweet Button */}
            <button className="bg-transparent ml-auto px-4 py-2 bg-blue-500 hover:bg-blue-500 text-[#1da1f2] text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
