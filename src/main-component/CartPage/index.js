import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Cart from "../../components/Cart";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const CartPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            Shopping <span>Cart</span>
          </div>
        }
      />
      <Cart />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default CartPage;
