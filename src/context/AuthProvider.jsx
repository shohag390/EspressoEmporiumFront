import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { createUser };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
