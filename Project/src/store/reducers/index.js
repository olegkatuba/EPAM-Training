import { combineReducers } from 'redux';
import {goods} from "./public-products.reducer";

export const appReducers = combineReducers({
	goods
});
