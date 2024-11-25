import React from 'react';

import { CiLocationOn } from "react-icons/ci";
import { BsCalendar3 } from "react-icons/bs";

const ProfileCard = () => {
  return (
    <div className=" max-w-lg mx-auto bg-black text-white rounded-md overflow-hidden shadow-lg">
      {/* Cover Image */}
      <div className="relative h-40 bg-gradient-to-r from-purple-500 to-pink-500">
        <img
          src="https://s3-alpha-sig.figma.com/img/f6dc/aa26/bca3c368810df76251ed44dbb55cfb99?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIBsGFWgX4BNKFim4Ml1kySgGyOJQWYrG4d6A7d5DK6nVTVblxcqtYH4HLHD2lbcvtAyusyfaT91ndwLKRPGapYKfhOnU4ykYonpbqjf-AcMifgHdMPvmhUgHpgUfjgDjGzeRD2XqbkhnstQeJ7EIJi5IUID-pakj8SugQ27Agmty5sBk9EnjU30TuE9yXszNWCbjOTZvfngfVXbmQojAENDxIVzdvSAXTpegb9vFtmWTa-B912OPFu4s8uezaRn8py4Wx3CUmYGZhn36wd9f3FUUlz8w57FW2jUSQA1ik2xIe9Y3RZTGukIsEyMJJ5XcsRn53UyC1z73HrlqXZH~A__"
          alt="Cover"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Profile Section */}
      <div className="p-6">
        <div className="flex items-center">
          {/* Profile Picture */}
          <div className="absolute w-24 h-24 bg-gray-800 border-4 border-black rounded-full -mt-16">
            <img
              src="https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EzuyuCp~6s8tKQjyb4NqBZZ7y-Iwp7gzhirWHslWyWfNxLbp9zlTJMpznimNy4wGKYHuqhktWzaPE9-EbejqxHt6huniexyCSvjmR6fbFyLJ3YukvgGLaq1K917jIYBokB5srcuPbKJNTdErT02CTaxc8GQFVAsqaSGMv0Yp6K4aUzUkk03trmmyfwiy8eiHlUFiddC8yX1OaOUStLtiZqh1ltoc8NYaJhx4IBWdaX0cQeI0j5nps6OU36W-rZKc-Ov~oXDGRrMPsSdddjwRZeJsvqPJIEWsywuSW6bqklPCXBjwldkHSbiWmQ8p~i5gu0YV9gU8UPwyzU0se~1lbQ__"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="bg-transparent ml-auto px-4 py-2 bg-blue-500 hover:bg-blue-500 text-[#1da1f2] text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
            Edit profile
          </button>
        </div>

        {/* User Info */}
        <div className="mt-4">
          <h2 className="text-xl font-bold">Davide Biscuso</h2>
          <p className="text-gray-400">@biscuittu</p>
          <p className="text-sm text-gray-300 mt-2">Product Designer</p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
            <div className="flex items-center gap-1">
              <i className="fas fa-map-marker-alt"> <CiLocationOn /></i> London
            </div>
            <div className="flex items-center gap-1">
              <i className="fas fa-calendar-alt"> <BsCalendar3 /></i> Joined September 2011
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-4 text-sm">
            <div>
              <span className="font-bold text-white">589</span>{' '}
              <span className="text-gray-400">Following</span>
            </div>
            <div>
              <span className="font-bold text-white">72</span>{' '}
              <span className="text-gray-400">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
