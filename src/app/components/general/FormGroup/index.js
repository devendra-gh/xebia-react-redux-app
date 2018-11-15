import React, { Component } from 'react';

class FormGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.cssClassName}>
                { this.props.children }
            </div>
        );
    }
}

export default FormGroup;
