import React from "react";

const TrendingNews = () => {
  return (
    <div className="font-['SF_Compact_Display_Medium'] font-bold bg-white text-gray-900 p-4 rounded-lg max-w-md mx-auto shadow-lg">
      <h2 className="text-xl font-bold mb-4">What's happening</h2>
      <div className="space-y-4">
        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
          <div className="flex-grow">
            <p className="text-sm text-gray-500">COVID 19 · Last night</p>
            <h3 className="text-lg font-semibold">
              England's Chief Medical Officer says the UK is at the most
              dangerous time of the pandemic
            </h3>
            <p className="text-sm text-blue-500">Trending with #covid19</p>
          </div>
          <div className="ml-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/3460/11e0/f5855b4ed3bb0e6e9151777b542831a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U91lbBZhYy3NOV48KtbjuNI-NT~FXxuBnztTbjS3f2FrZc7Mth~3cJwF1pOQplBNvvp2VKwCQDmwYc7D2A0xxkxScQkbi36gf7KqR7cI4I-2TwddAakK-jc91vWsXV0moXQXUsxu5Bns-bVO2Two3qAZjHVAaaymocIGFAwqgQpteLbQLVZstO-e2kK3Z5SfIjSHaX85cCtzJo8Q2DcurNiL27TFLxkT~mA9jGgwxgi0E0Dwxi0TYLWspnkvvw43FLYtFcR8RSl4JcKuo31bbsAUlQbRyYPz1qpNa5Sgy9nePaajWvka7mDnbMVxbwn-QZu6lUMMljH3yi8H1RYLQA__"
              alt="COVID-19"
              className="w-20 h-16 rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
          <div className="flex-grow">
            <p className="text-sm text-gray-500">US news · 4h ago</p>
            <h3 className="text-lg font-semibold">
              Parler may go offline following suspensions by Amazon, Apple, and
              Google
            </h3>
            <p className="text-sm text-blue-500">Trending with #trump</p>
          </div>
          <div className="ml-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/dd55/c92d/78e1ecd461a0dadd00f45a1868265980?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bPKLmYzwgQgqab59dWd16DGJbuwVbm4~MEqiDcIjcblyLYyadNpwD8HfuI0aRA0YdIEuDbFyXAUfm8g3EECZ4DoEI09alSsT-vR-C3DQHxhgTMcQAEVTOHRpmwDXqFpKQfcP~RT8Tn-KLJC-Izz6SX9edWUFcQLwSKJST2npNXTlvtoGU2hFeHZ7tR~6AxOk70eruIqdOes3KCoLEzKtso-eBf4eCHWYwtB9RdzWxptOyMYcTrQqNe4mKjmcltzHANdVGWkKlFY7G8UzgDXXBf~WRnwClWyEGVdYIvAJdfTC8NZFtHQCdE7jn1fRQuMEyAlKxi4eNDtn-fbUJJLqnA__"
              alt="Parler"
              className="w-20 h-16 rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
          <div className="flex-grow">
            <p className="text-sm text-gray-500">India · 1h ago</p>
            <h3 className="text-lg font-semibold">
              India vs Australia: India hold on to earn a draw on Day 5 in
              Sydney Test
            </h3>
            <p className="text-sm text-blue-500">Trending with #sport</p>
          </div>
          <div className="ml-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/75e5/6615/1759415b26f3d6c80f11568b5c45b7b7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PxFirCcgUXObB27jkeHgTgO654HCY5Qu00A6uZDQMo57rpfUO6C95qg3B1kJ2idICkKvikyjPsVMTGunWozvTt87UqJTGdAYCJaLJ42lTOXQ1gByHg5S34TIB0lN44nTYo0jXftfl0aK~GM4To8G~24SpgAL782ssLbFGFCP2c6wTt8DhZjDLcifvpS8cCMpVGPl2HYo5tYnglCRhMppeQzT0WVPjgHuiccr6fXSXpPPOS-W3IbQYvoIDufNvLaXn6g4Wuwi9BgIGJ4gBOyPUwWrHxIT40E0oCKLwV~~eYwspkpi6MBz6lZlwmkHcLxhD-hmOLvJjnF29afHD4WenQ__"
              alt="India vs Australia"
              className="w-20 h-16 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <button className="mt-4 text-blue-500 hover:underline">Show more</button>
    </div>
  );
};

export default TrendingNews;
