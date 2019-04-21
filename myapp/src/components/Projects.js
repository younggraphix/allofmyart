import React, { Component } from 'react';

class Projects extends Component {
    render() {
      return (
          <div className="projects-wrapper">
            <div>
                <div className="description-wrapper">
                    <h2>Trapeze Labs</h2>
                    <blockquote>"You build your business. We build your websites"</blockquote>
                    <p>Almost four years ago I started working at a small startup called <strong>iPartnr</strong> in Provo, Utah. They hired me as the only graphic designer of a development team consisting of me and four other programmers.</p>
                    <p>Fast forward two and a half years and the company has grown substantially, management evolved, and the dev team now has two, soon to be three, designers amongs the plethora of awesome programmers.</p>
                    <p>So this project meant a lot to me, being able to rebrand a company I'd worked for for the majority of my career. We were able to take a look at ourselves for the first time and really make the company our own.</p>
                    <p>I would consider it the first <i>real rebranding</i> I ever did on a scale this large in my career. There are things I would do differently one year later, but I'm still proud of the work we did.</p>
                    <a href="https://trapezelabs.io/#/home" target="_blank" rel="noopener noreferrer">Go To Site</a>
                </div>
                <div className="image-wrapper">
                    <img src="./img/2f42416a-dbcc-4888-ba32-7a27746996b2.gif" alt=""/>
                </div>
            </div>
          </div>
      )
    }
}

export default Projects