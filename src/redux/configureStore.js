import {applyMiddleware, combineReducers, createStore} from "redux";
import {createForms} from "react-redux-form";
import {Products} from "./products";
import {Waiters} from "./collections/waiters";
import {Resources} from "./resources";
import {Auth} from "./auth";
import {Comments} from "./comments";
import {Hotdeals} from "./hotdeals";
import {Recommanded} from "./recommanded";
import {OutOfStockProducts} from "./outOfStockProducts";
import {UserCollection} from "./collections/userCollection";
import {Behaviors} from "./behaviors";
import {Miscellaneous} from "./collections/miscellaneous";
import {Invoices} from "./collections/invoices";
import {Cart} from "./Cart";
import {DailyStockUp} from "./others/dailyStockUp";
import {DailyInvoiceDetails} from "./others/dailyInvoiceDetails";
import {DailyInvoices} from "./others/dailyInvoices";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {addMiscellaneous, addNewProduct, addNewResource, InitialFeedback, login, quantity, signUp} from "./Forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            waiters: Waiters,
            userCollection: UserCollection,
            products: Products,
            resources: Resources,
            comments: Comments,
            recommanded: Recommanded,
            hotdeals: Hotdeals,
            auth: Auth,
            miscellaneous: Miscellaneous,
            invoices: Invoices,
            behaviors: Behaviors,
            dailyInvoices: DailyInvoices,
            dailyInvoiceDetails: DailyInvoiceDetails,
            outOfStockProducts: OutOfStockProducts,
            dailyStockUp: DailyStockUp,
            cart: Cart,
            ...createForms({
                feedback: InitialFeedback,
                quantity: quantity,
                login: login,
                signUp: signUp,
                addMiscellaneous: addMiscellaneous,
                addNewProduct: addNewProduct,
                addNewResource: addNewResource
            })

        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}