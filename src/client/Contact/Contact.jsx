import React from "react";
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/header_fish.jpg";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <Hero
      	backgroundImage={BackgroundImage}
      	backgroundPosition="top"
      	phrase="Contact Information"
      />
      <div className="content">
		<h4><span style={{ fontWeight: "bold" }}>Phone: </span><a href="tel:360-513-8579" style={{ color: "#50a526" }}>(360) 513-8579</a></h4>
		<h4><span style={{ fontWeight: "bold" }}>Email: </span><a href="mailto:chefjbthompson@gmail.com " style={{ color: "#50a526" }}>chefjbthompson@gmail.com </a></h4>
	  </div>
    </div>
  );
}
