import React from "react";
import "./homepage.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";

const Homepage = () => {
  return (
    <div>
      <div className="top-section">
        <Navbar />
        <Header />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
