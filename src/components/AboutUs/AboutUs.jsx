import React from "react";
import image from "../../assets/images/aboutUs1.png";
import { Link } from "react-router";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-35 2xl:px-50 py-6 md:py-8 lg:py-10 2xl:py-14 h-full lg:h-[90vh] 2xl:h-[89vh] flex flex-col lg:flex-row items-center justify-between bg-[#ECEAE3] gap-10 md:gap-12">
      <div data-aos="fade-right" className="w-full lg:w-1/2">
        <h2 className="text-[#331A15] font-medium text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[26px] leading-4">
          About Us
        </h2>
        <h1 className="text-[#331A15] text-[24px] md:text-[32px] lg:text-[40px] 2xl:text-[48px] font-medium">
          Brewing Moments, One Perfect Cup at a Time
        </h1>
        <p className="raleway text-[#1b1a1acc] pb-2 md:pb-3 lg:pb-4 2xl:pb-5 text-[14px] md:text-[16px] text-justify">
          At Espresso Emporium, coffee is more than just a drink — it's an
          experience. We are passionate about crafting rich, aromatic, and
          perfectly balanced coffee that brings people together. From bold
          espresso shots to smooth lattes, every cup is made with carefully
          selected beans and expert precision.
        </p>
        <p className="raleway text-[#1b1a1acc] pb-2 md:pb-3 lg:pb-4 2xl:pb-5 text-[14px] md:text-[16px] text-justify">
          Our journey began with a simple mission: to create a cozy space where
          conversations flow as smoothly as our coffee. We believe in quality,
          consistency, and community. Whether you're starting your morning,
          taking a break, or catching up with friends, Espresso Emporium is your
          perfect coffee destination.
        </p>
        <p className="raleway text-[#1b1a1acc] pb-4 md:pb-5 lg:pb-6 2xl:pb-7 text-[14px] md:text-[16px] text-justify">
          Come for the coffee. Stay for the vibe.
        </p>

        <div className="inline-block">
          <Link
            to={"/about"}
            className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] px-5 md:px-6 lg:px-7 2xl:px-8 py-1 md:py-1.5 lg:py-2 border border-[#E3B577] hover:border-[#242222] text-[#242222] bg-[#E3B577] hover:bg-transparent transition-all duration-300 flex items-center gap-1 md:gap-2 group"
          >
            <span>Learn More</span>
            <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
          </Link>
        </div>
      </div>
      <div data-aos="fade-left" className="">
        <img className="" src={image} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
