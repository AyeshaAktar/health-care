import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import servicesdata from "../../../data/servicesData.json";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesdata);
  }, []);
  return (
    <div className="container" id="service">
      <h2 className="mt-5">Our Services</h2>
      <div className="row g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
