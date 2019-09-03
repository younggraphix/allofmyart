import React, { Component } from 'react';
import Logos from './Logos.js'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogos: false,
      showBranding: false,
      showWebDesign: false,
      showPhotograhpy: false,
      portfolioItemSelected: false
    }
  }

  showPortfolioSelection = (selection) => {
    
    switch(selection) {
      case 'logos':
        this.setState({ showLogos: true})
      break
      case 'branding':
        this.setState({ showBranding: true})
      break
      case 'web':
        this.setState({ showWebDesign: true})
      break
      case 'photography':
        this.setState({ showPhotograhpy: true})
      break
      default:
      return 
    }
    this.setState({portfolioItemSelected: true})
  }

  render() {
    return (
        <div className={["portfolio", this.state.portfolioItemSelected ? 'selected' : ''].join(' ')}>
          <ul className="portfolio-navbar">
            <li onClick={(e) => this.showPortfolioSelection('logos')}>Logos</li>
            <li onClick={(e) => this.showPortfolioSelection('branding')}>Branding</li>
            <li onClick={(e) => this.showPortfolioSelection('web')}>Web Design</li>
            <li onClick={(e) => this.showPortfolioSelection('photography')}>Photography</li>
          </ul>
          {this.state.showLogos ? <Logos /> : ''}
        </div>
    )
  }
}

export default Portfolio