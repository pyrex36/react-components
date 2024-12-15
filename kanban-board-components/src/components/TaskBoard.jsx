import React from "react";

const TaskBoard = () => {
  return (
    <>
      <div className="font-['SF_Pro_Text_Bold'] flex flex-col md:flex-row justify-around p-4">
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="bg-gray-300 text-gray-700 p-2 rounded-md mb-2">
              Lane name
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-bold text-lg mb-2">Card title</h3>
              <p>A description of a task.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="bg-purple-200 text-purple-700 p-2 rounded-md mb-2">
              Lane name
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-bold text-lg mb-2">Card title</h3>
              <p>A description of a task.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="bg-red-200 text-red-700 p-2 rounded-md mb-2">
              Lane name
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-bold text-lg mb-2">Card title</h3>
              <p>A description of a task.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
