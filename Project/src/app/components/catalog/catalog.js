import React from 'react';
import './catalog.scss';

import {StyleCard} from '../../containers';
import {Loading} from '..';
import {Link} from 'react-router-dom';

import {uiService} from '../../services';

import addImage from '../../../assets/add.svg';

export class Catalog extends React.Component {
	render() {
		return (
			<div className='catalog'>
				<h2 className='catalog--header'>
					{this.props.title}
					{this.props.icon && <img className='catalog--icon' src={this.props.icon}/>}
					{!this.props.readOnly && <Link to='private_catalogs/new_product'><button className='prime margin align'>New Item</button></Link>}
				</h2>
				{this.props.goods.loaded ?
					((this.props.goods.items && this.props.goods.items.length) ?
						<div className='catalog--items'>
							{(this.props.goods.items.map((item, i) =>
								<Link className='catalog--item' to={`${this.props.path}/${item.id}`} key={i}>
									<StyleCard title={item.title}
											   price={item.price}
											   image={item.imageUrl}
											   id={item.id}
											   favoriteId={item.favoriteId}/>
								</Link>))}
							{!this.props.readOnly &&
							<Link className='catalog--item' to='private_catalogs/new_product'>
								<StyleCard image={addImage}/>
							</Link>}
						</div> :
						<div className='catalog--nothing'><h3 className='catalog--nothing-text'>Nothing to show</h3></div>) :
					<Loading color={uiService.switchColor(this.props.path)}/>}
			</div>
		);
	}
}