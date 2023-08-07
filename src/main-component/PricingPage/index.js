import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Pricing from "../../components/Pricing";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const PricingPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            Our <span>Pricing</span>
          </div>
        }
      />
      <Pricing />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default PricingPage;
