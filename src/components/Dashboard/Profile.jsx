import React, { use, useContext, useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserEdit,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const email = user?.email;
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, []);

  const filterUser = profile?.find((item) => item.email === email);
  console.log(filterUser);

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      {/* Banner */}
      <div className="w-full relative">
        <div className="h-32 pro-banner"></div>
        {/* Avatar */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <img
            src={filterUser?.photo}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Profile Info Card */}
      <div className="bg-white w-full pt-20 pb-6 px-8 flex flex-col items-center space-y-6">
        {/* Name & Role */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">{filterUser?.name}</h2>
          <p className="text-gray-500 mt-1">Coffee Lover</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-700">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-orange-500" />
            <span>{filterUser?.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-orange-500" />
            <span>{filterUser?.phone}</span>
          </div>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
          <div className="bg-orange-50 p-4 text-center">
            <p className="text-2xl font-bold">120</p>
            <p className="text-gray-500 text-sm mt-1">Coffees Added</p>
          </div>
          <div className="bg-green-50 p-4 text-center">
            <p className="text-2xl font-bold">350</p>
            <p className="text-gray-500 text-sm mt-1">Orders</p>
          </div>
          <div className="bg-blue-50 p-4 text-center">
            <p className="text-2xl font-bold">$8,500</p>
            <p className="text-gray-500 text-sm mt-1">Revenue</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] px-5 md:px-6 lg:px-7 2xl:px-8 py-.5 md:py-1.5 lg:py-2 border border-[#E3B577] hover:border-[#242222] text-[#242222] bg-[#E3B577] hover:bg-transparent transition-all duration-300 flex items-center gap-1 md:gap-2 group"
        >
          <span>Logout</span>
          <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
        </button>
      </div>
    </div>
  );
};

export default Profile;
