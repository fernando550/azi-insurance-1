import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";

import Header from "./layout/header";
import Footer from "./layout/footer";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Location from "./components/location";
import Car from "./components/car";
import Boat from "./components/boat";
import House from "./components/house";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app-container">
          <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/car" component={Car} />
            <Route path="/boat" component={Boat} />
            <Route path="/house" component={House} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/location" component={Location} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
