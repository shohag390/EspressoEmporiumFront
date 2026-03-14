import "./App.css";
import Contact from "./components/Contact";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { Outlet } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from "./shared/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
