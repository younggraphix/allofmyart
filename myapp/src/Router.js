import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const DGM2120 = () => <h2>DGM 2120</h2>;
const Sandbox = () => <h2>Sandbox</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/dgm2120/" component={DGM2120} />
      <Route path="/sandbox/" component={Sandbox} />
    </div>
  </Router>
);

export default AppRouter;