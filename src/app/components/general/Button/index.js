import React, { Component } from 'react';
import {connect} from 'react-redux';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = () => {
        if(this.props.onClickHandler) {
            this.props.onClickHandler();
        }
    };

    render() {
        const { cssClassName, label, title } = this.props;
        return (
            <button
                onClick={ this.onClickHandler }
                className={ cssClassName }
                title={ title }>
                { label }
            </button>
        )
    }
}

export default connect(null, null)(Button);
