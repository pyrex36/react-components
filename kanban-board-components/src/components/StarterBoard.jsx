import React from "react";

const StarterBoard = () => {
  return (
    <>
      <div className="font-['SF_Pro_Text_Bold'] p-4">
        <div className="bg-white-100 p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Starter board</h1>
          <p className="text-gray-600">A description of a board.</p>
          <div className="flex flex-wrap mt-4">
            <div className="w-full md:w-1/3 p-2">
              <div className="bg-gray-100 p-4 rounded">
                <h2 className="bg-gray-300 text-gray-700 p-2 rounded mb-2">
                  Lane name
                </h2>
                <div className="bg-white p-4 mt-2 rounded shadow">
                  <h3 className="font-bold">Card title</h3>
                  <p className="text-gray-600">A description of a task.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2">
              <div className="bg-gray-100 p-4 rounded">
                <h2 className="bg-purple-100 text-purple-700 p-2 rounded mb-2">
                  Lane name
                </h2>
                <div className="bg-white p-4 mt-2 rounded shadow">
                  <h3 className="font-bold">Card title</h3>
                  <p className="text-gray-600">A description of a task.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2">
              <div className="bg-gray-100 p-4 rounded">
                <h2 className="bg-red-100 text-red-700 p-2 rounded mb-2">
                  Lane name
                </h2>
                <div className="bg-white p-4 mt-2 rounded shadow">
                  <h3 className="font-bold">Card title</h3>
                  <p className="text-gray-600">A description of a task.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarterBoard;
