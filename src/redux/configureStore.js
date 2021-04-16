import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Products } from "./products";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Recommanded } from "./recommanded";
import {Users} from "./Users";
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
            searchingOutput:Users,
            leaders: Leaders,
            outOfStockProducts: OutOfStockProducts,
            ...createForms({
                feedback: InitialFeedback
            })
            
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}