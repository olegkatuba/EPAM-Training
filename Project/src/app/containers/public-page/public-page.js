import './public-page.scss';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import {Catalog, Dropdown} from '../../components';

import {goodsService} from '../../services';
import * as pageActions from '../../../store/actions'

import {Search} from '..';

class PublicPage extends React.Component {

	constructor(props){
		super(props);

		this.dropdownItems = [
			{title: 'Shop Style', value: 'shop_style', onSelected: () => this.props.getPublicProducts('shop_style')},
			{title: 'Another Style', value: 'another_style', onSelected: () => this.props.getPublicProducts('another_style')}
		];
	}

	render() {
		let goods = {
			items: this.props.goods && this.props.goods.items,
			loaded: this.props.goods && this.props.goods.goodsLoaded
		};
		return (
			<div className='page'>
				<div className='page--header'>
					<div className='header'>
						<div className='search-info'>
							<div className='search-info--item'>
								<Dropdown default={this.props.goods.catalog} items={this.dropdownItems}/>
							</div>
							<div className='search-info--item'>
								<Search setGoods={this.props.setGoods} service={goodsService}/>
							</div>
						</div>
						<div className='search-info'>
							<div className='search-info--item'>
								<div className='search-info--value'>
									{goodsService.count(goods.items)}
								</div>
								<div className='search-info--text'>
									Items found
								</div>
							</div>
							<div className='search-info--item'>
								<div className='search-info--value price'>
									{goodsService.avgCost(goods.items)}
								</div>
								<div className='search-info--text'>
									Average cost
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='page-content'>
					<Catalog title={this.dropdownItems.find(i => i.value === this.props.goods.catalog).title} goods={goods} readOnly path={'/public_catalogs'}/>
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

export const Public = withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicPage));
