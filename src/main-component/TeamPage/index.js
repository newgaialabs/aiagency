import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Team from "../../components/Team";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Logo from "../../img/logo-white.png";

const TeamPage = () => {
  return (
    <>
      <Header Logo={Logo} />
      <PageTitle
        PageTitle={
          <div>
            Team <span>Members</span>
          </div>
        }
      />
      <Team />
      <div className="innser_subscribe ">
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default TeamPage;
