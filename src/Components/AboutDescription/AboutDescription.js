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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
