import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
      return (
          <div className="portfolio">
            <table>
              <thead>
                <tr className="header-row">
                  <th>Work Experience</th>
                  <th>Info</th>
                  <th>Dates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Lead Designer</th>
                  <th>Led creation of dozens of brands and products</th>
                  <th>May 2015 - Present</th>
                </tr>
                <tr>
                  <th>Freelance Designer</th>
                  <th>Worked with a number of private clients to develop branding and websites</th>
                  <th>June 2017 - Present</th>
                </tr>
                <tr className="header-row">
                  <th>Education</th>
                  <th>Info</th>
                  <th>Dates</th>
                </tr>
                <tr>
                  <th>Associates Degree of Science</th>
                  <th>Utah Valley University</th>
                  <th>20101</th>
                </tr>
                <tr>
                  <th>Current Student Applying to Design Program</th>
                  <th>Utah Valley University</th>
                  <th>Present</th>
                </tr>
              </tbody>
            </table>
          </div>
      )
    }
}

export default Portfolio