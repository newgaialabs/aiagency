import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import TeamPage from "../TeamPage";
import PartnerPage from "../PartnerPage";
import PrivacyPage from "../PrivacyPage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import ServicePage from "../ServicePage";
import ServiceDetailsPage from "../ServiceDetailsPage";
import PricingPage from "../PricingPage";
import ProductPage from "../ProductPage";
import ProductDetailsPage from "../ProductDetailsPage";
import CartPage from "../CartPage";
import CheckoutPage from "../CheckoutPage";
import BlogPage from "../BlogPage";
import BlogDetailsPage from "../BlogDetailsPage";
import ContactPage from "../ContactPage";

const AllRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/partners" element={<PartnerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/single-service" element={<ServiceDetailsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/single-product" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/single-blog" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
