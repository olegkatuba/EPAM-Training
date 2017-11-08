import React from 'react';
import './search.scss';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.updateTest = this.updateTest.bind(this);
	}

	updateTest() {
		this.props.onSearch(this.input.value);
	}

	render() {
		return (
			<div className='search'>
				<input ref={(input => this.input = input)} onChange={this.updateTest} className='search--input' placeholder='Search input'/>
				<button className='search--button' onClick={this.updateTest}>Search</button>
			</div>
		);
	}
}
