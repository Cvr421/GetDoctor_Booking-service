import React from "react";
import Contact from "../component/Contact";
import AboutUs from "../component/AboutUs";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import HomeCircles from "../component/HomeCircles";

const Home =() => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;