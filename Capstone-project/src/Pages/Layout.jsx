import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Capstone-project/src/components/Navbar/Navbar";
import Footer from "../../Capstone-project/src/components/Footer/Footer";
import OrderPopup from "../../Capstone-project/src/components/OrderPopup/OrderPopup";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
