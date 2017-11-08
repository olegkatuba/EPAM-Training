import React from 'react';

import './catalog.scss';
import StyleCard from '../style-card/style-card';

export default class Catalog extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='catalog'>
				<h2 className='catalog--header'>Shop Style</h2>
				{this.props.items.length ? 
					(<div className='catalog--items'>
						{this.props.items.map((item, i) =>
							<StyleCard key={i}
										name={item.object.metadata.brand}
										price={item.object.metadata.price}
										image={item.object.image.url}/>
						)}
					</div>) : 
					(<h3>Nothing to show</h3>)}
			</div>
		);
	}
}