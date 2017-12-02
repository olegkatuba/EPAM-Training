import React from 'react';
import './side-nav.scss';

import publicBlack from '../../assets/public-black.svg';
import publicWhite from '../../assets/public-white.svg';
import privateBlack from '../../assets/private-black.svg';
import privateWhite from '../../assets/private-white.svg';
import favoriteBlack from '../../assets/favorite-black.svg';
import favoriteWhite from '../../assets/favorite-white.svg';
import aboutBlack from '../../assets/about-black.svg';
import aboutWhite from '../../assets/about-white.svg';

import {Link, Route} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pageActions from '../../store/actions';

export default class SideNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isCollapsed: false};
		//this.handleLogoClick = this.handleLogoClick.bind(this);
	}

	handleLogoClick() {
		this.setState(prevState => ({
			isCollapsed: !prevState.isCollapsed
		}));
	}

	/*setColor(color){
		this.props.pageActions.setColor(color);
	}*/

	render() {
		return (
			<nav className='side-nav'>
				<div className={`side-nav--content ${this.state.isCollapsed ? 'collapsed' : null}`}>
				<div className='side-nav--logo' onClick={::this.handleLogoClick}>
					<div className='side-nav--logo-image'> </div>
					<h1 className='side-nav--logo-text'>Logo</h1>
				</div>
				<div className='side-nav--items'>
					{/*<MenuLink onClick={this.setColor.bind(this, 'linear-gradient(to top, #006dfc 0%, #5359c9 100%)')} activeOnlyWhenExact={true} to="/public_catalogs" label="Public catalogs" color='#5359c9' imgWhite={publicWhite} imgBlack={publicBlack}/>
					<MenuLink onClick={this.setColor.bind(this, 'linear-gradient(to top, #fc957e 0%, #fa874a 100%)')} activeOnlyWhenExact={true} to="/private_catalogs" label="Private catalogs" color='#FC9580' imgWhite={privateWhite} imgBlack={privateBlack}/>
					<MenuLink onClick={this.setColor.bind(this, 'linear-gradient(to top, #1fa4df 0%, #027bb7 100%)')} activeOnlyWhenExact={true} to="/favorites" label="Favorites" color='#22A6DF' imgWhite={favoriteWhite} imgBlack={favoriteBlack}/>
					<MenuLink onClick={this.setColor.bind(this, 'linear-gradient(to top, #fc87d1 0%, #fa50bc 100%)')} activeOnlyWhenExact={true} to="/about" label="About" color='#FC8AD2' imgWhite={aboutWhite} imgBlack={aboutBlack}/>*/}
					<MenuLink to="/public_catalogs" label="Public catalogs" color='#5359c9' imgWhite={publicWhite} imgBlack={publicBlack}/>
					<MenuLink to="/private_catalogs" label="Private catalogs" color='#FC9580' imgWhite={privateWhite} imgBlack={privateBlack}/>
					<MenuLink to="/favorites" label="Favorites" color='#22A6DF' imgWhite={favoriteWhite} imgBlack={favoriteBlack}/>
					<MenuLink to="/about" label="About" color='#FC8AD2' imgWhite={aboutWhite} imgBlack={aboutBlack}/>
				</div>
				</div>
			</nav>
		);
	}
}

const MenuLink = ({onClick, label, to, activeOnlyWhenExact, color, imgWhite, imgBlack}) => (
	<Route path={to} children={({ match }) => (
		<Link to={to} className='side-nav--item' style={{
			background: match ? color : '',
			color: match ? "white" : ''}}>
			<div className='side-nav--item-image' style={{
				background: 'url("' + (match ? imgWhite : imgBlack) + '") no-repeat center / cover'
			}}> </div><div className='side-nav--item-text'>{label}</div>
		</Link>
	)}/>
);

/*function mapStateToProps(state) {
	return {
		color: state.color.color
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);*/
