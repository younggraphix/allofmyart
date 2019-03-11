import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <nav>
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
      </nav>
    )
  }
}

export default Navbar
