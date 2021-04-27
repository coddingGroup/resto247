import {createStore, combineReducers, applyMiddleware} from "redux";
import {createForms} from "react-redux-form";
import {Products} from "./products";
import { Waiters} from "./collections/waiters";
import {Resources} from "./resources";
import {Auth} from "./auth";
import {Comments} from "./comments";
import {Hotdeals} from "./hotdeals";
import {Recommanded} from "./recommanded";
import {OutOfStockProducts} from "./outOfStockProducts";
import {UserCollection} from "./collections/userCollection";
import {Behaviors} from "./behaviors";
import {Invoices} from "./collections/invoices";
import {Cart} from "./Cart";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {InitialFeedback, quantity, login, signUp,addNewProduct,addNewResource} from "./Forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            waiters:Waiters,
            userCollection:UserCollection,
            products: Products,
            resources: Resources,
            comments: Comments,
            recommanded: Recommanded,
            hotdeals: Hotdeals,
            auth:Auth,
            invoices:Invoices,
            behaviors:Behaviors,
            outOfStockProducts: OutOfStockProducts,
            cart: Cart,
            ...createForms({
                feedback: InitialFeedback,
                quantity: quantity,
                login: login,
                signUp: signUp,
                addNewProduct:addNewProduct,
                addNewResource:addNewResource
            })

        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}