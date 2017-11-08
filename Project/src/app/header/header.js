import React from 'react';
import Search from '../search/search';
import Dropdown from '../dropdown/dropdown';

import './header.scss';

export default class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<div className='header--content'>
					<Search onSearch={this.props.handleSearch}/>
					<div className='search-info'>
						<div className='search-info--item'>
							<div className='search-info--value'>
								{this.props.count}
							</div>
							<div className='search-info--text'>
								Items found
							</div>
						</div>
						<div className='search-info--item'>
							<div className='search-info--value price'>
								{this.props.avgCost}
							</div>
							<div className='search-info--text'>
								Avarage cost
							</div>
						</div>
					</div>
				</div>
				<Dropdown items={[
						{value: 'Item1', onSelected: function() {alert(this.value);}}, 
						{value: 'Item2', onSelected: function() {alert(this.value);}}, 
						{value: 'Item3', onSelected: function() {alert(this.value);}},
					]}/>
			</div>
		);
	}
}