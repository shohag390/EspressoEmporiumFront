import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact px-6 md:px-12 lg:px-35 2xl:px-50 py-6 md:py-8 lg:py-10 2xl:py-14 flex flex-col lg:flex-row gap-10 lg:gap-25">
      <div data-aos="fade-up" className="w-full lg:w-1/2">
        <div className="inline-block">
          <Link className="flex items-center gap-1 md:gap-2 " to={"/"}>
            <img
              className="h-[6vh] md:h-[7vh] lg:h-[8vh] 2xl:h-[9vh]"
              src={logo}
              alt=""
            />
            <h1 className="text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[36px] text-[#331A15] text-shadow-lg">
              Espresso Emporium
            </h1>
          </Link>
        </div>
        <p className="raleway text-[#1b1a1acc] pb-4 md:pb-5 lg:pb-6 2xl:pb-7 text-[14px] md:text-[16px] text-justify">
          At Espresso Emporium, we believe coffee tastes better when it's
          shared. We are always here — not just to serve you a perfect cup, but
          to be part of your story. Every visit is more than a transaction; it's
          a moment of connection, comfort, and companionship.
        </p>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <a
            href="https://www.facebook.com/smshohag.hossen.790"
            className="h-10 lg:h-12 w-10 lg:w-12 bg-[#331A15] hover:bg-[#E3B577] duration-500 flex items-center justify-center text-[#ffff] text-[20px] rounded-full"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/"
            className="h-10 lg:h-12 w-10 lg:w-12 bg-[#331A15] hover:bg-[#E3B577] duration-500 flex items-center justify-center text-[#ffff] text-[20px] rounded-full"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/mdshohag9263/"
            className="h-10 lg:h-12 w-10 lg:w-12 bg-[#331A15] hover:bg-[#E3B577] duration-500 flex items-center justify-center text-[#ffff] text-[20px] rounded-full"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.linkedin.com/in/md-shohag-ali29/"
            className="h-10 lg:h-12 w-10 lg:w-12 bg-[#331A15] hover:bg-[#E3B577] duration-500 flex items-center justify-center text-[#ffff] text-[20px] rounded-full"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <h1 className="text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[36px] text-[#331A15] text-shadow-lg py-4 md:py-5 lg:py-6 2xl:py-7">
          Get in Touch
        </h1>
        <div className="flex flex-col gap-2 lg:gap-3">
          <div className="flex items-center gap-2 lg:gap-3">
            <div>
              <FaPhone className="text-[20px]" />
            </div>
            <span className="raleway text-[#1b1a1acc]">+880 1315-390470</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div>
              <FaGoogle className="text-[20px]" />
            </div>
            <span className="raleway text-[#1b1a1acc]">
              shohag.webdev@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div>
              <FaLocationDot className="text-[20px]" />
            </div>
            <span className="raleway text-[#1b1a1acc]">
              72, Wall street, King Road, Dhaka
            </span>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="w-full lg:w-1/2">
        <h1 className="text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[36px] text-[#331A15] text-shadow-lg pb-4 md:pb-5 lg:pb-6 2xl:pb-7">
          Connect with Us
        </h1>
        <form className="flex flex-col items-start w-full gap-5">
          <input
            className="w-full raleway px-2 md:px-3 lg:px-4 py-3 bg-[#ffff] focus:outline-0 text-[#1b1a1acc] text-[14px] md:text-[16px]"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="w-full raleway px-2 md:px-3 lg:px-4 py-3 bg-[#ffff] focus:outline-0 text-[#1b1a1acc] text-[14px] md:text-[16px]"
            type="email"
            placeholder="Enter Your Email"
          />
          <textarea
            className="w-full raleway px-2 md:px-3 lg:px-4 py-3 bg-[#ffff] focus:outline-0 text-[#1b1a1acc] text-[14px] md:text-[16px]"
            placeholder="Message"
            rows={4}
          ></textarea>
          <button className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] px-5 md:px-6 lg:px-7 2xl:px-8 py-1 md:py-1.5 lg:py-2 border border-[#E3B577] hover:border-[#242222] text-[#242222] bg-[#E3B577] hover:bg-transparent transition-all duration-300 flex items-center gap-1 md:gap-2 group">
            <span>Send Message</span>
            <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
