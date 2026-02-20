import image1 from "./../../assets/images/features1.png";
import image2 from "../../assets/images/features2.png";
import image3 from "../../assets/images/features3.png";
import image4 from "../../assets/images/features4.png";
import Feature from "./Feature";

const features = [
  {
    id: 1,
    title: "Awesome Aroma",
    description:
      "You will definitely be a fan of the design & aroma of your coffee",
    icon: image1,
  },
  {
    id: 2,
    title: "High Quality",
    description: "We served the coffee to you maintaining the best quality",
    icon: image2,
  },
  {
    id: 3,
    title: "Pure Grades",
    description:
      "The coffee is made of the green coffee beans which you will love",
    icon: image3,
  },
  {
    id: 4,
    title: "Proper Roasting",
    description:
      "Your coffee is brewed by first roasting the green coffee beans",
    icon: image4,
  },
];

const FeaturesItem = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-45 2xl:px-50 bg-[#ECEAE3] py-6 md:py-8 lg:py-10 2xl:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7 2xl:gap-8">
        {features.map((item) => (
          <Feature key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesItem;
