import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './containers/app/app';
import {Provider} from "react-redux";
import appStore from "../store";
import {HashRouter} from "react-router-dom";
import './index.scss';

ReactDOM.render(
	<HashRouter>
		<Provider store={appStore}>
			<App/>
		</Provider>
	</HashRouter>, document.getElementById('app'));