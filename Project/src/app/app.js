import './app.scss';
import React from 'react';
import {Switch, Route, Redirect, withRouter, Link} from 'react-router-dom';

import Header from './header/header';
import SideNav from './side-nav/side-nav';
import Catalog from './catalog/catalog';
import About from "./about/about";

import productsService from './products-service';
import favoritesService from './favorites-service';
import goodsService from './goods-service';

import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import * as pageActions from '../store/actions'

import Product from './product/product';

import fillStar from '../assets/fillStar.svg';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.props.getPublicProducts();
	}

	switchColor(path) {
		switch (path) {
			case 'public_catalogs':
				return '#5359c9';
			case 'private_catalogs':
				return '#FC9580';
			case 'favorites':
				return '#22A6DF';
			case 'about':
				return '#FC8AD2';
			default:
				return '#242424';
		}
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
		return (
			<div className='app'>
				<div className='app--nav'>
					<SideNav/>
				</div>
				<div className='app--page'>
					<Route path='/:path' children={({match}) => (
						<div className='app--header' style={{background: ::this.switchColor(match && match.params.path)}}>
							<Switch>
								<Route exact path='/:catalog/:id' component={Back}/>
								<Route path='/' component={Header}/>
							</Switch>
						</div>
					)}/>
					<div className='app--content'>
						<Switch>
							<Redirect exact from="/" to="/public_catalogs"/>
							<Route exact path='/public_catalogs' render={(match) => (<Catalog title='Shop Style' goods={goods} path={match.match.path}/>)}/>
							<Route exact path='/:catalog/:id' component={Product}/>
							<Route exact path='/favorites' render={(match) => (<Catalog title='Favorites' goods={favorites} icon={fillStar} path={match.match.path}/>)}/>
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
	</Link>)
;

function mapStateToProps(state) {
	return {
		goods: state.goods
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPublicProducts: bindActionCreators(pageActions.getGoods, dispatch)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
