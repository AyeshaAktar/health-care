import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import servicesData from "../../data/servicesData.json";
const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    setServiceData(servicesData);
  }, []);

  const singleData = serviceData.find(
    (service) => parseInt(service.id) === parseInt(id)
  );
  console.log(singleData);

  return (
    <div className="container">
      <h1 className="my-5">Details</h1>
      <img className="img-fluid" src={singleData?.img} alt="" />
      <div className="py-3">
        <h2>{singleData?.name}</h2>
        <p>{singleData?.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
