import React from "react";
import {
  CiImage,
  CiGif,
  CiPoll,
  CiEmojiSmile,
  CiCalendar,
} from "react-icons/ci";

const Post = ({ profilePic }) => {
  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-4 rounded-lg">
      <div className="flex items-start space-x-4">
        {/* Profile Picture */}
        <img
          src={profilePic || "default-profile-pic-url"} // Replace with a default profile picture if none is provided
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
                <CiImage className="w-6 h-6" />
              </button>
              <button aria-label="Add GIF">
                <CiGif className="w-6 h-6" />
              </button>
              <button aria-label="Add Poll">
                <CiPoll className="w-6 h-6" />
              </button>
              <button aria-label="Add Emoji">
                <CiEmojiSmile className="w-6 h-6" />
              </button>
              <button aria-label="Schedule Tweet">
                <CiCalendar className="w-6 h-6" />
              </button>
            </div>

            {/* Tweet Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
