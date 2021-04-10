import React from "react";
import Hero from "../Hero/Hero.jsx";
import { Typography } from "@material-ui/core";
import BackgroundImage from "../../assets/header_image.jpeg";
import "./SpecialtyCleanse.css";

export default function SpecialtyCleanse() {
  return (
    <div className="specialty-cleanse">
      <Hero
        backgroundImage={BackgroundImage}
        phrase="21 Day Anit-inflammatory Cleanse"
      />
      <div className="content">
        <Typography variant="body1">
        Most of us have symptoms of inflammation, on the low underlying side we may experience brain fog, head aces, nausea, low energy, poor food cravings and many others that we are all accustomed to and don’t notice until the inflammation is removed. When inflammation is high we experience all of the underlying symptoms plus very low vitality, chronic muscle or arthritic pains, chronic fatigue, low sex drive, irregular sleeping patterns . These are just some of the most common symptoms, if you can identify with some or all, this 21 day anti inflammatory cleanse is a wonderful place to start “healing” your gut and giving your body the nourishment it needs.
        </Typography>
        <br />
        <Typography variant="body1">
        During the 3 weeks, all possible inflammatory foods will be removed from your diet including: grains, dairy, nuts/ seeds, legumes, high glycemic fruits, nightshades (potatoes, tomatoes, chilis), eggs, sugar, alcohol, caffeine. The only cooking oils used are short chained monounsaturated fats such as coconut, olive, and avocado oil. The produce used during the 3 weeks is 100% organic, assuring there are no pesticides or herbicides, plus organic vegetables typically have a higher nutritional value than its conventional counterpart. All proteins will be of the highest quality, using only humanely raised, grass fed, free range/ pastured, antibiotic and hormone free animal products. Every meal and snack is consciously prepared in the healthiest manner possible, using only the highest quality ingredients.
        </Typography>
        <br />
        <Typography variant="body1">
        After the cleanse is over, you will have reduced your bodies inflammation. Two of the most significant benefits of choosing this cleanse for your next step; your blood sugar levels will regulate themselves, which allows your adrenal glands to rest and restore as well. Once the symptoms of inflammation are no longer present, we are able to see and feel our real potential for a life of high vitality.
        </Typography>
      </div>
    </div>
  );
}
