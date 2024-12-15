import React from "react";

const DesignWeeklyBoard = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Design weekly</h1>
        <p className="mb-4">A board to keep track of design progress.</p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Last week column */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Last week</h2>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold">Review scope</h3>
                <p>Review #390.</p>
                <span className="bg-red-200 text-black-500 px-2 py-1 rounded">
                  Due 4/11
                </span>
              </div>
              <div className="bg-white p-4 rounded shadow mt-4">
                <h3 className="font-bold">Team retro</h3>
                <ul className="list-disc list-inside">
                  <li className="flex items-center line-through">
                    <input type="checkbox" className="mr-2" />
                    Schedule time
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Set up a Figma board
                  </li>
                </ul>
              </div>
            </div>
            {/* This week column */}
            <div>
              <h2 className="text-lg font-semibold mb-2">This week</h2>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex mb-1">
                  <img
                    src="https://images.unsplash.com/photo-1728962087919-9c3af79a83e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                    alt="Placeholder"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1725582206129-9c85794123b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
                    alt="Placeholder"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <h3 className="font-bold">Usability test</h3>
                <p>Research questions with Carina.</p>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded">
                  Research
                </span>
              </div>
            </div>
            {/* Next week column */}
            <div>
              <h2 className="text-lg bg-red-100 font-semibold mb-2">
                Next week
              </h2>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold">Culture workshop</h3>
                <p>Let's build a great team.</p>
                <ul className="list-disc list-inside">
                  <li className="flex items-center line-through">
                    <input type="checkbox" className="mr-2" />
                    Schedule time
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Set up a Figma board
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Review exercises with the team
                  </li>
                </ul>
                <span className="bg-red-200 text-black-500 px-2 py-1 rounded">
                  Due 24/11
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignWeeklyBoard;
