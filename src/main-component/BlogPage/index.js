import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Blogs from "../../components/Blogs";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const BlogPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            News <span>Feeds</span>
          </div>
        }
      />
      <Blogs />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default BlogPage;
