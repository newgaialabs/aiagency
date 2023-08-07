import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Products from "../../components/Products";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const ProductPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            <span>Products</span>
          </div>
        }
      />
      <Products />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default ProductPage;
