import React from "react";
import { Typography } from '@material-ui/core';
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/header_fish.jpg";

import "./Services.css";

export default function Services() {
  return (
    <div className="services">
      <Hero
        backgroundImage={BackgroundImage}
        backgroundPosition="top"
        phrase="Services"
      />
      <div className="content">
        <Typography variant="h4">Custom home delivered meals:</Typography>
        <Typography variant="body1">Working with each individual client's dietary needs and restrictions, I will create weekly custom meals packaged and ready to reheat and eat.</Typography>
        <Typography variant="body1">Normal rate: $350/week plus food costs (includes meal planning, shopping, meal preparation, and delivery).</Typography>
        <br />
        <Typography variant="h4">Cooking classes:</Typography>
        <Typography variant="body1">Working either one on one or in a small group. One class will give you solid base knowledge of knife skills and working on your weakness or most desired kitchen skill. With choosing to do multiple classes or a series we will work together to make you a semi-pro chef!</Typography>
        <Typography variant="body1">Normal rate: $125/hr with an average class between 4-5 hours. Pricing may vary depending on particular parameters.</Typography>
        <br />
        <Typography variant="h4">Grocery store education and pantry makeover:</Typography>
        <Typography variant="body1">Are you interested in shopping like a pro? How to choose each vegetable, reading labels, choosing between brand products, making the most of your grocery store time and money spent. First, going through your fridge and pantry to see where you currently are (no judgement on findings at all!) Second, shopping together to stock your home with the highest quality ingredients and foods available.</Typography>
        <Typography variant="body1">Contact for pricing</Typography>
      </div>
    </div>
  );
}
