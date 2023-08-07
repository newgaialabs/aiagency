import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Partners from "../../components/Partners";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const PartnerPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle PageTitle={<span>Partners</span>} />
      <Partners />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default PartnerPage;
