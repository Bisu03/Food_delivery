import React from "react";
import "./homepage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Brands from "../../components/Brands/Brands";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import FavouriteMeals from "../../components/favouriteMeals/FavouriteMeals";
import ProductList from "../../components/productList/ProductList";

const Homepage = () => {
  return (
    <div>
      <div className="top-section">
        <Navbar />
        <Header />
        <Brands />
      </div>
      <FavouriteMeals />
      <ProductList />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Homepage;
