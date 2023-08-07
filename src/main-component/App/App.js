import React, { Fragment, useEffect } from "react";
import AllRoute from "../router";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  });
  return (
    <Fragment>
      <AllRoute />
    </Fragment>
  );
};

export default App;
