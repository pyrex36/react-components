import React, { useState } from "react";

// import { CiSearch } from "react-icons/ci";

const SuggestedUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="font-[DM Sans] font-bold bg-gray-900 text-white p-4 rounded-lg max-w-sm mx-auto">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Twitter"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">You might like</h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1735657090719-7f92cb44170b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bessie Cooper"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-sm font-semibold">Bessie Cooper</h3>
            <p className="text-sm text-gray-400">@alessandroveronezi</p>
          </div>
          <button className="items-center bg-transparent ml-auto px-4 py-2 h-9 w-24 bg-blue-500 hover:bg-blue-500 text-[#1da1f2] text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
            Follow
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1735509903556-602b4d7d3ae5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jenny Wilson"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-sm font-semibold">Jenny Wilson</h3>
            <p className="text-sm text-gray-400">@gabrielcantarin</p>
          </div>
          <button className="items-center bg-transparent ml-auto px-4 py-2 h-9 w-24 bg-blue-500 hover:bg-blue-500 text-[#1da1f2] text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
            Follow
          </button>
        </div>
      </div>
      <div className="mt-4">
        <button className="text-blue-400 ">Show more</button>
      </div>
    </div>
  );
};

export default SuggestedUsers;
