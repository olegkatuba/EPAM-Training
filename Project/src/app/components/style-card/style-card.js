import React from 'react';
import './style-card.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as pageActions from '../../../store/actions/index';

import {goodsService} from '../../services';
import {Loading} from '../../components';

import star from '../../../assets/star.svg';
import fillStar from '../../../assets/fillStar.svg'

class StyleCardComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {isLoading: false};
	}

	markAsFavorite(event) {
		this.setState({isLoading: true});
		goodsService.markAsFavorite(this.props.id)
			.then(() => {
				this.props.setGoods(goodsService.filteredGoods);
				this.setState({isLoading: false});
			});
		event.preventDefault();
	}

	render() {
		let title = this.props.title && this.props.title.length > 30 ? this.props.title.slice(0, 30) + '...' : this.props.title;
		return (
			<div className={`style-card ${(title && this.props.price) ? 'blur' : ''}`}>
				<div className='style-card--image' style={{background: this.props.image && `url("${this.props.image}") no-repeat center / ${this.props.id ? 'cover' : '30%'}`}}> </div>
				{(this.props.favoriteId !== undefined) &&
				<div className='style-card--favorite'>
					<div className='style-card--star'
						 style={{background: `url("${(this.props.favoriteId ? fillStar : star)}") no-repeat center / cover`}}
						 onClick={::this.markAsFavorite}>
					</div>
					{this.state.isLoading && <Loading color='#e76e2d' fontSize='30px'/>}
				</div>}
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

export const StyleCard = connect(null, mapDispatchToProps)(StyleCardComponent);