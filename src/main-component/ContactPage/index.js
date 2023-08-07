import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Contact from "../../components/Contact";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const ContactPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            <span>Contact Us</span>
          </div>
        }
      />
      <Contact />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
