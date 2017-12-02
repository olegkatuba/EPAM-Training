import React from 'react';

import './catalog.scss';
import StyleCard from '../style-card/style-card';
import {Link} from "react-router-dom";

export default class Catalog extends React.Component {
	render() {
		return (
			<div className='catalog'>
				<h2 className='catalog--header'>
					{this.props.title}
					{this.props.icon && <img className='catalog--icon' src={this.props.icon}/>}
				</h2>
				{this.props.goods.loaded ?
					((this.props.goods.items && this.props.goods.items.length) ?
						<div className='catalog--items'>
							{this.props.goods.items.map((item, i) =>
								<Link className='catalog--item' to={`${this.props.path}/${item.id}`} key={i}>
									<StyleCard title={item.title}
											   price={item.price}
											   image={item.imageUrl}
											   id={item.id}
											   favoriteId={item.favoriteId}/>
								</Link>
							)}
						</div> : <h3>Nothing to show</h3>) : <h3>Loading</h3>}
			</div>
		);
	}
}