import AboutUs from "../components/AboutUs/AboutUs";
import FeaturesItem from "../components/Feature/FeaturesItem";
import Hero from "../components/Hero";
import Instagrams from "../components/Instagrams/Instagrams";
import Products from "../components/Products/Products";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <FeaturesItem />
      <Products />
      <AboutUs />
      <Instagrams />
    </div>
  );
};

export default HomeLayout;
