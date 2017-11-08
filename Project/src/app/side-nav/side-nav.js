import React from 'react';
import './side-nav.scss';

export default class SideNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isCollapsed: false};
		this.handleLogoClick = this.handleLogoClick.bind(this);
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
				<div className='side-nav--logo' onClick={this.handleLogoClick}>
					<div className='side-nav--logo-image'> </div>
					<h1 className='side-nav--logo-text'>Logo</h1>
				</div>
				<div className='side-nav--items'>
					<div className='side-nav--item'>
						<div className='side-nav--item-image'> </div>
						<div className='side-nav--item-text'>Public catalogs</div>
					</div>
					<div className='side-nav--item'>
						<div className='side-nav--item-image'> </div>
						<div className='side-nav--item-text'>Private catalogs</div>
					</div>
					<div className='side-nav--item'>
						<div className='side-nav--item-image'> </div>
						<div className='side-nav--item-text'>Heading 3</div>
					</div>
					<div className='side-nav--item'>
						<div className='side-nav--item-image'> </div>
						<div className='side-nav--item-text'>Heading 3</div>
					</div>
				</div>
				</div>
			</nav>
		);
	}
}