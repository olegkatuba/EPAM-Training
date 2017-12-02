import {GET_PRIVATE_PRODUCTS_REQUEST} from "../actions/store.types";
import {GET_PRIVATE_PRODUCTS_SUCCESS} from "../actions/store.types";
import {GET_PRIVATE_PRODUCTS_ERROR} from "../actions/store.types";
import {SET_PRIVATE_PRODUCTS} from "../actions/store.types";

const initialState = {
	items: [],
	goodsLoaded: false
};
export function privateGoods(state = initialState, action) {
	switch (action.type) {
		case GET_PRIVATE_PRODUCTS_REQUEST:
			return { ...state, goodsLoaded: false };
		case GET_PRIVATE_PRODUCTS_SUCCESS:
			return { ...state, items: action.payload, goodsLoaded: true };
		case GET_PRIVATE_PRODUCTS_ERROR:
			return { ...state, items: action.payload, goodsLoaded: true };
		case SET_PRIVATE_PRODUCTS:
			return { ...state, items: action.payload };
		default:
			return state;
	}
}