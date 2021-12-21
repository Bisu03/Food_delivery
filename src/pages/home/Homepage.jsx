import React from "react";
import "./homepage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Brands from "../../components/Brands/Brands";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

const Homepage = () => {
  return (
    <div>
      <div className="top-section">
        <Navbar />
        <Header />
        <Brands />
      </div>
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Homepage;
