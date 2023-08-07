import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import ServicePage from "../../components/ServicePage";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const ServicePages = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle PageTitle={<span>Services</span>} />
      <ServicePage />

      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default ServicePages;
