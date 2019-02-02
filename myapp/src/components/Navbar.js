import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
    <nav>
      <li><Link to="home" >home</Link></li>
      <li><Link to="projects" >projects</Link></li>
      <li><Link to="portfolio" >portfolio</Link></li>
      <li><Link to="contact" >contact</Link></li>
      <li><Link to="about" >about me</Link></li>
    </nav>
        )
    }
}

export default Navbar;