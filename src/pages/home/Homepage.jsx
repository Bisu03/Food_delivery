import React from "react";
import "./homepage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Brands from "../../components/Brands/Brands";

const Homepage = () => {
  return (
    <div>
      <div className="top-section">
        <Navbar />
        <Header />
        <Brands />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
