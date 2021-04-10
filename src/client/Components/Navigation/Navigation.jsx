import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";  

export default function Navigation({ toggleSidebar }) {
  return (
    <ul className="navigation">
      <li>
        <NavLink to="/menu" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Menu</NavLink>
      </li>
      <li>
        <NavLink to="/why-cleanse" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Why Cleanse?</NavLink>
      </li>
      <li>
        <NavLink to="/specialty-cleanse" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Specialty Cleanse</NavLink>
      </li>
      <li>
      <NavLink exact to="/" onClick={() => toggleSidebar(false)}>About</NavLink>
      </li>
      <li>
      <NavLink to="/contact" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Contact</NavLink>
      </li>
    </ul>
  );
}
