import React from 'react';
import './search.scss';
import Form from '../form/form';

import goodsService from '../goods-service';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pageActions from "../../store/actions/index";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isAdvanced: false};
	}

	updateText() {
		goodsService.setFilter('title', this.title.value);
		this.props.setGoods(goodsService.filteredGoods);
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
					<button className='search--advanced-button' onClick={::this.handleAdvancedClick}>Advanced</button>
					<div className={`search--advanced-form ${!this.state.isAdvanced && 'hide'}`}>
						<Form />
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);