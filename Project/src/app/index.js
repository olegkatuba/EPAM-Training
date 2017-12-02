import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from "react-redux";
import appStore from "../store";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
	<HashRouter>
		<Provider store={appStore}>
			<App/>
		</Provider>
	</HashRouter>, document.getElementById('app'));