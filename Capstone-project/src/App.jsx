import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../src/Pages/Layout";
import Home from "../../src/Pages/Home";
import About from "./Pages/About";
import Blogs from "../../src/Pages/Blogs";
import BlogsDetails from "../../src/Pages/BlogsDetails";
import PlacesRoute from "../../src/Pages/PlacesRoute";
import NoPage from "../../src/Pages/NoPage";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogsDetails />} />
            <Route path="/places" element={<PlacesRoute />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
