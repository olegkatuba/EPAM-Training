import {GET_FAVORITES_REQUEST, GET_FAVORITES_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, SET_PRODUCTS} from "./actions";

import goodsService from '../../app/goods-service';

export function getGoods() {
	return (dispatch) => {
		dispatch({type: GET_PRODUCTS_REQUEST});
		goodsService.getProducts()
			.then(products => {
				dispatch({
					type: GET_PRODUCTS_SUCCESS,
					payload: products
				});
				dispatch({
					type: GET_FAVORITES_REQUEST
				});
				return goodsService.getFavorites();
			})
			.then(favorites => {
				dispatch({
					type: GET_FAVORITES_SUCCESS,
					payload: favorites
				});
			});
	}
}

export function setGoods(items) {
	return {
		type: SET_PRODUCTS,
		payload: items
	}
}

export function setColor(color) {
	return {
		type: 'SET_COLOR',
		payload: color
	}
}



