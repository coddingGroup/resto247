import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Products } from "./products";
import { Comments } from "./comments";
import { Hotdeals } from "./hotdeals";
import { Recommanded } from "./recommanded";
import {OutOfStockProducts} from "./outOfStockProducts";
import {Cart} from "./Cart";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { InitialFeedback, quantity, login, signUp } from "./Forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            comments: Comments,
            recommanded: Recommanded,
            hotdeals: Hotdeals,
            outOfStockProducts: OutOfStockProducts,
            cart: Cart,
            ...createForms({
                feedback: InitialFeedback,
                quantity: quantity,
                login:login,
                signUp:signUp
            })
            
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}