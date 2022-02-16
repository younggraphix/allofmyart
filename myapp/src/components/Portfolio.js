import React, { Component } from 'react';
import Logos from './Logos.js'
import Branding from './Branding.js'
import Print from './Print.js'
import WebDesign from './WebDesign.js'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogos: false,
      showBranding: false,
      showWebDesign: false,
      showPrint: false,
      portfolioItemSelected: false
    }
  }

  componentDidMount() {
    this.setState({
      showLogos: true,
      portfolioItemSelected: true
    })
  }

  showPortfolioSelection = (selection) => {
    
    switch(selection) {
      case 'logos':
        this.setState({
          showLogos: true,
          showBranding: false,
          showWebDesign: false,
          showPrint: false
        })
      break
      case 'branding':
        this.setState({
          showLogos: false,
          showBranding: true,
          showWebDesign: false,
          showPrint: false
        })
      break
      case 'web':
        this.setState({
          showLogos: false,
          showBranding: false,
          showWebDesign: true,
          showPrint: false
        })
      break
      case 'print':
        this.setState({
          showLogos: false,
          showBranding: false,
          showWebDesign: false,
          showPrint: true
        })
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
            <li onClick={(e) => this.showPortfolioSelection('logos')} className={this.state.showLogos ? 'active' : ''}>Logos</li>
            <li onClick={(e) => this.showPortfolioSelection('branding')} className={this.state.showBranding ? 'active' : ''}>Branding</li>
            <li onClick={(e) => this.showPortfolioSelection('print')} className={this.state.showPrint ? 'active' : ''}>Print</li>
            <li onClick={(e) => this.showPortfolioSelection('web')} className={this.state.showWebDesign ? 'active' : ''}>Web Design</li>
          </ul>
          {this.state.showLogos ? <Logos /> : ''}
          {this.state.showBranding ? <Branding /> : ''}
          {this.state.showPrint ? <Print /> : ''}
          {this.state.showWebDesign ? <WebDesign /> : ''}
        </div>
    )
  }
}

export default Portfolio