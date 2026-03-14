import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Google Provider
  const googleProvider = new GoogleAuthProvider();

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login With Google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login Usert
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  Logout
  const logOut = () => {
    return signOut(auth);
  };

  // Track Logged User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    createUser,
    signInUser,
    user,
    setUser,
    signInWithGoogle,
    logOut,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
