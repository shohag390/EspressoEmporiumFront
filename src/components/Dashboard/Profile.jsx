import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserEdit,
} from "react-icons/fa";
import { Link } from "react-router";

const Profile = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-8">
      {/* Banner */}
      <div className="w-full relative">
        <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>
        {/* Avatar */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Profile Info Card */}
      <div className="bg-white w-full pt-20 pb-6 px-8 flex flex-col items-center space-y-6">
        {/* Name & Role */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Md Shohag Ali</h2>
          <p className="text-gray-500 mt-1">Admin & Coffee Lover</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-700">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-orange-500" />
            <span>shohag@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-orange-500" />
            <span>+880 123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>Kaliganj, Bangladesh</span>
          </div>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-xl text-center shadow">
            <p className="text-2xl font-bold">120</p>
            <p className="text-gray-500 text-sm mt-1">Coffees Added</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl text-center shadow">
            <p className="text-2xl font-bold">350</p>
            <p className="text-gray-500 text-sm mt-1">Orders</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl text-center shadow">
            <p className="text-2xl font-bold">$8,500</p>
            <p className="text-gray-500 text-sm mt-1">Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
