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
                {/* <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/28763927_199919097277611_4410229903098642432_n_thumbnail.jpg" alt="Paradise"/>
                    <figcaption>Paradise</figcaption>
                    </figure>
                </li> */}
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/32025776_140209190170609_464274110587863040_n_thumbnail.jpg" alt="Liquid"/>
                    <figcaption>Liquid</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/1c429b6d-f8cc-4ada-aedb-58c1fb5d45fd_rw_1920_thumbnail.png" alt="Turn Your Face To The Sun"/>
                    <figcaption>Turn Your Face To The Sun</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/2b267056-a119-4437-86fa-6535e9cfc3d8_rw_1200_thumbnail.jpg" alt="Sunburst"/>
                    <figcaption>Sunburst</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/3aeec860-dbdc-45ed-890f-7d455df9819a_rw_1200_thumbnail.jpg" alt="Venus"/>
                    <figcaption>Venus</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/08f2d5fc-15ef-4f25-b386-c16fe8500416_rw_1200_thumbnail.jpg" alt="Dancer"/>
                    <figcaption>Dancer</figcaption>
                    </figure>
                </li>
                {/* <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/25c843bc-95c0-4d97-823a-10fb299f60c5_rw_1920_thumbnail.png" alt="K2S0"/>
                    <figcaption>K2S0</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/54ac5fa2-c687-43c1-b5af-ad9ed057f0ec_rw_1920_thumbnail.png" alt="Shores of The Unknown"/>
                    <figcaption>Shores of The Unknown</figcaption>
                    </figure>
                </li> */}
                {/* <li id="middle" className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/482a6304-2238-4df3-92a5-357942e6a15b_rw_1920_thumbnail.jpg" alt="Reach"/>
                    <figcaption>Reach</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/08081055-47c0-4769-9f48-9c331cd8ff64_rw_1920_thumbnail.png" alt="C3P0"/>
                    <figcaption>C3P0</figcaption>
                    </figure>
                </li> */}
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/b0a832fe-a820-45c9-ac6b-be7552d847a6_rw_1920_thumbnail.png" alt="Horizon"/>
                    <figcaption>Horizon</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/b022b467-4983-4050-8377-dbdd4a6b321f_rw_1920_thumbnail.png" alt="Oct 8 2017"/>
                    <figcaption>Design a Poster Oct. 8 2017</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/ea990f4a-060f-4a41-b521-1a9671e7619e_rw_1200_thumbnail.jpg" alt="Dissolver"/>
                    <figcaption>Dissolver</figcaption>
                    </figure>
                </li>
                {/* <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/fe0aff9a-7995-4561-b5cf-52bda71abc5d_rw_1920_thumbnail.png" alt="R2D2"/>
                    <figcaption>R2D2</figcaption>
                    </figure>
                </li>
                <li className="image-wrapper" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                    <figure>
                    <img src="./img/ffcc1d82-27a7-45c5-b667-f1eac927bf6f_rw_1920_thumbnail.png" alt="BB8"/>
                    <figcaption>BB8</figcaption>
                    </figure>
                </li> */}
            </ul>
            <a href="#middle" className="middle-link">To Middle</a>
            <button href="#">Back to top</button>
          </div>
      )
    }
}

export default Home