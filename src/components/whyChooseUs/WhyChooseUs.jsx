import React from "react";
import "./whyChooseUs.css";
import whyChooseUsImg from "../../assets/why_choose_us.png";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us container">
      <div className="why-choose-us-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="why-choose-us-image">
              <img src={whyChooseUsImg} alt="why-choose-us-img" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="why-choose-us-text">
              <h1 className="section-title">Why Choose Us ?</h1>
              <p className="section-subtitle">
                We are the fastest and the most favourite food delivery service
                all across india. Also, we are serving foods without
                compromising on quality for more than 7 years in this market.
              </p>
              <div className="why-choose-us-text-row">
                <i className="fas fa-star-half-alt"></i>
                <h6>88% Positive reviews</h6>
              </div>
              <div className="why-choose-us-text-row">
                <i className="fas fa-trophy"></i>
                <h6>Quality foods with discounts</h6>
              </div>
              <div className="why-choose-us-text-row">
                <i className="fas fa-shipping-fast"></i>
                <h6>2X Faster than other delivery services</h6>
              </div>
              <div className="why-choose-us-text-row">
                <i className="fas fa-check-double"></i>
                <h6>All sellers and dishes are manually verified</h6>
              </div>
              <button className="my-btn">Order Yours Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
