import image1 from "../../assets/images/Instagram1.png";
import image2 from "../../assets/images/Instagram2.png";
import image3 from "../../assets/images/Instagram3.png";
import image4 from "../../assets/images/Instagram4.png";
import image5 from "../../assets/images/Instagram5.png";
import image6 from "../../assets/images/Instagram6.png";
import SeectionHeader from "../../shared/SeectionHeader";
import Instagram from "./Instagram";

const images = [
  {
    _id: 1,
    photo: image1,
    name: "Americano Delight",
  },
  {
    _id: 2,
    photo: image2,
    name: "Espresso Emporium",
  },
  {
    _id: 3,
    photo: image3,
    name: "Flat White",
  },
  {
    _id: 4,
    photo: image4,
    name: "Irish Coffee",
  },
  {
    _id: 5,
    photo: image5,
    name: "Flat White",
  },
  {
    _id: 6,
    photo: image6,
    name: "Espresso",
  },
];

const Instagrams = () => {
  return (
    <div className="px-6 md:px-12 lg:px-35 2xl:px-50 py-6 md:py-8 lg:py-10 2xl:py-14">
      <SeectionHeader
        title="---Follow Us Now---"
        subtitle="Follow on Instagram"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
        {images?.map((image) => (
          <Instagram key={image?._id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Instagrams;
