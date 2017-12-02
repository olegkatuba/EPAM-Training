import React from 'react';
import './search.scss';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {SearchForm} from '../../components';

import {goodsService} from '../../services';
import {bindActionCreators} from 'redux';
import * as pageActions from "../../../store/actions/index";

class SearchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isAdvanced: false};
	}

	updateFilter(filter, value){
		goodsService.setFilter(filter, value);
		this.props.setGoods(goodsService.filteredGoods);
	}

	updateText() {
		this.updateFilter('title', this.title.value);
	}

	handleAdvancedClick() {
		this.setState(prevState => ({
			isAdvanced: !prevState.isAdvanced
		}));
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
}

function mapStateToProps(state) {
	return {
		goods: state.goods
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setGoods: bindActionCreators(pageActions.setGoods, dispatch)
	}
}

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);