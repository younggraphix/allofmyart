import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ReactComment extends Component {

    componentDidMount() {
        let el = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(el);
        el.outerHTML = this.createComment();
    }

    createComment() {
        return `<!-- ${this.props.text} -->`;
    }

    render() {
        return <div />;
    }
}

export default ReactComment;