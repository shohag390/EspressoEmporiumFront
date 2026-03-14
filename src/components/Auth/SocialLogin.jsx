import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import baseURL from "../../api/baseUrl";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userData = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          phone: user.phoneNumber,
          creationTime: user.metadata?.creationTime,
          lastSignInTime: user.metadata?.lastSignInTime,
        };

        // Send to MongoDB
        fetch(`${baseURL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.inserted || data.message === "user already exists") {
              toast.success("Login Successfully");
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] py-2 px-3 lg:px-4 w-full text-[#242222] bg-[#ffffff] hover:bg-[#e6e6e6] transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 group"
    >
      <FcGoogle className="text-[25px]" />

      <span className="group-hover:translate-x-1.5 duration-500">
        Sign in with Google
      </span>
    </button>
  );
};

export default SocialLogin;
