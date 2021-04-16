import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Products } from "./products";
import { Comments } from "./comments";
import { Hotdeals } from "./hotdeals";
import { Recommanded } from "./recommanded";
import {OutOfStockProducts} from "./outOfStockProducts";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { InitialFeedback } from "./Forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            comments: Comments,
            recommanded: Recommanded,
            hotdeals: Hotdeals,
            outOfStockProducts: OutOfStockProducts,
            ...createForms({
                feedback: InitialFeedback
            })
            
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}