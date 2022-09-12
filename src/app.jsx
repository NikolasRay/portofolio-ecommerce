import React from "react";
import Header from "./Components/Header/header";
import PostHeader from "./Components/PostHeader/postHeader";
import Features from "./Components/Features/features";
import FeatProducts from "./Components/Products/featproducts";
import Repair from "./Components/Repair/repair";
import CTA from "./Components/CTA/cta";
import Newsletter from "./Components/Newsletter/newsletter";
import Footer from "./Components/Footer/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import postHeader from "./Components/PostHeader/postHeader";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          exact
          path="/portofolio-ecommerce/"
          element={
            <>
              <PostHeader />
              <Features />
              <Repair />
              <CTA />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/portofolio-ecommerce/shop"
          element={
            <>
              <FeatProducts />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/portofolio-ecommerce/about"
          element={
            <>
              <CTA />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/portofolio-ecommerce/contact"
          element={
            <>
              <Footer />
            </>
          }
        />
      </Routes>
      {/* <PostHeader />
      <Features />
      <FeatProducts />
      <Repair />
      <CTA />
      <Newsletter />
      <Footer /> */}
    </Router>
  );
};

export default App;
