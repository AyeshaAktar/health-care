import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, img, description } = props.service;
  return (
    <div class="col-md-6">
      <div class="card m-3">
        <img src={img} class="card-img-top service-img" alt="..." />
        <div class="card-body text-start">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <button type="button" class="btn btn-warning">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
