import { useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Link, NavLink, Outlet } from "react-router";
import Footer from "../shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const dashboardLink = [
  {
    id: 1,
    path: "/dashboard",
    display: "Dashboard",
  },
  {
    id: 2,
    path: "profile",
    display: "My Profile",
  },
  {
    id: 3,
    path: "addCoffee",
    display: "Add Coffee",
  },
  {
    id: 4,
    path: "myCoffee",
    display: "My Coffees",
  },
  {
    id: 5,
    path: "allCoffee",
    display: "All Coffee",
  },
];

const Dashboard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Body */}
      <div className="flex flex-1 w-full px-6 md:px-12 lg:px-35 2xl:px-50 gap-2 md:gap-3 lg:gap-4 2xl:gap-5 py-[2vh]">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg p-5 lg:h-[76vh] 2xl:h-[74vh] hidden lg:inline-block ">
          <h2 className="text-xl font-bold mb-6 border-b pb-3">
            Dashboard Menu
          </h2>

          <ul className="flex flex-col items-center justify-center gap-3 raleway w-full">
            {dashboardLink?.map((link) => (
              <li className="w-full" key={link?.id}>
                <NavLink
                  className={`bg-gray-100 inline-block w-full hover:bg-[#e9a956] hover:text-white px-4 py-2 `}
                  to={link?.path}
                >
                  {link?.display}
                </NavLink>
              </li>
            ))}
          </ul>
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
