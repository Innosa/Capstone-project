// import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            IN TRAVEL, we craft customized travel itineraries tailored to
            specific interests, budgets, and preferences of clients. Whether
            someone is planning a luxury vacation, a budget-friendly backpacking
            trip, or a corporate retreat, we ensure every aspect of the journey
            is thoughtfully designed with you mind.
          </p>
          <br />
          <p></p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
