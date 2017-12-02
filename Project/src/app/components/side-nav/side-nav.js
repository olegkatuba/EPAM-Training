import React from 'react';
import './side-nav.scss';

import publicBlack from '../../../assets/public-black.svg';
import publicWhite from '../../../assets/public-white.svg';
import privateBlack from '../../../assets/private-black.svg';
import privateWhite from '../../../assets/private-white.svg';
import favoriteBlack from '../../../assets/favorite-black.svg';
import favoriteWhite from '../../../assets/favorite-white.svg';
import aboutBlack from '../../../assets/about-black.svg';
import aboutWhite from '../../../assets/about-white.svg';

import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../../../store/actions';

import {uiService} from "../../services/ui-service";

export class SideNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isCollapsed: true};
	}

	handleLogoClick() {
		this.setState(prevState => ({
			isCollapsed: !prevState.isCollapsed
		}));
	}

	render() {
		return (
			<nav className='side-nav'>
				<div className={`side-nav--content ${this.state.isCollapsed ? 'collapsed' : null}`}>
				<div className='side-nav--logo' onClick={::this.handleLogoClick}>
					<div className='side-nav--logo-image'> </div>
					<h1 className='side-nav--logo-text'>Logo</h1>
				</div>
				<div className='side-nav--items'>
					<MenuLink to="/public_catalogs" label="Public catalogs" imgWhite={publicWhite} imgBlack={publicBlack}/>
					<MenuLink to="/private_catalogs" label="Private catalogs" imgWhite={privateWhite} imgBlack={privateBlack}/>
					<MenuLink to="/favorites" label="Favorites" imgWhite={favoriteWhite} imgBlack={favoriteBlack}/>
					<MenuLink to="/about" label="About" imgWhite={aboutWhite} imgBlack={aboutBlack}/>
				</div>
				</div>
			</nav>
		);
	}
}

const MenuLink = ({label, to, imgWhite, imgBlack}) => (
	<Route path={to} children={({ match }) => (
		<Link to={to} className='side-nav--item' style={{
			background: match ? uiService.switchColor(to) : '',
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
