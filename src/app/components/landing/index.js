import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { WebUrl} from '../../../constants';

import Header from '../general/Header';
import Search from './Search';

class Main extends Component {
    constructor (props, context) {
        super(props, context);
    }

    render () {
        const { match, location } = this.props;
        let allowRedirect = match.url !== location.pathname;

        return (
            <div className='wrapper'>
                <Header />
                <main>
                    <Switch>
                        <Route exact={true} path={WebUrl.SEARCH_URL} component={Search}/>

                        {allowRedirect && <Redirect to={`${match.url}`} />}
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main;


