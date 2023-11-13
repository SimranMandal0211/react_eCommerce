import { combineReducers } from "redux";
import { productsReducer } from './products/product.reducer';
import { cartReducer } from './cart/cart.reducer.js';


export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});