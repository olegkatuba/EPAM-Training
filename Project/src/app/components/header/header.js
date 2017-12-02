import React from 'react';
import {Search} from '../../containers';
import {Dropdown} from '../../components';

import './header.scss';

import {Route} from 'react-router-dom';

import {goodsService} from '../../services';

export class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<div className='header--content'>
					<div className='search-info'>
						{/*<div className='search-info--item'>
							<Dropdown items={[
								{value: 'Item1', onSelected: function() {alert(this.value);}},
								{value: 'Item2', onSelected: function() {alert(this.value);}},
								{value: 'Item3', onSelected: function() {alert(this.value);}}
							]}/>
						</div>*/}
						<div className='search-info--item'>
							<Search />
						</div>
					</div>
					<div className='search-info'>
						<div className='search-info--item'>
							<div className='search-info--value'>
								{this.props.location.pathname === '/favorites' ? goodsService.countFavorites : goodsService.count}
							</div>
							<div className='search-info--text'>
								Items found
							</div>
						</div>
						<div className='search-info--item'>
							<div className='search-info--value price'>
								{this.props.location.pathname === '/favorites' ? goodsService.avgCostFavorites : goodsService.avgCost}
							</div>
							<div className='search-info--text'>
								Average cost
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

let AboutHeder = () => {

};