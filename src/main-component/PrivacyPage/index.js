import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Privacy from "../../components/Privacy";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const PrivacyPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            Privacy <span>Policy</span>
          </div>
        }
      />
      <Privacy />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default PrivacyPage;
