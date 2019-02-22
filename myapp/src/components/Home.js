import React, { Component } from 'react';
import ReactComment from './ReactComment';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering
        };
    }

    render() {
      return (
          <div>
            <ul className="image-feed">
            <ReactComment text="home page" />
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/28763927_199919097277611_4410229903098642432_n.jpg" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Paradise</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/32025776_140209190170609_464274110587863040_n.jpg" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Liquid</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/1c429b6d-f8cc-4ada-aedb-58c1fb5d45fd_rw_1920.png" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Turn Your Face to The Sun</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/2b267056-a119-4437-86fa-6535e9cfc3d8_rw_1200.jpg" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Sunburst</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/3aeec860-dbdc-45ed-890f-7d455df9819a_rw_1200.jpg" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Venus</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/08f2d5fc-15ef-4f25-b386-c16fe8500416_rw_1200.jpg" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Dancer</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/25c843bc-95c0-4d97-823a-10fb299f60c5_rw_1920.png" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">K2S0</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/54ac5fa2-c687-43c1-b5af-ad9ed057f0ec_rw_1920.png" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Shores of The Unknown</h2>
                    }
                </li>
                <li id="middle" className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/482a6304-2238-4df3-92a5-357942e6a15b_rw_1920.jpg" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Reach</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/08081055-47c0-4769-9f48-9c331cd8ff64_rw_1920.png" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">C3P0</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/b0a832fe-a820-45c9-ac6b-be7552d847a6_rw_1920.png" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Horizon</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/b022b467-4983-4050-8377-dbdd4a6b321f_rw_1920.png" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Design a Poster Oct 8 2017</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/ea990f4a-060f-4a41-b521-1a9671e7619e_rw_1200.jpg" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">Dissolver</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/fe0aff9a-7995-4561-b5cf-52bda71abc5d_rw_1920.png" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">R2D2</h2>
                    }
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <img src="./img/ffcc1d82-27a7-45c5-b667-f1eac927bf6f_rw_1920.png" alt=""/>
                    {
                        this.state.isHovering &&
                        <h2 className="image-description">BB8</h2>
                    }
                </li>
            </ul>
            <a href="#middle" className="middle-link">To Middle</a>
            <a href="#">Back to top</a>
          </div>
      )
    }
}

export default Home