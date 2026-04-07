import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SocialLogin from "./SocialLogin";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import baseURL from "../../api/baseUrl";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login user in Firebase
    signInUser(email, password)
      .then((result) => {
        const signInInfo = {
          email,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };

        // Update last signIn to database
        fetch(`${baseURL}/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.modifiedCount === 1) {
              toast.success("Login Successfully");
              navigate("/");
            } else {
              toast.info("User already exists");
            }
          });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          toast.error("User not found");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Wrong password");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else {
          toast.error(error.message);
        }
      });
  };

  return (
    <div className="h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh] w-full authBg flex items-center justify-center px-6 md:px-12 lg:px-35 2xl:px-50">
      <div
        data-aos="zoom-in"
        className="w-full md:w-[65%] lg:w-[45%] 2xl:w-[40%]  p-6 md:p-8 lg:p-10 bg-[#eceae3] flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5"
      >
        <h2 className="text-[#331A15] text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[35px] font-medium lg:font-semibold 2xl:font-bold text-shadow-lg text-center">
          Welcome Back !
        </h2>
        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5"
        >
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
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="font-medium text-gray-800 underline hover:text-blue-800 duration-500"
          >
            Regester
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
