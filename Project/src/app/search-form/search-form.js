import React from 'react';
import Dropdown from '../dropdown/dropdown';

import './search-form.scss';

import productsService from '../products-service';

export default class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDropdownChange = this.handleDropdownChange.bind(this);
		this.state = {isFormValid: false, currency: '', price: '', retailer: '', brand: ''};
	}

	handleInputChange(event) {
		this.setState({
			//isFormValid: this.state.currency && this.state.price && this.state.retailer && this.state.brand,
			[event.target.name]: event.target.value
		});
		this.props.updateFilter(event.target.name, event.target.value);
	}

	handleDropdownChange(item) {
		this.setState({
			['currency']: item.value
		});
		this.props.updateFilter('currency', item.value);
	}

	render() {
		return (
			<form className='form'>
				<h3 className='form--header'>Advanced search</h3>
				<div className='form--fields'>
					<div className='form--row'>
						<div className='form--field'>
							<Dropdown items={[
								{value: 'USD', onSelected: this.handleDropdownChange},
								{value: 'EUR', onSelected: this.handleDropdownChange},
								{value: 'RUB', onSelected: this.handleDropdownChange},
								{value: 'BYR', onSelected: this.handleDropdownChange}
							]}/>
						</div>
						<div className='form--field'>
							<input name="price" value={this.state.price} onChange={this.handleInputChange} className='form--field-input' placeholder='Price'/>
							<div className={`form--field-error ${this.state.price !== '' && isNaN(this.state.price) && 'warning'}`}>Should be a number</div>
							<div className={`form--field-error ${this.state.price !== '' && this.state.price <= 0 && 'warning'}`}>Should be more then 0</div>
						</div>
					</div>
					<div className='form--row'>
						<div className='form--field'>
							<input name="retailer" value={this.state.retailer} onChange={this.handleInputChange} className='form--field-input' placeholder='Retailer'/>
							<div className={`form--field-error ${this.state.retailer !== '' && !isNaN(this.state.retailer) && 'warning'}`}>Should be string value</div>
						</div>
						<div className='form--field'>
							<input name="brand" value={this.state.brand} onChange={this.handleInputChange} className='form--field-input' placeholder='Brand'/>
							<div className={`form--field-error ${this.state.brand !== '' && !isNaN(this.state.brand) && 'warning'}`}>Should be string value</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
