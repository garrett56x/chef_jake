import React from "react";
import { Typography } from "@material-ui/core";
import BackgroundImage from "../../assets/header_image.jpeg";
import Hero from "../Hero/Hero.jsx";
import useStyles from "./WhyCleanse.js";

export default function WhyCleanse() {
  const classes = useStyles();

  return (
    <div>
      <Hero
      	backgroundImage={BackgroundImage}
      	phrase="Why Cleanse?"
      />

      <div className={classes.content}>
        <Typography variant="body1">
        Most of us have symptoms of inflammation that we experience everyday. On the low underlying side we may experience brain fog, head aces, nausea, low energy, poor food cravings, difficulty sleeping, fatigue, and many others that we are all accustomed to and do not notice until the inflammation is removed. When inflammation is high we experience all of the smaller symptoms plus very low vitality, chronic muscle or arthritic pains, chronic fatigue, low sex drive, irregular sleeping patterns, skin reactions, and others. These are the most common side side effects a person will encounter once dealing with inflammation. Anti-inflamatory meal plans are the best approach into removing the symptoms of discomfort your body is experiencing as well as more serious decease. The re-intruduction of different food groups after a cleanse is also a very important process were you can learn to listen and nourish the body in order to maintain a healthy gut system.
        </Typography>
        <br />
        <Typography variant="body1">
        My Passion for preparing anti-inflamatory meals comes from first hand experience, and my constant interactions with different individuals who have changed their lives by changing their relationship with food.
        </Typography>
      </div>
    </div>
  );
}
