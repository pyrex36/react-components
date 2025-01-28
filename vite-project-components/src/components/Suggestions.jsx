import React from "react";

const Suggestions = () => {
  return (
    <div className="font-[DM Sans] font-bold bg-gray-900 text-white p-4 rounded-lg max-w-sm mx-auto">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-4">You might like</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://images.unsplash.com/photo-1735657090719-7f92cb44170b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bessie Cooper"
          />
          <div className="flex-1">
            <p className="font-semibold">Bessie Cooper</p>
            <p className="text-gray-400">@alessandroveronezi</p>
          </div>
          <button className="items-center bg-transparent ml-auto px-4 py-2 h-9 w-24 bg-blue-500 hover:bg-blue-500 text-[#1da1f2] text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
            Follow
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://images.unsplash.com/photo-1735509903556-602b4d7d3ae5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jenny Wilson"
          />
          <div className="flex-1">
            <p className="font-semibold">Jenny Wilson</p>
            <p className="text-gray-400">@gabrielcantarin</p>
          </div>
          <button className="items-center bg-transparent ml-auto px-4 py-2 h-9 w-24 bg-blue-500 hover:bg-blue-500 text-[#1da1f2] text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
            Follow
          </button>
        </div>
      </div>
      <button className="mt-4 text-blue-400">Show more</button>
    </div>
  );
};

export default Suggestions;
