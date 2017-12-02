import React from 'react';
import './product-info.scss';

import StyleCard from '../style-card/style-card';

export default class ProductInfo extends React.Component {
	render() {
		let {title, price, imageUrl, id, favoriteId, retailer, brand, dateCreated} = this.props.product;
		let dateCreatedFixed = new Date(Date.parse(dateCreated)).toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		return (
			<div className='product-info'>
				<div className='product-info--content'>
					<div className='product-info--styleCard'>
						<StyleCard image={imageUrl}
								   id={id}
								   favoriteId={favoriteId}/>
					</div>
					<div className='product--characteristics'>
						<div className='product--characteristics-item'>{title}</div>
						<div className='product--characteristics-item'>Price: ${price}</div>
						<div className='product--characteristics-item'>Retailer: {retailer}</div>
						<div className='product--characteristics-item'>Brand: {brand}</div>
						<div className='product--characteristics-item'>Created date: {dateCreatedFixed}</div>
					</div>
				</div>
			</div>
		);
	}
}