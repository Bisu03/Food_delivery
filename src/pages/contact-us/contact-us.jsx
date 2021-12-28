import React from "react";
import "./contact-us.css";
import Navbar from "../../components/navbar/Navbar";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";

const Contactus = () => {
    return (
        <div>
            <div className="top-section">
                <Navbar />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Contactus;
