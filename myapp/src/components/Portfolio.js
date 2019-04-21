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
                  <td>Lead Designer</td>
                  <td>Led creation of dozens of brands and products</td>
                  <td>May 2015 - Present</td>
                </tr>
                <tr>
                  <td>Freelance Designer</td>
                  <td>Worked with a number of private clients to develop branding and websites</td>
                  <td>June 2017 - Present</td>
                </tr>
                <tr className="header-row">
                  <th>Education</th>
                  <th>Info</th>
                  <th>Dates</th>
                </tr>
                <tr>
                  <td>Associates Degree of Science</td>
                  <td>Utah Valley University</td>
                  <td>20101</td>
                </tr>
                <tr>
                  <td>Current Student Applying to Design Program</td>
                  <td>Utah Valley University</td>
                  <td>Present</td>
                </tr>
              </tbody>
            </table>
          </div>
      )
    }
}

export default Portfolio