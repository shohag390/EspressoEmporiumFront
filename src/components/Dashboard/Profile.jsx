import { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import baseURL from "../../api/baseUrl";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const email = user?.email?.toLowerCase().trim() || "";

  // Logout
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

  // Fetch user
  useEffect(() => {
    fetch(`${baseURL}/users`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filterUser = profile?.find(
    (item) => item?.email?.toLowerCase().trim() === email,
  );

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full overflow-hidden">
        {/* Top Banner */}
        <div className="h-40 pro-banner relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={filterUser?.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 pb-8 px-6 text-center space-y-6">
          {/* Name */}
          <div>
            <h2 className="text-3xl font-bold text-[#331A15]">
              {filterUser?.name || "No Name"}
            </h2>
            <p className="text-[#1B1A1A] mt-1 raleway">Coffee Lover</p>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-gray-200"></div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#f7e3c9] p-4 rounded-xl flex items-center gap-3">
              <FaEnvelope className="text-[#E3B577] text-xl" />
              <span className="text-[#331A15] break-all raleway">
                {filterUser?.email || "No Email"}
              </span>
            </div>

            <div className="bg-[#f3f4f6] p-4 rounded-xl flex items-center gap-3">
              <FaPhoneAlt className="text-[#E3B577] text-xl" />
              <span className="text-[#331A15] raleway">
                {filterUser?.phone || "+880 000000000"}
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <div className="pt-4">
            <button
              onClick={handleLogout}
              className="w-full md:w-auto px-8 py-2 bg-[#E3B577] text-[#331A15] hover:bg-transparent border border-[#E3B577] hover:border-[#331A15] transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              <MdLogout />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
