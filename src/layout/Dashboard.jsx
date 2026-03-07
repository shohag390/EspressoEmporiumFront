import React from "react";
import Navbar from "../shared/Navbar";
import { Link, Outlet } from "react-router";
import Footer from "../shared/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Body */}
      <div className="flex flex-1 w-full px-6 md:px-12 lg:px-35 2xl:px-50 gap-2 md:gap-3 lg:gap-4 2xl:gap-5 py-[2vh]">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg p-5 lg:h-[76vh] 2xl:h-[74vh]">
          <h2 className="text-xl font-bold mb-6 border-b pb-3">
            Dashboard Menu
          </h2>

          <div className="flex flex-col gap-3">
            <Link
              to="/dashboard"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white transition px-4 py-2 rounded-lg"
            >
              Dashboard
            </Link>

            <Link
              to="profile"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white transition px-4 py-2 rounded-lg"
            >
              My Profile
            </Link>

            <Link
              to="updateProfile"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white transition px-4 py-2 rounded-lg"
            >
              Update Profile
            </Link>

            <Link
              to="addCoffee"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white transition px-4 py-2 rounded-lg"
            >
              Add Coffee
            </Link>

            <Link
              to="myCoffee"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white transition px-4 py-2 rounded-lg"
            >
              My Coffees
            </Link>
            <Link
              to="allCoffee"
              className="bg-gray-100 hover:bg-orange-500 hover:text-white transition px-4 py-2 rounded-lg"
            >
              All Coffee
            </Link>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white shadow-lg p-6 lg:h-[76vh] 2xl:h-[74vh] overflow-y-auto">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
