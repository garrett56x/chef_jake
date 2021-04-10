import React from "react";
import { Typography } from '@material-ui/core';
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/header_fish.jpg";

import "./ChefMenu.css";

export default function ChefMenu() {
  return (
    <div className="menu">
      <Hero
        backgroundImage={BackgroundImage}
        backgroundPosition="top"
        phrase="Sample Menu"
      />
      <div className="content">
        <Typography variant="body1">
          There will be a total of three deliveries during the 21 day cleanse. Each including 21 meals and 14 snacks that will be prepared in a gluten free kitchen, cooled properly, and packaged into mason jars for delivery.
        </Typography>
        <br />
        <Typography variant="h4">Meal Examples:</Typography>
        <div className="meals">
          <div className="meal">
            <Typography variant="body1" style={{ fontWeight: "bold" }}>Breakfast:</Typography>
            <Typography variant="body1">Parsnip hash with turkey breakfast sausage topped with avocado mayo.</Typography>
          </div>
          <div className="meal">
            <Typography variant="body1" style={{ fontWeight: "bold" }}>Lunch:</Typography>
            <Typography variant="body1">Butternut squash patties with roasted garlic and sauted kale topped with lamb.</Typography>
          </div>
          <div className="meal">
            <Typography variant="body1" style={{ fontWeight: "bold" }}>Dinner:</Typography>
            <Typography variant="body1">Slow braised chicken leg with cauliflower mash.</Typography>
          </div>
          <div className="meal">
            <Typography variant="body1" style={{ fontWeight: "bold" }}>Snacks:</Typography>
            <Typography variant="body1">Kale chips, Bone broth, homemade beef jerky.</Typography>
          </div>
        </div>
        <br />
        <Typography variant="h4">Included in the Service:</Typography>
        <ul>
          <li>Specialized meal plan</li>
          <li>Shopping</li>
          <li>Cooking/cooling/packaging</li>
          <li>Home delivery</li>
        </ul>
        <Typography variant="body1" style={{ fontStyle: "italic" }}>*Meals prepared with anti-inflammatory ingredients to help your body go through its own healing process.</Typography>
      </div>
    </div>
  );
}
