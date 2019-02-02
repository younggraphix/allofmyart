import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DGM2120 from "./components/DGM2120"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import About from "./components/About"

const Sandbox = () => <h2>Sandbox</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/home/" component={Home} />
      <Route path="/projects/" component={Projects} />
      <Route path="/portfolio/" component={Portfolio} />
      <Route path="/contact/" component={Contact} />
      <Route path="/about/" component={About} />
      <Route path="/dgm2120/" component={DGM2120} />
      <Route path="/sandbox/" component={Sandbox} />
    </div>
  </Router>
);

export default AppRouter;