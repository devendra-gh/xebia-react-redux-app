import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearLoadingData } from './Actions';

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        this.props.clearLoadingData();
    };

    componentWillUnmount() {
        this.props.clearLoadingData();
        window.removeEventListener('keydown', this.handleTabKeyPress, true);
    }

    componentDidUpdate = () => {
        const { loader } = this.props;

        loader && loader.loadingStatus
            ? window.addEventListener('keydown', this.handleTabKeyPress, true)
            : window.removeEventListener('keydown', this.handleTabKeyPress, true);
    };

    // Handler to prevent all user action when loader active
    handleTabKeyPress = (event) => {
        const { loader: { loadingStatus } } = this.props;

        if(loadingStatus){
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
    };

    render() {
        const { loader: { loadingStatus } } = this.props;

        return (
            loadingStatus
                ? (
                    <div className='loader-container'>
                        <div className='loader'>
                            <span /><span /><span />
                        </div>
                    </div>
                )
                : <span className='loader-empty' />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loader: state.loader
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearLoadingData: () => {
            dispatch(clearLoadingData())
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loader);

