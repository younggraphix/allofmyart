import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuIsExpanded: false
    }
  }

  expandMenu = () => {
    this.setState({
      menuIsExpanded: !this.state.menuIsExpanded
    })
  }

  render () {
    return (
      <nav className={this.state.menuIsExpanded ? 'expanded' : ''}>
        <div className="hamburger" onClick={() => this.expandMenu()}>
          <i />
          <i />
          <i />
        </div>
        <ul onClick={() => this.expandMenu()}>
          <li>
            <NavLink to='/home' activeClassName='active'>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' activeClassName='active'>
              projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' activeClassName='active'>
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>
              contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='active'>
              about me
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
