import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";  

export default function Navigation({ toggleSidebar }) {
  return (
    <ul className="navigation">
      <li>
      <NavLink exact to="/" onClick={() => toggleSidebar(false)}>About</NavLink>
      </li>
      <li>
        <NavLink to="/services" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Services</NavLink>
      </li>
      <li>
        <NavLink to="/catering" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Catering</NavLink>
      </li>
      <li>
      <NavLink to="/contact" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Contact</NavLink>
      </li>
    </ul>
  );
}
