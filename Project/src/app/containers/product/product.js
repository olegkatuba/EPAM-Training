import React from 'react';
import './product.scss';
import {connect} from "react-redux";

import {Catalog, ProductInfo, Loading} from '../../components';
import {uiService, goodsService} from '../../services';

class ProductComponent extends React.Component {
	render() {
		let {catalog, id} = this.props.match.params;
		let item = this.props.goods && this.props.goods.items.find(i => i.id === id);
		let similar = this.props.goods && (catalog === 'favorites') ? goodsService.favorites : goodsService.filteredGoods;
		similar = similar && item && similar.filter(i => i.id !== item.id).slice(0, 4);
		return (
			<div className='product'>
				{item ? (
					<div className='product--content'>
						<div className='product--selected'>
							<ProductInfo product={item} readOnly/>
						</div>
						<div className='product--similar'>
							<Catalog title='Similar Products' goods={{items: similar, loaded: this.props.goods.favoritesLoaded}} readOnly path={'/'+catalog}/>
						</div>
					</div>)
					: <Loading color={uiService.switchColor('/' + catalog)}/>}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		goods: state.goods
	}
}

export const Product = connect(mapStateToProps)(ProductComponent);