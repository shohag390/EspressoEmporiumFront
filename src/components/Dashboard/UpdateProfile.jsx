import React, { useState } from "react";

const UpdateProfile = () => {
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/150?img=32");

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated!");
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Update Profile
      </h1>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Avatar Preview */}
        <div className="flex flex-col items-center">
          <img
            src={avatar}
            alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-orange-500 object-cover shadow-md"
          />
          <p className="text-gray-500 mt-2">Enter your new photo URL below</p>
          <input
            type="text"
            placeholder="Photo URL"
            className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full md:w-96 rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={avatar}
            onChange={handleAvatarChange}
          />
        </div>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          defaultValue="Md Shohag Ali"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          defaultValue="shohag@example.com"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          defaultValue="+880 123 456 789"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          defaultValue="Kaliganj, Bangladesh"
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Your Password..."
          className="bg-[#eceae3] py-3 px-3 lg:px-4 w-full rounded-lg text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition mt-2"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
