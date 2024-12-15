import React from "react";

const TaskCard = () => {
  return (
    <div className="font-['SF_Pro_Text_Bold'] max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://images.unsplash.com/photo-1728962087919-9c3af79a83e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt="Avatar"
          />
          <div className="text-xl font-bold">Card title</div>
        </div>
        <p className="text-gray-700 text-base mb-4">A description of a task.</p>
        <ul className="mb-4">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Task</span>
          </li>
          <li className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span>Task</span>
          </li>
          <li className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span>Task</span>
          </li>
        </ul>
        <div className="flex space-x-2">
          <span className="inline-block bg-pink-200 text-red-800 text-xs px-2 py-1 rounded-lg">
            Tag
          </span>
          <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-lg">
            Tag
          </span>
          <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-lg">
            Tag
          </span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Card</h1>
      <TaskCard />
    </div>
  );
};

export default App;
