import React from 'react';
import './style-card.scss';

export default class StyleCard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='style-card'>
				<div className='style-card--image' style={{background: 'url("' + this.props.image + '") no-repeat center / cover'}}> </div>
				<div className='style-card--info'>
					<div className='style-card--name'>{this.props.name}</div>
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