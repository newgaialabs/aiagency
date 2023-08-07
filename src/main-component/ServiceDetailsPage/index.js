import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import ServiceDetails from "../../components/ServiceDetails";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const ServiceDetailsPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            Single <span>Service</span>
          </div>
        }
      />
      <ServiceDetails />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default ServiceDetailsPage;
