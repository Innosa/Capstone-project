// import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/place1.jpg";
import Img2 from "../../assets/places/place2.jpg";
import Img3 from "../../assets/places/place3.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Civic center",
    location: " Lagos, Nigeria",
    description: "The center for human civilization and cultural rights",
    price: 6700,
    type: "Cultural inquiries"
  },
  {
    img: Img2,
    title: "Luxy center",
    location: "Lagos",
    description:
      "This building is found at the Lagos island from the sea view.",
    price: 6700,
    type: "icon of blessing"
  },
  {
    img: Img3,
    title: "Waterside",
    location: "Nigeria",
    description: "The watrside is a pleasant relaxation view.",
    price: 6200,
    type: "Fishing River."
  },
  {
    img: Img4,
    title: "Builtful Place",
    location: "Nigeria",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax"
  },
  {
    img: Img5,
    title: "Great House",
    location: "Lagos states",
    description: "The best place in Nigeria.",
    price: 6700,
    type: "Commercial arena."
  },
  {
    img: Img6,
    title: "Coal city",
    location: "Enugu",
    description: "The city of caol minning in Nigeria.",
    price: 6200,
    type: "Natural resources"
  }
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
Places.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired // Function to handle order popup
};
export default Places;
