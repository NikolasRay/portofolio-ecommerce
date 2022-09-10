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
          path="/"
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
          path="/shop"
          element={
            <>
              <FeatProducts />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <>
              <CTA />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/contact"
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
