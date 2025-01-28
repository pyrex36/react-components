import React from "react";

const TrendingNews = () => {
  return (
    <div className="font-[DM Sans] font-bold bg-gray-800 text-white p-4 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">What's happening</h2>
      <div className="space-y-4">
        <div className="flex items-center bg-gray-700 p-4 rounded-lg">
          <div className="flex-grow">
            <p className="text-sm text-gray-400">COVID 19 · Last night</p>
            <h3 className="text-lg font-semibold">
              England's Chief Medical Officer says the UK is at the most
              dangerous time of the pandemic
            </h3>
            <p className="text-sm text-blue-400">Trending with #covid19</p>
          </div>
          <div className="ml-4">
            <img
              src="https://images.unsplash.com/photo-1585458297824-076478fda40f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y292aWR8ZW58MHx8MHx8fDA%3D"
              alt="COVID-19"
              className="w-20 h-16 rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex items-center bg-gray-700 p-4 rounded-lg">
          <div className="flex-grow">
            <p className="text-sm text-gray-400">US news · 4h ago</p>
            <h3 className="text-lg font-semibold">
              Parler may go offline following suspensions by Amazon, Apple, and
              Google
            </h3>
            <p className="text-sm text-blue-400">Trending with #trump</p>
          </div>
          <div className="ml-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1706546717558-2422d2bde2d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFybGVyfGVufDB8fDB8fHww"
              alt="Parler"
              className="w-20 h-16 rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex items-center bg-gray-700 p-4 rounded-lg">
          <div className="flex-grow">
            <p className="text-sm text-gray-400">India · 1h ago</p>
            <h3 className="text-lg font-semibold">
              India vs Australia: India hold on to earn a draw on Day 5 in
              Sydney Test
            </h3>
            <p className="text-sm text-blue-400">Trending with #sport</p>
          </div>
          <div className="ml-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1683141498413-cdfc0feccdb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D"
              alt="India vs Australia"
              className="w-20 h-16 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <button className="mt-4 text-blue-400 hover:underline">Show more</button>
    </div>
  );
};

export default TrendingNews;
