import React, { Component } from 'react';

var imageArray = [
    [
        'paradise',
        '28763927_199919097277611_4410229903098642432_n.jpg'
    ],
    [
        'liquid',
        '32025776_140209190170609_464274110587863040_n.jpg'
    ],
    [
        'turn your face to the sun',
        '1c429b6d-f8cc-4ada-aedb-58c1fb5d45fd_rw_1920.png'
    ],
    [
        'sunburst',
        '2b267056-a119-4437-86fa-6535e9cfc3d8_rw_1200.jpg'
    ],
    [
        'venus',
        '3aeec860-dbdc-45ed-890f-7d455df9819a_rw_1200.jpg'
    ],
    [
        'dancer',
        '08f2d5fc-15ef-4f25-b386-c16fe8500416_rw_1200.jpg'
    ],
    [
        'shores of the unknown',
        '54ac5fa2-c687-43c1-b5af-ad9ed057f0ec_rw_1920.png'
    ],
    [
        'reach',
        '482a6304-2238-4df3-92a5-357942e6a15b_rw_1920.jpg'
    ],
    [
        'k2s0',
        '25c843bc-95c0-4d97-823a-10fb299f60c5_rw_1920.png'
    ],
    [
        'c3p0',
        '08081055-47c0-4769-9f48-9c331cd8ff64_rw_1920.png'
    ],
    [
        'r2d2',
        'fe0aff9a-7995-4561-b5cf-52bda71abc5d_rw_1920.png'
    ],
    [
        'bb8',
        'ffcc1d82-27a7-45c5-b667-f1eac927bf6f_rw_1920.png'
    ],
    [
        'horizon',
        'b0a832fe-a820-45c9-ac6b-be7552d847a6_rw_1920.png'
    ],
    [
        'oct 8 2017',
        'b022b467-4983-4050-8377-dbdd4a6b321f_rw_1920.png'
    ],
    [
        'dissolver',
        'ea990f4a-060f-4a41-b521-1a9671e7619e_rw_1200.jpg'
    ],
    [
        'hidden valley',
        'hiddenvalley.png'
    ],
    [
        '10-1-17',
        '10-1-17.png'
    ]
] 

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovering: false
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering
        };
    }

    showImageDetails = (source) => {
        this.setState({
            imageExpanded: true,
            imageSource: source
        })
    }

    showExpanded = () => {
        return (
            <div className="expanded-wrapper" onClick={(e) => this.toggleExpand()}>
                <i className="expanded-exit" />
                <img src={'/img/' + this.state.imageSource} />
            </div>
        )
    }

    toggleExpand = () => {
        this.setState({
            imageExpanded: !this.state.imageExpanded
        })
    }

    render() {
      return (
          <div>
            <ul className="image-feed">
                <>
                    {imageArray.map(image => (
                        <li className="image-wrapper">
                            <img key={image[0]} src={'/img/' + image[1]} alt={image[0]} onClick={(e) => this.showImageDetails(image[1])} />
                        </li>
                    ))}
                </>
            </ul>
            { this.state.imageExpanded ? this.showExpanded() : ''}
          </div>
      )
    }
}

export default Home