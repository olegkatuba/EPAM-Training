import './app.scss';
import React from 'react';
import {Switch, Route, Redirect, withRouter, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import {Header, SideNav, Catalog, About, ProductInfo} from '../../components';
import {Product} from '..';

import {uiService, goodsService} from '../../services';
import * as pageActions from '../../../store/actions'

import fillStar from '../../../assets/fillStar.svg';


class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		this.props.getPublicProducts();
		this.props.getPrivateProducts();
	}

	render() {
		let goods = {
			items: this.props.goods && this.props.goods.items,
			loaded: this.props.goods && this.props.goods.goodsLoaded
		};
		let favorites = {
			items: this.props.goods && this.props.goods.items ? this.props.goods.items.filter(i => goodsService.isFavorite(i.id)) : [],
			loaded: this.props.goods && this.props.goods.favoritesLoaded
		};
		let privateGoods = {
			items: this.props.privateGoods && this.props.privateGoods.items,
			loaded: this.props.privateGoods && this.props.privateGoods.goodsLoaded
		};
		return (
			<div className='app'>
				<div className='app--nav'>
					<SideNav/>
				</div>
				<div className='app--page'>
					<Route path='/:path' children={({match}) => (
						<div className='app--header' style={{background: uiService.switchColor(match && '/' + match.params.path)}}>
							<Switch>
								<Route exact path='/:catalog/:id' component={Back}/>
								<Route exact path='/about' component={AboutHeadet}/>
								<Route path='/' component={Header}/>
							</Switch>
						</div>
					)}/>
					<div className='app--content'>
						<Switch>
							<Redirect exact from="/" to="/public_catalogs"/>
							<Route exact path='/public_catalogs' render={(match) => (<Catalog title='Shop Style' goods={goods} readOnly path={match.match.path}/>)}/>
							<Route exact path='/private_catalogs/new_product' component={ProductInfo}/>
							<Route exact path='/:catalog/:id' component={Product}/>
							<Route exact path='/private_catalogs' render={(match) => (<Catalog title='Collection Name' goods={privateGoods} path={match.match.path}/>)}/>
							<Route exact path='/favorites' render={(match) => (<Catalog title='Favorites' goods={favorites} readOnly icon={fillStar} path={match.match.path}/>)}/>
							<Route exact path='/about' component={About}/>
							<Route component={NotFoundPage}/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

let NotFoundPage = () => <div>Not Found</div>;

let Back = (props) =>
	(<Link to={`/${props.match.params.catalog}`}>
		<div>{(props.match.params.catalog === 'public_catalogs') ? 'Shop Style' : 'Favorites'}</div>
	</Link>);

let AboutHeadet = () => <div>About</div>;


function mapStateToProps(state) {
	return {
		goods: state.goods,
		privateGoods: state.privateGoods
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPublicProducts: bindActionCreators(pageActions.getGoods, dispatch),
		getPrivateProducts: bindActionCreators(pageActions.getPrivateGoods, dispatch)
	}
}

export const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));
