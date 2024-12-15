import React from "react";

// Card Component
const Card = ({ title, description, tasks, tags, avatars }) => {
  return (
    <div className="font-['SF_Pro_Text_Bold'] bg-white shadow rounded-lg p-4 mb-4 w-full sm:max-w-md md:max-w-lg">
      <div className="flex items-center mb-2">
        {avatars && (
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
        )}
        <h2 className="text-lg font-semibold ml-3">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {tasks && (
        <ul className="list-disc list-inside text-gray-800 mb-4">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {task}
            </li>
          ))}
        </ul>
      )}
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-sm rounded-lg ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Component
const CardCombinations = () => {
  return (
    <div className="p-6 max-w-screen-sm mx-auto">
      <div className="bg-gray-100 p-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-pink-500">
          Cards combinations
        </h1>
        <Card title="Card title" description="A description of a task." />
        <Card
          title="Card title"
          description="A description of a task."
          avatars={[
            "https://images.unsplash.com/photo-1728962087919-9c3af79a83e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1725582206129-9c85794123b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
          ]}
        />
        <Card
          title="Card title"
          description="A description of a task."
          avatars={[
            "https://images.unsplash.com/photo-1728962087919-9c3af79a83e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1725582206129-9c85794123b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
          ]}
          tasks={["Task", "Task", "Task"]}
        />
        <Card
          title="Card title"
          description="A description of a task."
          avatars={[
            "https://images.unsplash.com/photo-1728962087919-9c3af79a83e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
            "https://images.unsplash.com/photo-1725582206129-9c85794123b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
          ]}
          tasks={["Task", "Task", "Task"]}
          tags={[
            { label: "Tag", color: "bg-pink-200" },
            { label: "Tag", color: "bg-gray-200" },
            { label: "Tag", color: "bg-green-200" },
          ]}
        />
      </div>
    </div>
  );
};

export default CardCombinations;
