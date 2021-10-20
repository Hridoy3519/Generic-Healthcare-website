import React from "react";
import { Container } from "react-bootstrap";
import "./AboutDescription.css";
const AboutDescription = () => {
  return (
    <Container className="mt-4">
      <div className="row about-description">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <h1>Our Clients are Our Priority, We Offer</h1>
            <h1>
              Quality Dental Services{" "}
              <span className="colored-text">of Specialists</span>{" "}
            </h1>
            <p>
              Generic Dental CARE is the best & leading dental treatment
              provider in Dhaka, Bangladesh, with a specialized, Dental implant,
              Endodontic, Pediatric operative, Prosthodontic, oral surgery, and
              Orthodontic Center.
            </p>

            <div className="row">
              <div className="col-md-6">
                <div><h5><i className="fas fa-check-circle"></i> Complete Crown</h5></div>
                <div><h5><i className="fas fa-check-circle"></i> Dental Implants</h5></div>
                <div><h5><i className="fas fa-check-circle"></i> Dental X-ray</h5></div>
              </div>
              <div className="col-md-6">
                <div><h5><i className="fas fa-check-circle"></i> Cosmetic Filling</h5></div>
                <div><h5><i className="fas fa-check-circle"></i> Root Canal</h5></div>
                <div><h5><i className="fas fa-check-circle"></i> Teeth Whitening</h5></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            className="img-fluid lady-pic"
            src="https://i.ibb.co/xDkYfRp/about-1.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutDescription;
