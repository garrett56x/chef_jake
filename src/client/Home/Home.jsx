import React from "react";
import { Typography } from '@material-ui/core';
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/header_image.jpeg";
import useStyles from "./HomeStyles.js";

export default function Home() {
  // @ts-ignore
  const images = require.context('../../assets', true);
  const jake = images('./jake.jpeg');
  const classes = useStyles();

  return (
    <div className="home">
      <Hero backgroundImage={BackgroundImage} phrase="Chef Jacob B. Thompson" subPhrase="Preparing Food for any intolerance, allergies, dietary restrictions or illness recovery" phraseFont="'Kaushan Script', cursive" />
      <div>
        <div className={classes.sectionWrapper}>
          <div className={classes.howWeMet}>
            <img className={classes.hwmPhoto} alt="btp" src={jake} />
            <div className={classes.hwmContent}>
              <Typography className={classes.title} variant="h4">About Chef Thompson</Typography>
              <Typography variant="body1">
              "Food heals." - At age thirteen I learned this powerful truth when my sister was diagnosed as a type one diabetic. I began to explore her new diet and slowly pushed my mom out of the kitchen in order to teach myself the palliative qualities of food and bring nourishment into my family. My passion for therapeutic and mindful food preparation grew and my path lead me to Bauman College of Holistic Nutrition and Culinary Arts, where I graduated as a certified natural chef. My experience has developed with time and a few jobs opportunities preparing farm-to-table meals at Frog Belly Farm and working in multiple farm-to–table style restaurants in Boulder, Colorado.
              </Typography>
              <br />
              <Typography variant="body1">
              Through this time of learning and growing in the culinary world I've developed a passion for catering to an individual’s unique food intolerances and requirements. I believe in creating possibilities out of limitations. When a client learns about his or her newly discovered intolerances or allergies, it is my pleasure to help the client find optimism and happiness by planning and providing mindful, nourishing and delicious meals. My services range from food preparation and delivery, to cooking classes, and grocery store education.
              </Typography>
              <br />
              <Typography variant="body1">Working together, I look forward to bring joy into your food.</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
