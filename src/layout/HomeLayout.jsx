import FeaturesItem from "../components/Feature/FeaturesItem";
import Hero from "../components/Hero";
import Instagrams from "../components/Instagrams/Instagrams";
import Products from "../components/Products/Products";
import Contact from "../pages/Contact";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <FeaturesItem />
      <Products />
      <Instagrams />
      <Contact />
    </div>
  );
};

export default HomeLayout;
