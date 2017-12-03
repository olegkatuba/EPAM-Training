import './private-page.scss';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import {Catalog} from '../../components';

import {goodsService} from '../../services';
import * as pageActions from '../../../store/actions'

import {privateGoodsService} from "../../services";
import {Search} from '..';

class PrivatePage extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		let privateGoods = {
			items: this.props.privateGoods && this.props.privateGoods.items,
			loaded: this.props.privateGoods && this.props.privateGoods.goodsLoaded
		};
		return (
			<div className='page'>
				<div className='page--header'>
					<div className='header'>
						<div className='search-info'>
							<div className='search-info--item'>
								<Search setGoods={::this.props.setGoods} service={privateGoodsService}/>
							</div>
						</div>
						<div className='search-info'>
							<div className='search-info--item'>
								<div className='search-info--value'>
									{goodsService.count(privateGoods.items)}
								</div>
								<div className='search-info--text'>
									Items found
								</div>
							</div>
							<div className='search-info--item'>
								<div className='search-info--value price'>
									{goodsService.avgCost(privateGoods.items)}
								</div>
								<div className='search-info--text'>
									Average cost
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='page-content'>
					<Catalog title='Collection Name' goods={privateGoods} path={'/private_catalogs'}/>
				</div>
			</div>)
	}
}

function mapStateToProps(state) {
	return {
		privateGoods: state.privateGoods
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPrivateProducts: bindActionCreators(pageActions.getPrivateGoods, dispatch),
		setGoods: bindActionCreators(pageActions.setPrivateGoods, dispatch)
	}
}

export const Private = withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivatePage));
