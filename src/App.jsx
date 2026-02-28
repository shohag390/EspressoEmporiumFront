import "./App.css";
import Contact from "./components/Contact";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
