import React from "react";
import "./About.css";
import doctor1 from "../../image/doctors/1.jpg";
import doctor2 from "../../image/doctors/2.jpg";
import doctor3 from "../../image/doctors/3.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="p-5">
          <h1>About Us</h1>
          <h3 className="mt-5">
            Best Optometrist in town are ready to help you!
          </h3>
          <p className="mt-5 text-secondary">
            At Optic Eye-Care Hospital we have best optometrist in town who are
            ready to give you great consultation and advices to get rid of
            glasses or get new lense of glasses suggestion. Dont delay contact
            us today so we cna provide you best features.
          </p>
          <div className="d-flex justify-content-center">
            <h6>We Provigung You: </h6>
            <div>
              <p> Qualified Doctors</p>
              <p> Surgery Specilist</p>
              <p> 24/7 services</p>
            </div>
          </div>
          <h6 className="mb-5">We Are Caring For Your Eye Health</h6>
        </div>

        <div className="m-5">
          <h2>Meet Our Specilist</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
            <div className="col">
              <div className=" border-0">
                <div className="d-flex justify-content-center">
                  <img
                    src={doctor1}
                    className="card-img-top doctor-image"
                    alt="..."
                  />
                </div>

                <h5 className="mt-3">Dr Jhon Doe</h5>
                <p>Lasik Specilist</p>
              </div>
            </div>
            <div className="col">
              <div className=" border-0">
                <div className="d-flex justify-content-center">
                  <img
                    src={doctor2}
                    className="card-img-top doctor-image"
                    alt="..."
                  />
                </div>

                <h5 className="mt-3">Dr Seema Doe</h5>
                <p>Contact Lens Specilist</p>
              </div>
            </div>
            <div className="col">
              <div className=" border-0">
                <div className="d-flex justify-content-center">
                  <img
                    src={doctor3}
                    className="card-img-top doctor-image"
                    alt="..."
                  />
                </div>

                <h5 className="mt-3">Dr Jolian Acenj</h5>
                <p>Surgery Specilist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
