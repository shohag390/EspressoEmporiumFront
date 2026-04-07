import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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

  const updateUserProfile = async (name, photoURL) => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    await updateProfile(currentUser, {
      displayName: name,
      photoURL,
    });

    // update local state so UI refreshes
    setUser({ ...currentUser });
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
    updateUserProfile,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
