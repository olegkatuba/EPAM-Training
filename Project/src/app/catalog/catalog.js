import React from 'react';

import './catalog.scss';
import StyleCard from '../style-card/style-card';

import productsService from '../products-service';

export default class Catalog extends React.Component {
	render() {
		return (
			<div className='catalog'>
				<h2 className='catalog--header'>Shop Style</h2>
				{productsService.getProducts().length ?
					<div className='catalog--items'>
						{productsService.getProducts().map((item, i) =>
							<StyleCard key={i}
										title={item.object.metadata.title}
										price={item.object.metadata.price}
										image={item.object.image.url}/>
						)}
					</div> :
					<h3>Nothing to show</h3>}
			</div>
		);
	}
}