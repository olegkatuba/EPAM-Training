import {GET_PRIVATE_PRODUCTS_REQUEST, GET_PRIVATE_PRODUCTS_SUCCESS, SET_PRIVATE_PRODUCTS} from "./store.types";

import {privateGoodsService} from '../../app/services/private-goods-service';

export function getPrivateGoods() {
	return (dispatch) => {
		dispatch({type: GET_PRIVATE_PRODUCTS_REQUEST});
		privateGoodsService.getProducts()
			.then(products => {
				dispatch({
					type: GET_PRIVATE_PRODUCTS_SUCCESS,
					payload: products
				});
			})
	}
}

export function setPrivateGoods(items) {
	return {
		type: SET_PRIVATE_PRODUCTS,
		payload: items
	}
}