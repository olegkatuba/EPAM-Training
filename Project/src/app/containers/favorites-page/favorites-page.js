import './favorites-page.scss';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import {Catalog} from '../../components';

import {goodsService} from '../../services';
import * as pageActions from '../../../store/actions'

import fillStar from '../../../assets/fillStar.svg';
import {Search} from '..';

class FavoritesPage extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		let favorites = {
			items: this.props.goods && this.props.goods.items ? this.props.goods.items.filter(i => goodsService.isFavorite(i.id)) : [],
			loaded: this.props.goods && this.props.goods.goodsLoaded && this.props.goods.favoritesLoaded
		};
		return (
			<div className='page'>
				<div className='page--header'>
					<div className='header'>
						<div className='search-info'>
							<div className='search-info--item'>
								<Search setGoods={::this.props.setGoods} service={goodsService}/>
							</div>
						</div>
						<div className='search-info'>
							<div className='search-info--item'>
								<div className='search-info--value'>
									{goodsService.count(favorites.items)}
								</div>
								<div className='search-info--text'>
									Items found
								</div>
							</div>
							<div className='search-info--item'>
								<div className='search-info--value price'>
									{goodsService.avgCost(favorites.items)}
								</div>
								<div className='search-info--text'>
									Average cost
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='page-content'>
					<Catalog title='Favorites' goods={favorites} readOnly icon={fillStar} path={'/favorites'}/>
				</div>
			</div>)
	}
}

function mapStateToProps(state) {
	return {
		goods: state.goods
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPublicProducts: bindActionCreators(pageActions.getPublicProducts, dispatch),
		setGoods: bindActionCreators(pageActions.setGoods, dispatch)
	}
}

export const Favorites = withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesPage));
