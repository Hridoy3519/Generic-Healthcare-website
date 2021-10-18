import React from "react";
import { Container } from "react-bootstrap";
import "./AboutDescription.css";
const AboutDescription = () => {
  return (
    <Container>
      <div className="row p-5 about-description">
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
