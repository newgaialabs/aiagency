import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Checkout from "../../components/Checkout";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const CheckoutPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            <span>Checkout</span>
          </div>
        }
      />
      <Checkout />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default CheckoutPage;
