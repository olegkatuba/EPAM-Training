import React from 'react';
import './search.scss';

import {SearchForm} from '../../components';

export const Search = class SearchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isAdvanced: false};
	}

	updateFilter(filter, value){
		this.props.service.setFilter(filter, value);
		this.props.setGoods(this.props.service.filteredGoods);
	}

	updateText() {
		this.updateFilter('title', this.title.value);
	}

	handleAdvancedClick() {
		this.setState(prevState => ({
			isAdvanced: !prevState.isAdvanced
		}));
	}

	componentWillUnmount(){
		console.log('componentWillUnmount');
		this.props.service.clearFilter();
		this.props.setGoods(this.props.service.filteredGoods);
	}

	render() {
		return (
			<div className='search'>
				<input ref={(input => this.title = input)} onChange={::this.updateText} className='search--input' placeholder='Search input'/>
				<button className='search--button' onClick={::this.updateText}>Search</button>
				<div className='search--advanced'>
					<button className='prime margin' onClick={::this.handleAdvancedClick}>Advanced</button>
					<div className={`search--advanced-form ${!this.state.isAdvanced && 'hide'}`}>
						<SearchForm updateFilter={::this.updateFilter}/>
					</div>
				</div>
			</div>
		);
	}
};

