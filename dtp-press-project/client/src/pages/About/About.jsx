import React from "react";
import "./About.css";
import aboutimg from "../../asset/logo/About.jpg"

export default function About() {
  return (
    <section className="aboutSection">

      <div className="aboutContainer">

        {/* Left Side */}
        <div className="aboutLeft">

          <span className="aboutTag">
            About Us
          </span>

          <h1 className="aboutTitle">
            Maa Santosi Computer
          </h1>
          <h2 className="propiter">
            Prof-Rabindra Mohapatra
          </h2>

          <p className="aboutDescription">
            We provide professional printing, designing, publishing,
            and digital services with modern technology and creative ideas.
            Our goal is to deliver quality work with customer satisfaction.
          </p>

          <div className="aboutFeatures">

            <div className="aboutFeatureCard">
              <h3>30+</h3>
              <p>Services</p>
            </div>

            <div className="aboutFeatureCard">
              <h3>1000+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="aboutFeatureCard">
              <h3>12/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="aboutRight">

          <div className="aboutImageCard">

            <img
              src={aboutimg}
              alt="About"
              className="aboutImage"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
