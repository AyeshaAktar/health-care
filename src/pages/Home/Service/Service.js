import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, img, description } = props.service;
  return (
    <div className="col-md-6">
      <div className="card m-3 course-card">
        <img src={img} className="card-img-top service-img" alt="..." />
        <div className="card-body text-start">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 150)}...</p>
          <Link to={`/serviceDetail/${id}`}>
            <button type="button" className="btn btn-warning">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
