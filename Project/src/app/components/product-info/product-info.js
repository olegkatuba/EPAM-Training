import React from 'react';
import './product-info.scss';

import {StyleCard} from '../../containers';

export class ProductInfo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {readOnly: this.props.readOnly, title: '', price: '', retailer: '', brand: '', description: ''};
	}

	preview() {
		this.setState({
			readOnly: true
		});
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		let product = this.props.product || {};
		let {title, price, imageUrl, id, favoriteId, retailer, brand, dateCreated, description} = product;
		let dateCreatedFixed = new Date(Date.parse(dateCreated)).toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		return (
			<div className='product-info'>
				{!this.state.readOnly && <button className='prime margin' onClick={::this.preview}>Preview</button>}
				{!this.state.readOnly && <button className='prime margin'>Save</button>}
				<div className='product-info--content'>
					<div className='product-info--image'>
						<div className='product-info--styleCard'>
							<StyleCard image={imageUrl}
									   id={id}
									   favoriteId={favoriteId}/>
						</div>
						{!this.state.readOnly && <button className='prime'>Upload Image</button>}
					</div>
					{(this.state.readOnly) ?
						<div className='product--characteristics'>
							<div className='product--characteristics-item'>{title}</div>
							<div className='product--characteristics-item'>Price: ${price}</div>
							<div className='product--characteristics-item'>Retailer: {retailer}</div>
							<div className='product--characteristics-item'>Brand: {brand}</div>
							<div className='product--characteristics-item'>Created date: {dateCreatedFixed}</div>
							{description && <div className='product--characteristics-item'>Description: {description}</div>}
						</div> :
						<div className='product--characteristics'>
							<input name='title' className='textbox long' placeholder='Title' onChange={::this.handleInputChange} value={this.state.title}/>
							<input name='retailer' className='textbox long' placeholder='Retailer' onChange={::this.handleInputChange} value={this.state.retailer}/>
							<input name='price' className='textbox long' placeholder='Price' onChange={::this.handleInputChange} value={this.state.price}/>
							<input name='brand' className='textbox long' placeholder='Brand' onChange={::this.handleInputChange} value={this.state.brand}/>
							<textarea name='description' className='textbox long' placeholder='Description' onChange={::this.handleInputChange} value={this.state.description}/>
						</div>
					}
				</div>
			</div>
		);
	}
}