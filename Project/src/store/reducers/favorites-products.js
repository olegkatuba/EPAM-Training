import {GET_FAVORITES_ERROR, GET_FAVORITES_REQUEST, GET_FAVORITES_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, SET_FAVORITES} from "../actions/actions";

const initialState = {
	items: [],
	loaded: false
};
export function favoriteProducts(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST:
			return { ...state, items: action.payload, loaded: true };
		case GET_PRODUCTS_SUCCESS:
			return { ...state, items: action.payload, loaded: false };
		case GET_PRODUCTS_ERROR:
			return { ...state, items: action.payload, loaded: false };
		case GET_FAVORITES_REQUEST:
			return { ...state, items: action.payload, loaded: false };
		case GET_FAVORITES_SUCCESS:
			return { ...state, items: action.payload, loaded: true };
		case GET_FAVORITES_ERROR:
			return { ...state, items: action.payload, loaded: true };
		case SET_FAVORITES:
			return { ...state, items: action.payload, loaded: true };
		default:
			return state;
	}
}