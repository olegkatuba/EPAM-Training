import React from 'react';
import './product-info.scss';

import {StyleCard} from '../../containers';

export class ProductInfo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			id: (props.product && props.product.id) || '',
			title: (props.product && props.product.title) || '',
			price: (props.product && props.product.price) || '',
			retailer: (props.product && props.product.retailer) || '',
			brand: (props.product && props.product.brand) || '',
			description: (props.product && props.product.description) || '',
			imageUrl: (props.product && props.product.imageUrl) || ''
		};
	}

	preview() {
		this.props.preview(this.state);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		let product = this.props.product || {};
		let {title, price, imageUrl, id, favoriteId, retailer, brand, dateCreated, description} = product;
		let dateCreatedFixed = (dateCreated ? new Date(Date.parse(dateCreated)) : new Date()).toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}) ;
		return (
			<div className='product-info'>
				{!this.props.readOnly && <button className='prime margin' onClick={::this.preview}>Preview</button>}
				{!this.props.readOnly && <button className='prime margin'>Save</button>}
				<div className='product-info--content'>
					<div className='product-info--image'>
						<div className='product-info--styleCard'>
							<StyleCard image={imageUrl || this.state.imageUrl}
									   id={id || this.state.id}
									   favoriteId={favoriteId}/>
						</div>
						{!this.props.readOnly && <button className='prime'>Upload Image</button>}
					</div>
					{(this.props.readOnly) ?
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
							<div className={`form--field-error ${this.state.title !== '' && !isNaN(this.state.title) && 'warning'}`}>Should be string value</div>
							<input name='retailer' className='textbox long' placeholder='Retailer' onChange={::this.handleInputChange} value={this.state.retailer}/>
							<div className={`form--field-error ${this.state.retailer !== '' && !isNaN(this.state.retailer) && 'warning'}`}>Should be string value</div>
							<input name='price' className='textbox long' placeholder='Price' onChange={::this.handleInputChange} value={this.state.price}/>
							<div className={`form--field-error ${this.state.price !== '' && isNaN(this.state.price) && 'warning'}`}>Should be a number</div>
							<div className={`form--field-error ${this.state.price !== '' && this.state.price <= 0 && 'warning'}`}>Should be more then 0</div>
							<input name='brand' className='textbox long' placeholder='Brand' onChange={::this.handleInputChange} value={this.state.brand}/>
							<div className={`form--field-error ${this.state.brand !== '' && !isNaN(this.state.brand) && 'warning'}`}>Should be string value</div>
							<textarea name='description' className='textbox long' placeholder='Description' onChange={::this.handleInputChange} value={this.state.description}/>
						</div>
					}
				</div>
			</div>
		);
	}
}