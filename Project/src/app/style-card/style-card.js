import React from 'react';
import './style-card.scss';

export default class StyleCard extends React.Component {
	render() {
		let title = this.props.title.length > 30 ? this.props.title.slice(0, 30)+'...' : this.props.title;
		return (
			<div className='style-card'>
				<div className='style-card--image' style={{background: 'url("' + this.props.image + '") no-repeat center / cover'}}> </div>
				<div className='style-card--info'>
					<div className='style-card--name'>{title}</div>
					<div className='style-card--price'>{this.props.price}</div>
				</div>
				<div className='style-card--buttons'>
					<button className='style-card--button'>Discover</button>
					<button className='style-card--button'>Add to Private</button>
				</div>
			</div>
		);
	}
}