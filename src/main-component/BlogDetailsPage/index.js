import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import BlogDetails from "../../components/BlogDetails";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const BlogDetailsPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            News <span>Details</span>
          </div>
        }
      />
      <BlogDetails />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default BlogDetailsPage;
