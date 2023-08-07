import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import AboutPage from "../../components/AboutPage";
import Reviews from "../../components/Reviews";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const AboutPages = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle PageTitle={<span>About Us</span>} />
      <AboutPage />
      <div className="section_t_100">
        <Reviews />
      </div>
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default AboutPages;
