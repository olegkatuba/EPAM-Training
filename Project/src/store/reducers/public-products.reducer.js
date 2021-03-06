import {
	GET_FAVORITES_ERROR,
	GET_FAVORITES_REQUEST,
	GET_FAVORITES_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_PRODUCTS_REQUEST,
	GET_PRODUCTS_SUCCESS,
	SET_PRODUCTS
} from "../actions/store.types";

const initialState = {
	items: [],
	goodsLoaded: false,
	favoritesLoaded: false
};

export function goods(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST:
			return {...state, goodsLoaded: false, catalog: action.catalog};
		case GET_PRODUCTS_SUCCESS:
			return {...state, items: action.payload, goodsLoaded: true, catalog: action.catalog};
		case GET_PRODUCTS_ERROR:
			return {...state, items: action.payload, goodsLoaded: true, catalog: action.catalog};
		case GET_FAVORITES_REQUEST:
			return {...state, favoritesLoaded: false};
		case GET_FAVORITES_SUCCESS:
			return {...state, items: action.payload, favoritesLoaded: true};
		case GET_FAVORITES_ERROR:
			return {...state, items: action.payload, favoritesLoaded: true};
		case SET_PRODUCTS:
			return {...state, items: action.payload};
		default:
			return state;
	}
}