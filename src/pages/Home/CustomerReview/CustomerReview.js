import React from "react";
import "./CustomerReview.css";
import customer1 from "../../../image/customer/1.jpg";
import customer2 from "../../../image/customer/2.jpg";
import customer3 from "../../../image/customer/3.jpg";

const CustomerReview = () => {
  return (
    <div>
      <div className="m-5">
        <h2>What Our Customers Are Talking About Us</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-5 p-3 bg-white">
          <div className="col">
            <div className=" border-0">
              <div className="d-flex justify-content-center">
                <img
                  src={customer1}
                  className="card-img-top rounded-circle customer-image"
                  alt="..."
                />
              </div>

              <h5 className="">Terry Barton</h5>
              <p>
                I was very impresed by the Optic Eye-Care service.There are many
                variations of passages of but the majority have in some form, by
                injected humou or words which don't look even slightly
                believable of but the majority have suffered.
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" border-0">
              <div className="d-flex justify-content-center">
                <img
                  src={customer2}
                  className="card-img-top rounded-circle customer-image"
                  alt="..."
                />
              </div>

              <h5 className="">David Coper</h5>
              <p>
                I was very impresed by the Optic Eye-Care service.There are many
                variations of passages of but the majority have in some form, by
                injected humou or words which don't look even slightly
                believable of but the majority have suffered.
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" border-0">
              <div className="d-flex justify-content-center">
                <img
                  src={customer3}
                  className="card-img-top rounded-circle customer-image"
                  alt="..."
                />
              </div>

              <h5 className="">Doe Albert</h5>
              <p>
                I was very impresed by the Optic Eye-Care service.There are many
                variations of passages of but the majority have in some form, by
                injected humou or words which don't look even slightly
                believable of but the majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
