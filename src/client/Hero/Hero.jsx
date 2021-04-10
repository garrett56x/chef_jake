import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Hero.css";

export default function Hero(props) {
  const styles = {
  	backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),url(${props.backgroundImage})`,
  };
  
  const phraseStyle = {
    fontFamily: props.phraseFont || "inherit"
  }

  if (props.backgroundPosition) {
  	styles.backgroundPosition = props.backgroundPosition;
  }

  return (
    <div className="hero" style={styles}>
      <div style={{ width: "100%" }}>
        <h1 className="hero-phrase" style={phraseStyle}>{props.phrase}</h1>
        {props.subPhrase && (<h1 className="hero-subPhrase">{props.subPhrase}</h1>)}
        <Button component={NavLink} to="/contact" className="button" activeStyle={{ display: "none" }}>Contact Me</Button>
      </div>
    </div>
  );
}
