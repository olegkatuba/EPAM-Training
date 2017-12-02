import React from 'react';
import './style-card.scss';

import star from '../../assets/star.svg';
import fillStar from '../../assets/fillStar.svg'

import goodsService from '../goods-service';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pageActions from "../../store/actions/index";

class StyleCard extends React.Component {

	markAsFavorite(event){
		goodsService.markAsFavorite(this.props.id)
			.then(() => {this.props.setGoods(goodsService.filteredGoods);});
		event.preventDefault();
	}

	render() {
		let title = this.props.title && this.props.title.length > 30 ? this.props.title.slice(0, 30)+'...' : this.props.title;
		return (
			<div className={`style-card ${(title && this.props.price) ? 'blur' : ''}`}>
				<div className='style-card--image' style={{background: 'url("' + this.props.image + '") no-repeat center / cover'}}> </div>
				<div className='style-card--star'
					 style={{background: `url("${(goodsService.isFavorite(this.props.id) ? fillStar : star)}") no-repeat center / cover`}}
					 onClick={::this.markAsFavorite}>
				</div>
				<div className='style-card--info'>
					<div className='style-card--name'>{title}</div>
					<div className='style-card--price'>{this.props.price}</div>
				</div>
			</div>
		);
	}
}

/*function mapStateToProps(state) {
	return {
		publicProducts: state.publicProducts,
		favoriteProducts: state.favoriteProducts
	}
}*/

function mapDispatchToProps(dispatch) {
	return {
		setGoods: bindActionCreators(pageActions.setGoods, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(StyleCard);