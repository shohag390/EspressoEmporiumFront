import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <button className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] py-2 px-3 lg:px-4 w-full text-[#242222] bg-[#eceae3] hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 group">
      <FcGoogle className="text-[25px]" />

      <span className="group-hover:translate-x-1.5 duration-500">
        Sign in with Google
      </span>
    </button>
  );
};

export default SocialLogin;
