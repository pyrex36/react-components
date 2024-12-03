

import React from 'react';

const CardComponent = () => {
  return (
    <div className="card-container flex flex-row items-start p-2.5 gap-3 absolute w-[350px] h-[120px] left-4 top-4 sm:w-[300px] md:w-[350px] lg:w-[400px]">
      <div className="text-container flex flex-col items-start p-0 gap-1.5 w-[235px] h-[100px]">
        <div className="topic flex flex-row items-start p-0 gap-1 w-[128px] h-[17px]">
          <span className="us-news font-medium text-sm leading-[17px] text-[#5B7083]">US news</span>
          <span className="separator w-[5px] h-[17px] text-[#5B7083]">·</span>
          <span className="last-night font-medium text-sm leading-[17px] text-[#5B7083]">Last night</span>
        </div>
        <h2 className="title font-semibold text-[15px] leading-[18px] tracking-[0.02em] text-[#0F1419] w-[235px] h-[54px]">
          Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads
        </h2>
        <div className="trending flex flex-row items-start p-0 gap-1 w-[144px] h-[17px]">
          <span className="trending-text font-medium text-sm leading-[17px] text-[#5B7083]">Trending with</span>
          <span className="hashtag font-medium text-sm leading-[17px] text-[#1DA1F2]">#hashtag</span>
        </div>
      </div>
      <div className="media-container w-[71px] h-[69px] relative">
        <div className="thumbnail absolute w-[71px] h-[69px] left-0 top-0 rounded-[12px] bg-[#C4C4C4]" />
      </div>
    </div>
  );
};

export default CardComponent;
