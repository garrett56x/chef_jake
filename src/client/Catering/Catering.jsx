import React from "react";
import Hero from "../Hero/Hero.jsx";
import { Typography } from "@material-ui/core";
import BackgroundImage from "../../assets/header_image.jpeg";
import "./Catering.css";

export default function Catering() {
  return (
    <div className="catering">
      <Hero
        backgroundImage={BackgroundImage}
        phrase="Catering"
      />
      <div className="content">
        <Typography variant="h4">Services provided:</Typography>
        <ul>
          <li>Weddings of all sizes, from an elopement to 300 guests ( price range from $30-$55/ guest)</li>
          <li>Dinner or lunch gatherings for groups, offering drop-off or full service (price range for drop off $15-$25/ person, for full service $25-$50/ person)</li>
          <li>Private dinners 2-4 people (contact for pricing)</li>
        </ul>
        <Typography variant="body1" style={{ fontStyle: "italic" }}>*Alcohol not included in pricing</Typography>
        <Typography variant="body1" style={{ fontStyle: "italic" }}>*Additional fees may be applicable, and disclosed upon first consultation</Typography>
        <br />
        <Typography variant="body1">
          We are based in Mancos, CO and provide our services within a 100mi radius, and beyond in certain circumstances. Feel free to reach out with location questions.
        </Typography>
        <br />
        <Typography variant="body1">
          Our meals are always made with 100% organic ingredients, and sourced locally when possible. We are passionate about providing the highest quality meals you can find, no questions. From full mineral salts to 100% grass-fed meats, and everything in between. We pay attention to every detail, and bring the most delicious food to your table.
        </Typography>
        <br />
        <Typography variant="body1">
          We enjoy providing a fully customized menu for each client, no restrictions, allergies or desires left out. If you have enjoyed our food before, the next menu you taste will likely be a surprise. We look forward to nourishing you, and those you love the most.
        </Typography>
        <br />
        <Typography variant="h4">Sample Menu:</Typography>
        <div className="meals">
          <div className="meal">
            <Typography variant="body1" style={{ fontWeight: "bold" }}>Appetizers:</Typography>
            <ul>
              <li>Bacon wrapped shrimp with apricot-tamarind sauce</li>
              <li>Charcuterie board with assortment of cured meats, cheese, olives, nuts, and breads</li>
              <li>Empanadas stuffed with beef, olives, and raisins</li>
              <li>Hummus Trio (beet, garbanzo, cashew) served with sliced organic vegetables</li>
              <li>Flat bread with romesco sauce</li>
            </ul>
          </div>
          <div className="meal">
            <Typography variant="body1" style={{ fontWeight: "bold" }}>Sides:</Typography>
            <ul>
              <li>Roasted root veggies</li>
              <li>Cuban rice and beans</li>
              <li>Meditaranian tabouli</li>
              <li>Massaged Kale salad with roasted carrots and bacon</li>
              <li>Roasted delicata squash and purple cabbage</li>
            </ul>
          </div>
          <div className="meal">
            <Typography variant="body1" style={{ fontWeight: "bold" }}>Entres:</Typography>
            <ul>
              <li>Braised short ribs slow cooked with red wine and garlic served with arugula and Yukon potatoes</li>
              <li>Local lamb chops served with fried Jerusalem artichokes</li>
              <li>Jumbo prawns served with roasted broccoli and cashew alfredo</li>
              <li>Indonesian Tempe served with rice, kale and coconut salad topped with peanut sambal</li>
            </ul>
          </div>
        </div>      
      </div>
    </div>
  );
}
