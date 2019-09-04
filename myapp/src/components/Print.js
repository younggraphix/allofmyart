import React from 'react';

var printArray = [
    {
        'name':'me poster',
        'thumbnail':'me_ poster 2.0.jpg',
        'additionalPhotos': [
            'Me_2.0.jpg'
        ]
    },
    {
        'name':'snowboard1',
        'thumbnail':'snowboard1.png'
    },
    {
        'name':'snowboard2',
        'thumbnail':'snowboard2.png'
    },
    {
        'name':'snowboard3',
        'thumbnail':'snowboard3.png'
    },
    {
        'name':'protectourtrees',
        'thumbnail':'protectourtrees.jpg'
    }
]

export default class Print extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    showImageDetails = (printItem) => {
        this.setState({
            additionalImage: null
        })
        this.setState({
            imageExpanded: true,
            imageSource: printItem.thumbnail
        })
        if(printItem.additionalPhotos) {
            this.setState({
                additionalImage: printItem.additionalPhotos[0]
            })
        }
    }

    showExpanded = () => {
        return (
            <div className="expanded-wrapper" onClick={(e) => this.toggleExpand()}>
                <div className="expanded-scroller">
                    <img src={'/img/print/' + this.state.imageSource} />
                    {this.state.additionalImage ? <img src={'/img/print/' + this.state.additionalImage} /> : ''}
                    <div className="additional-info">

                    </div>
                </div>
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
            <div className="print">
                <>
                    {printArray.map(printItem => (
                        <li className="print-wrapper">
                            <img key={printItem.name} src={'/img/print/' + printItem.thumbnail} alt={printItem.name} onClick={(e) => this.showImageDetails(printItem)} />
                        </li>
                    ))}
                </>
                { this.state.imageExpanded ? this.showExpanded() : ''}
            </div>
        )
    }
}