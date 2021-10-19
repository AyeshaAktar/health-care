import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CustomerReview from "../CustomerReview/CustomerReview";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Services></Services>
      <CustomerReview></CustomerReview>
      <Contact></Contact>
    </div>
  );
};

export default Home;
