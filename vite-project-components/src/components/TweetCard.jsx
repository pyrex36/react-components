import React from "react";

import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";

const TweetCard = () => {
  return (
    <div className="font-[DM Sans] font-bold max-w-xl mx-auto bg-black text-white p-4 rounded-md shadow-md">
      {/* User Info */}
      <div className="flex items-start gap-3">
        <img
          src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Devon Lane</span>
            <span className="text-gray-400">@johndue</span>
            <span className="text-gray-400">· 23s</span>
          </div>
          <p className="mt-1 text-gray-300">Tom is in a big hurry.</p>
        </div>
      </div>
      {/* Tweet Image */}
      <div className=" mt-4 rounded-lg overflow-hidden p-4">
        <img
          src="https://avatarfiles.alphacoders.com/313/313393.jpg"
          alt="Tweet Media"
          className=" w-full h-auto object-cover"
          style={{ width: "600px", height: "300px" }}
        />
      </div>

      {/* Interaction Section */}
      <div className="flex items-center justify-between text-gray-400 text-sm mt-4 px-2">
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
          <i className="far fa-comment">
            <FaRegComment />
          </i>{" "}
          61
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-500">
          <i className="fas fa-retweet">
            <FaRetweet />
          </i>{" "}
          12
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
          <i className="far fa-heart">
            <FcLike />
          </i>{" "}
          6.2K
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
          <i className="far fa-share-square">
            <FiShare />
          </i>{" "}
          61
        </div>
      </div>

      {/* Thread Link */}
      <div className="text-sm text-blue-500 mt-2 cursor-pointer hover:underline">
        Show this thread
      </div>
    </div>
  );
};

export default TweetCard;
