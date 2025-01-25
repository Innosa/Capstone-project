import PropTypes from "prop-types";
const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px"
  };
  return (
    <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
  );
};
BannerPic.propTypes = {
  img: PropTypes.string.isRequired // `img` must be a string and is required
};

export default BannerPic;
