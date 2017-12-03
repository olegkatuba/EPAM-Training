import { combineReducers } from 'redux';
import {goods} from "./public-products.reducer";
import {privateGoods} from "./private-products.reducer";

export const appReducers = combineReducers({
	goods, privateGoods
});
