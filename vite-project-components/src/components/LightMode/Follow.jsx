

import React from 'react';

const WhatsNew = () => {
  return (
    <div className="absolute w-80 h-[234px] left-4 top-4 bg-[#F7F9FA] rounded-xl flex flex-col items-start p-0">
      {/* Header */}
      <div className="w-full h-12 flex justify-between items-center">
        <div className="absolute w-[125px] h-6 left-4 top-3 text-[#0F1419] text-xl font-bold">
          Who to follow
        </div>
        <div className="absolute w-full h-px left-0 top-[45px] bg-[#EBEEF0]" />
      </div>

      {/* Profile 1 */}
      <div className="w-full h-18 relative">
        <div
          className="absolute w-12 h-12 left-4 top-2 rounded-full bg-cover"
          style={{ backgroundImage: 'url(path/to/avatar1.png)' }}
        />
        <div className="absolute left-[75px] top-4">
          <div className="font-bold text-[#0F1419] text-lg">Bessie Cooper</div>
          <div className="font-medium text-[#5B7083] text-lg">@alessandroveronezi</div>
        </div>
        <div className="absolute w-[80px] h-[30px] left-[254px] top-[20px] flex justify-center items-center border border-[#1DA1F2] rounded-full p-4">
          <div className="font-bold text-[#1DA1F2] text-sm text-center">Tweet</div>
        </div>
      </div>

      <div className="absolute w-full h-px left-0 top-[128px] bg-[#EBEEF0]" />

      {/* Profile 2 */}
      <div className="w-full h-18 relative">
        <div
          className="absolute w-12 h-12 left-4 top-2 rounded-full bg-cover"
          style={{ backgroundImage: 'url(path/to/avatar2.png)' }}
        />
        <div className="absolute left-[75px] top-4">
          <div className="font-bold text-[#0F1419] text-lg">Bessie Cooper</div>
          <div className="font-medium text-[#5B7083] text-lg">@alessandroveronezi</div>
        </div>
        <div className="absolute w-[80px] h-[30px] left-[254px] top-[20px] flex justify-center items-center border border-[#1DA1F2] rounded-full p-4">
          <div className="font-bold text-[#1DA1F2] text-sm text-center">Tweet</div>
        </div>
      </div>

      <div className="absolute w-full h-px left-0 top-[220px] bg-[#EBEEF0]" />

      {/* Show Thread */}
      <div className="flex items-start p-4 w-full h-12">
        <div className="font-medium text-[#1DA1F2] text-sm">Show more</div>
      </div>
    </div>
  );
};

export default WhatsNew;
