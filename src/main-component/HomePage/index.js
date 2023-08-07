import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Companies from "../../components/Companies";
import About from "../../components/About";
import Services from "../../components/Services";
import Tour from "../../components/Tour";
import Features from "../../components/Features";
import Cta from "../../components/Cta";
import Pricing from "../../components/Pricing";
import Reviews from "../../components/Reviews";
import LatestBlog from "../../components/LatestBlog";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo.png";

const HomePage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <Hero />
      <Companies />
      <About />
      <Services />
      <Tour />
      <Features />
      {/* <Cta /> */}
      {/* <Pricing /> */}
      {/* <Reviews /> */}
      {/* <LatestBlog /> */}
      <Subscribe />
      <Footer />
    </>
  );
};
export default HomePage;
