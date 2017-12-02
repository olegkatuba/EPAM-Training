import React from 'react';
import './product.scss';

import goodsService from '../goods-service';
import {connect} from "react-redux";

import Catalog from "../catalog/catalog";
import ProductInfo from "../product-info/product-info";

class Product extends React.Component {
	render() {
		let {catalog, id} = this.props.match.params;
		let item = this.props.goods && this.props.goods.find(i => i.id === id);
		let similar = this.props.goods && (catalog === 'favorites') ? goodsService.favorites : goodsService.filteredGoods;//this.props.goods.filter(i => goodsService.isFavorite(i.id)) : this.props.goods;
		similar = similar && similar.filter(i => i.id !== item.id).slice(0, 4);
		return (
			<div className='product'>
				{item ? (
					<div className='product--content'>
						<div className='product--selected'>
							<ProductInfo product={item}/>
						</div>
						<Catalog title='Similar Products' goods={{items: similar, loaded: true}} path={'/' + catalog}/>
					</div>)
					: 'Loading'}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		goods: state.goods.items
	}
}

export default connect(mapStateToProps)(Product);