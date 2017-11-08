import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import SideNav from './side-nav/side-nav';
import Catalog from './catalog/catalog';

import items from './response-data-export.json';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {filter: ''};
		this.handleSearch = this.handleSearch.bind(this);

		this.items = items.response.results;
	}

	handleSearch(text) {
		this.setState({filter: text});
	}

	render() {
		let regExp = new RegExp(`${this.state.filter}`, 'i');
		let items = this.items.filter(item => item.object.metadata.brand.search(regExp) !== -1);
		let avgCost = 0;
		items.forEach((item) => {
			avgCost += item.object.metadata.price;
		});
		avgCost = items.length ? avgCost/items.length : 0;
		return (
			<div className='app'>
				<div className='app--nav'>
					<SideNav onLogoClick={this.handleLogoClick}/>
				</div>
				<div className='app--content'>
					<Header handleSearch={this.handleSearch} count={items.length} avgCost={avgCost.toFixed(2)}/>
					<Catalog items={items}/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App name='React'/>, document.getElementById('app'));