import {GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS} from "../actions/actions";

const initialState = {
	items: [],
	loaded: false
};
export function publicProducts(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST:
			return { ...state, items: action.payload, loaded: true };
		case GET_PRODUCTS_SUCCESS:
			return { ...state, items: action.payload, loaded: false };
		case GET_PRODUCTS_ERROR:
			return { ...state, items: action.payload, loaded: false };
		default:
			return state;
	}
}