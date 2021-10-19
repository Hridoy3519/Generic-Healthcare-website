import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner text-center d-flex justify-content-center align-items-center">
      <div className="banner-description">
        <h1>Personalized</h1>
        <h1>
          Dental <span className="colored-text">Care</span>
        </h1>
        <br />
        <p>
          Generic Dental CARE is the best & leading dental treatment provider in
          Dhaka, Bangladesh, with a specialized, Dental implant, Endodontic,
          Pediatric operative, Prosthodontic, oral surgery, and Orthodontic
          Center.
        </p>

        <Link to="/appointment">
          <button className="generic-customized-btn">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
