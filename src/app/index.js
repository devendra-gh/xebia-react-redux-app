import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../../src/utils/GetHistory';
import store from './store';
import Layout from './components/layout';
import '../styles/index.scss';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout />
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);
