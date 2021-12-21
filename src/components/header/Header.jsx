import React from "react";
import "./header.css";
import headerImg from "../../assets/header_img.png";

const Header = () => {
  return (
    <div className="header container">
      <div className="row">
        <div className="col-md-6">
          <div className="header-text">
            <h5>Most trusted aggregator in Food category</h5>
            <h1>Get your desired food delivered at your doorstep</h1>
            <p>
              Enter your location to get nearest restaurants for delivery and
              dine in.
            </p>

            <form className="location-form">
              <i className="fas fa-map-marker-alt"></i>
              <input type="text" placeholder="Rajarhat, Kolkata" />
              <button>Find Foods</button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="header-image">
            <img src={headerImg} alt="header-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
