import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const TwitterSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex justify-center p-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-gray-100 rounded-full shadow-md w-full max-w-md p-2"
      >
        <button
          type="submit"
          className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-full w-12 h-12 hover:bg-blue-400 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 21l1-1h-1l-1 1zM9 19h6m-3-6a6 6 0 100-12 6 6 0 000 12zm4.5-1.5l5.5 5.5"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search Twitter"
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow bg-transparent px-4 py-2 text-gray-700 rounded-r-full focus:outline-none"
        />
      </form>
    </div>
  );
};

export default TwitterSearchBar;
