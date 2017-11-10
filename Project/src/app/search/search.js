import React from 'react';
import './search.scss';
import Form from '../form/form';

import productsService from '../products-service';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.updateText = this.updateText.bind(this);
		this.handleAdvancedClick = this.handleAdvancedClick.bind(this);
		this.state = {isAdvanced: false};
	}

	updateText() {
		productsService.setFilter('title', this.input.value);
		this.props.handleSearch(productsService.getProducts());
	}

	handleAdvancedClick() {
		this.setState(prevState => ({
			isAdvanced: !prevState.isAdvanced
		}));
	}

	render() {
		return (
			<div className='search'>
				<input ref={(input => this.input = input)} onChange={this.updateText} className='search--input' placeholder='Search input'/>
				<button className='search--button' onClick={this.updateText}>Search</button>
				<div className='search--advanced'>
					<button className='search--advanced-button' onClick={this.handleAdvancedClick}>Advanced</button>
					<div className={`search--advanced-form ${!this.state.isAdvanced && 'hide'}`}>
						<Form handleSearch={this.props.handleSearch}/>
					</div>
				</div>
			</div>
		);
	}
}
