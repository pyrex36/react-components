import React from 'react';

import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";

const TweetCard = () => {
  return (
    <div className="max-w-xl mx-auto bg-black text-white p-4 rounded-md shadow-md">
      {/* User Info */}
      <div className="flex items-start gap-3">
        <img
          src="https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EzuyuCp~6s8tKQjyb4NqBZZ7y-Iwp7gzhirWHslWyWfNxLbp9zlTJMpznimNy4wGKYHuqhktWzaPE9-EbejqxHt6huniexyCSvjmR6fbFyLJ3YukvgGLaq1K917jIYBokB5srcuPbKJNTdErT02CTaxc8GQFVAsqaSGMv0Yp6K4aUzUkk03trmmyfwiy8eiHlUFiddC8yX1OaOUStLtiZqh1ltoc8NYaJhx4IBWdaX0cQeI0j5nps6OU36W-rZKc-Ov~oXDGRrMPsSdddjwRZeJsvqPJIEWsywuSW6bqklPCXBjwldkHSbiWmQ8p~i5gu0YV9gU8UPwyzU0se~1lbQ__"
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Devon Lane</span>
            <span className="text-gray-400">@johndue</span>
            <span className="text-gray-400">· 23s</span>
          </div>
          <p className="mt-1 text-gray-300">Tom is in a big hurry.</p>
        </div>
      </div>
      {/* https://avatarfiles.alphacoders.com/313/313393.jpg */}
      {/* Tweet Image */}
      <div className=" mt-4 rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Tweet Media"
          className=" w-full h-full object-cover"
        />
      </div>

      {/* Interaction Section */}
      <div className="flex items-center justify-between text-gray-400 text-sm mt-4 px-2">
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
          <i className="far fa-comment"><FaRegComment /></i> 61
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-500">
          <i className="fas fa-retweet"><FaRetweet /></i> 12
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
          <i className="far fa-heart"><FcLike /></i> 6.2K
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
          <i className="far fa-share-square"><FiShare /></i> 61
        </div>
      </div>

      {/* Thread Link */}
      <div className="text-sm text-blue-500 mt-2 cursor-pointer hover:underline">
        Show this thread
      </div>
    </div>
  );
};

export default TweetCard;
