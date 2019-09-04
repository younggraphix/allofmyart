import React from 'react';

var brandingArray = [
    [
        'nature leaf',
        '5.png'
    ],
    [
        'healthyfirediet',
        '1.png'
    ],
    [
        'trapezelabs',
        '3.png'
    ],
    [
        'rosewine skin',
        '6.png'
    ],
    [
        'skinglow',
        '7.png'
    ]
]

export default class Branding extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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
                <img src={'/img/branding/' + this.state.imageSource} />
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
            <div className="branding">
                <>
                    {brandingArray.map(brand => (
                        <li className="branding-wrapper">
                            <img key={brand[0]} src={'/img/branding/' + brand[1]} alt={brand[0]} onClick={(e) => this.showImageDetails(brand[1])} />
                        </li>
                    ))}
                </>
                { this.state.imageExpanded ? this.showExpanded() : ''}
            </div>
        )
    }
}