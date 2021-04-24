import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Home from "./client/Home/Home.jsx";
import Contact from "./client/Contact/Contact.jsx";
import Catering from "./client/Catering/Catering.jsx";
import Navigation from "./client/Components/Navigation/Navigation.jsx";
import Services from "./client/Services/Services.jsx";
import Sidebar from "./client/Components/Sidebar/Sidebar.jsx";
import ScrollToTop from "./client/Components/ScrollToTop/ScrollToTop.jsx";
import { IconButton } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import appTheme from "./AppTheme.js";

export default function App() {
  const [displaySidebar, setDisplaySideBar] = useState(false);

  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <ScrollToTop />
        <header>
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather+Sans"
            rel="stylesheet"
          />
            <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script"
            rel="stylesheet"
          />
        </header>
        <div className="App">
          {displaySidebar ? (
            <Sidebar toggleSidebar={setDisplaySideBar} />
          ) : (
            ""
          )}
          <div className="header">
            <div className="header-content">
              <a href="/" className="logo">
                Chef Thompson
              </a>
              <Navigation toggleSidebar={setDisplaySideBar} />
              <IconButton
                color="inherit"
                aria-label="menu"
                className="hamburger"
                size="small"
                onClick={() => setDisplaySideBar(true)}
              >
                <Menu />
              </IconButton>
            </div>
          </div>

          <Switch>
            <Route path="/catering">
              <Catering />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
