import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Gallery.css";
const Gallery = () => {
  return (
    <Container className="my-5">
      <div className="row">
        <h4 className="colored-text">Our Facilities</h4>
        <div className="col-md-6">
          <div className="row gx-0">
            <div className="col-6">
              <div className="gallery-image-div">
                <img
                  className="img-1"
                  src="https://i.ibb.co/RS4W59w/Clinic-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="gallery-image-div">
                <img
                  className="img-2"
                  src="https://i.ibb.co/9bLb4Fm/Clinic-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="gallery-image-div">
                <img
                  className="img-3"
                  src="https://i.ibb.co/6wV0Ycc/Clinic-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="gallery-image-div">
                <img
                  className="img-4"
                  src="https://i.ibb.co/GVH5jFk/Highly-qualified-young-black-dentist-posing-at-clinic-over-modern-cabinet-empty-space.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <p>
              Generic Dental CARE is the best & leading dental treatment
              provider in Dhaka, Bangladesh, with a specialized, Dental implant,
              Endodontic, Pediatric operative, Prosthodontic, oral surgery, and
              Orthodontic Center.
            </p>

            <Link to="/appointment">
              <button className="generic-customized-btn">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;

{
  /* <div className="gallery-image-div">
                <img src="https://i.ibb.co/8zrqbNH/Clinic-3.jpg" alt="" />
              </div>

<div className="gallery-image-div">
<img
  src="https://i.ibb.co/GVH5jFk/Highly-qualified-young-black-dentist-posing-at-clinic-over-modern-cabinet-empty-space.jpg"
  alt=""
/>
</div> */
}
