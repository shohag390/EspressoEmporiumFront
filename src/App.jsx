import "./App.css";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
