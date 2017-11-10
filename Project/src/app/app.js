import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import SideNav from './side-nav/side-nav';
import Catalog from './catalog/catalog';

import productsService from './products-service';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {items: productsService._products};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(products) {
		this.setState({items: products});
	}

	render() {
		return (
			<div className='app'>
				<div className='app--nav'>
					<SideNav/>
				</div>
				<div className='app--content'>
					<Header handleSearch={this.handleSearch}/>
					<Catalog/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App name='React'/>, document.getElementById('app'));