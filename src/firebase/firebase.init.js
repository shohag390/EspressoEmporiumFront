import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKoUoU99BQ0Nx7cm5lSJGi_Aa1N-IvcgA",
  authDomain: "coffee-store-app-10b08.firebaseapp.com",
  projectId: "coffee-store-app-10b08",
  storageBucket: "coffee-store-app-10b08.firebasestorage.app",
  messagingSenderId: "506990978877",
  appId: "1:506990978877:web:15b2e28329d838755f0754",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
