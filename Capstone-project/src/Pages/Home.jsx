import React from "react";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../../Capstone-project/src/components/Blogs/BlogsComp.jsx";
import Hero from "../../Capstone-project/src/components/Hero/Hero.jsx";
import Places from "../../Capstone-project/src/components/Places/Places.jsx";
import Testimonial from "../components/Testimonial/Testimonial";
// import Banner from "../components/Banner/Banner";
import BannerPic from "../../Capstone-project/src/components/BannerPic/BannerPic.jsx";
import BannerImg from "../assets/cover-man.jpg";
import Banner2 from "../assets/travel-cover.jpg";
import OrderPopup from "../../Capstone-project/src/components/OrderPopup/OrderPopup.jsx";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="raltive [h-700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px]
      w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <BannerPic img={BannerImg} />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
