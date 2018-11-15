import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { fetchSearch, clearSearchData } from './Actions';
import Loader from '../../general/Loader';
import TextInputField from '../../general/TextInputField';
import PopulationInfo from '../../general/PopulationInfo';
import SearchList from '../../general/SearchList';

class Search extends Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.timeDiff = 0;
    }

    componentWillUnmount() {
        this.props.clearSearchData();
    }

    searchHandler = (event) => {
        let inputValue = event.target.value || null;

        if(!inputValue) {
            return;
        }

        const { login: { isAdmin } } = this.props;
        this.counter = this.counter + 1;

        if (this.counter === 1) {
            this.startTime = new Date();
            console.log('~~~~~~~~~set StartTime')
        }

        this.endTime = new Date();

        this.timeDiff = (this.endTime - this.startTime) / 1000;

        console.log('~~~~~~~~~timeDiff', this.timeDiff);

        if (this.timeDiff > 60) {
            this.startTime = new Date();
            console.log('~~~~~~~~~set StartTime again');
        }

        if (this.counter > 15 && this.timeDiff > 60) {
            this.counter = 0;
            console.log('~~~~~~~~~set counter')
        }

        if (isAdmin) {

            this.props.fetchSearch(inputValue);

        } else if (this.timeDiff <= 60 && this.counter <= 15) {

            this.props.fetchSearch(inputValue);
            console.log('~~~~~~~~~', this.counter);

        } else {

            alert('Sorry! you can not search above 15 in 1 min');
        }

    };


    render() {
        const { search: { apiData } } = this.props;

        return (
            <Fragment>
                <div className='search-section clearfix'>
                    <TextInputField
                        type='text'
                        onKeyUpHandler={ this.searchHandler }
                        cssClassName='form-control'
                        placeholder='Search...'
                    />
                    <PopulationInfo />
                </div>
                <Loader/>
                <SearchList lists={ apiData } />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        search: state.search
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearch: (data) => {
            dispatch(fetchSearch(data))
        },
        clearSearchData: (data) => {
            dispatch(clearSearchData(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
