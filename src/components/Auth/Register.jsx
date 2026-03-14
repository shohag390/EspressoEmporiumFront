import { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import baseURL from "../../api/baseUrl";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries(),
    );

    // Create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result?.user);

        const userData = {
          ...userProfile,
          email: email,
          creationTime: result?.user?.metadata?.creationTime,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };

        // save profile info in the Database
        fetch(`${baseURL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.insertedId) {
              toast.success("Register Successfully");
              navigate("/login");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh] w-full authBg flex items-center justify-center px-6 md:px-12 lg:px-35 2xl:px-50">
      <div
        data-aos="zoom-in"
        className="w-full md:w-[65%] lg:w-[45%] 2xl:w-[40%]  p-6 md:p-8 lg:p-10 bg-[#eceae3] flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5"
      >
        <h2 className="text-[#331A15] text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[35px] font-medium lg:font-semibold 2xl:font-bold text-shadow-lg text-center">
          Create an Account
        </h2>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5"
        >
          <input
            className="bg-[#ffffff] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
            type="text"
            name="name"
            placeholder="Enter Your Name..."
          />
          <input
            className="bg-[#ffffff] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
            type="number"
            name="phone"
            placeholder="Enter Your Phone..."
          />
          <input
            className="bg-[#ffffff] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
            type="text"
            name="photo"
            placeholder="Enter Your Photo Url..."
          />
          <input
            className="bg-[#ffffff] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
            type="email"
            name="email"
            placeholder="Enter Your Email..."
          />
          <div className="relative w-full">
            <input
              className="bg-[#ffffff] py-3 px-3 lg:px-4 w-full raleway text-[14px] md:text-[16px] focus:outline-0"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password..."
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 cursor-pointer text-sm text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            type="submit"
            className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] py-2 px-3 lg:px-4 w-full text-[#242222] bg-[#E3B577] hover:bg-[#e9a956] transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 group"
          >
            <span>Login</span>
            <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
          </button>
          <p className="text-center text-[14px] md:text-[16px] text-[#331A15] raleway">
            You agree to Our{" "}
            <a
              href="#"
              className="font-medium text-gray-800 underline hover:text-blue-800 duration-500"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-gray-800 underline hover:text-blue-800 duration-500"
            >
              Privacy
            </a>
            .
          </p>
        </form>
        {/* Devider */}
        <div className="flex items-center">
          <div className="w-[40%] h-0.5 bg-gray-300"></div>
          <span className="w-[20%] text-center">Or</span>
          <div className="w-[40%] h-0.5 bg-gray-300"></div>
        </div>
        <SocialLogin />
        <p className="text-center text-[14px] md:text-[16px] text-[#331A15] raleway">
          You have an account?{" "}
          <Link
            to={"/login"}
            className="font-medium text-gray-800 underline hover:text-blue-800 duration-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
