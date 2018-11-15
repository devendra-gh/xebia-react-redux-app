import React, { Component } from 'react';

class TextInputField extends Component {
    constructor(props) {
        super(props);
    }

    onKeyUpHandler = (event) => {
        if(this.props.onKeyUpHandler) {
            this.props.onKeyUpHandler(event);
        }
    };

    onBlurHandler = (event) => {
        if(this.props.onBlurHandler) {
            this.props.onBlurHandler(event);
        }
    };

    render() {
        const { type, name, value, cssClassName, placeholder, autoFocus } = this.props;

        return (
            <input
                type={type}
                name={name}
                defaultValue={value}
                onBlur={ this.onBlurHandler }
                onKeyUp={ this.onKeyUpHandler }
                className={ cssClassName }
                placeholder={ placeholder }
                autoFocus={ autoFocus }
            />
        );
    }
}

export default TextInputField;
