

import React from 'react';

const NewsCard = () => {
  return (
    <div className="absolute w-[350px] sm:w-[300px] md:w-[320px] h-[457px] top-4 left-4 bg-[#F7F9FA] rounded-[16px]">
      {/* Header Section */}
      <div className="absolute top-3 left-4 w-[350px] h-[46px] flex items-center">
        <h1 className="font-[SF Compact Display] font-bold text-[20px] leading-[24px] tracking-[0.014em] text-[#0F1419]">
          What’s happening
        </h1>
      </div>

      {/* Divider */}
      <div className="absolute top-[45px] w-[350px] h-px bg-[#EBEEF0]"></div>

      {/* News Item 1 */}
      <div className="absolute top-[50px] w-[350px] h-[120px] flex gap-[15px] p-[10px] pl-[15px]">
        {/* Text Section */}
        <div className="flex flex-col gap-[6px] w-[235px] h-[100px]">
          {/* Topic Section */}
          <div className="flex gap-[4px] w-[128px] h-[17px]">
            <span className="font-[SF Compact Display] font-medium text-[14px] leading-[17px] text-[#5B7083]">
              US news
            </span>
            <span className="font-[SF Compact Display] font-medium text-[14px] leading-[17px] text-[#5B7083]">·</span>
            <span className="font-[SF Compact Display] font-medium text-[14px] leading-[17px] text-[#5B7083]">
              Last night
            </span>
          </div>

          {/* Title */}
          <h2 className="font-[SF Compact Display] font-bold text-[15px] leading-[18px] tracking-[0.02em] text-[#0F1419] h-[54px] overflow-hidden text-ellipsis">
            Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads
          </h2>

          {/* Topic */}
          <div className="flex gap-[4px] w-[140px] h-[17px]">
            <span className="font-[SF Compact Display] font-medium text-[14px] leading-[17px] tracking-[-0.02em] text-[#5B7083]">
              Trending with
            </span>
            <span className="font-[SF Compact Display] font-medium text-[14px] leading-[17px] tracking-[-0.02em] text-[#1DA1F2]">
              #hashtag
            </span>
          </div>
        </div>

        {/* Media Section */}
        <div className="w-[71px] h-[69px] relative">
          <div className="w-[71px] h-[69px] rounded-[12px] bg-cover bg-center" style={{ backgroundImage: 'url(image.png)' }}></div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute top-[170px] w-[350px] h-px bg-[#EBEEF0]"></div>

      {/* News Item 2 (similar to News Item 1) */}
      <div className="absolute top-[175px] w-[350px] h-[120px] flex gap-[15px] p-[10px] pl-[15px]">
        {/* Repeat similar structure for News Item 2 */}
      </div>

      {/* Divider */}
      <div className="absolute top-[295px] w-[350px] h-px bg-[#EBEEF0]"></div>

      {/* Show More Button */}
      <div className="absolute top-[300px] w-[350px] h-[48px] flex items-center p-[15px]">
        <span className="font-[SF Compact Display] font-medium text-[15px] leading-[18px] text-[#1DA1F2]">
          Show more
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
