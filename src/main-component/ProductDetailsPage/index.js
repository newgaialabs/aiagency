import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import ProductDetails from "../../components/ProductDetails";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const ProductDetailsPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            Product <span>Details</span>
          </div>
        }
      />
      <ProductDetails />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default ProductDetailsPage;
