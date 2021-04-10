import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Home from "./client/Home/Home.jsx";
import Contact from "./client/Contact/Contact.jsx";
import WhyCleanse from "./client/WhyCleanse/WhyCleanse.jsx";
import SpecialtyCleanse from "./client/SpecialtyCleanse/SpecialtyCleanse.jsx";
import Navigation from "./client/Components/Navigation/Navigation.jsx";
import ChefMenu from "./client/ChefMenu/ChefMenu.jsx";
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
            <Route path="/specialty-cleanse">
              <SpecialtyCleanse />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/why-cleanse">
              <WhyCleanse />
            </Route>
            <Route path="/menu">
              <ChefMenu />
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
