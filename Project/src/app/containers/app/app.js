import './app.scss';
import React from 'react';
import {Switch, Route, Redirect, withRouter, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import {SideNav, About} from '../../components';
import {Product} from '..';

import {uiService} from '../../services';
import * as pageActions from '../../../store/actions'


import {Public, Private, Favorites} from "..";
import {EditProduct} from "../edit-product-page/edit-product-page";


class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		this.props.getPublicProducts('shop_style');
		this.props.getPrivateProducts();
	}

	render() {
		return (
			<div className='app'>
				<div className='app--nav'>
					<SideNav/>
				</div>
				<div className='app--page'>
					<Route path='/:path' children={({match}) => (
						<div className='app--header' style={{background: uiService.switchColor(match && '/' + match.params.path)}}> </div>)}/>
					<div className='app--page-content'>
						<Switch>
							<Redirect exact from="/" to="/public_catalogs"/>
							<Route exact path='/private_catalogs/:id' component={EditProduct}/>
							<Route exact path='/:catalog/:id' component={Product}/>
							<Route exact path='/private_catalogs' component={Private}/>
							<Route exact path='/favorites' component={Favorites}/>
							<Route exact path='/about' component={About}/>
							<Route exact path='/public_catalogs' component={Public}/>
							<Route component={NotFoundPage}/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

let NotFoundPage = () => <div className='page'>
	<div className='page-content'>
		<div>Not Found</div>
	</div>
</div>;

function mapStateToProps(state) {
	return {
		goods: state.goods,
		privateGoods: state.privateGoods
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPublicProducts: bindActionCreators(pageActions.getPublicProducts, dispatch),
		getPrivateProducts: bindActionCreators(pageActions.getPrivateGoods, dispatch)
	}
}

export const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));
