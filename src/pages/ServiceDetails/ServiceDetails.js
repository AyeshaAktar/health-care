import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
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
      <h1>Service Details</h1>
      <img src={singleData?.img} alt="" />
      <h2>name:{singleData?.name}</h2>
      <p>{singleData?.description}</p>
    </div>
  );
};

export default ServiceDetails;
