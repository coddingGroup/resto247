import * as ActionTypes from './ActionTypes';
import {firebasestore} from "../firebase/firebase";

export const Products = (state = {
    isLoading: true,
    errMess: null,
    products: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, products: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, products: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, products: []};
        case ActionTypes.ADD_ONE_PRODUCT:
            let prev = state.products;
            return {...state, isLoading: false, errMess: null, products: [...prev, action.payload]};
        case ActionTypes.CHANGE_PRODUCT_INFO:
            let pre = state.products;
            pre.forEach(product => {
               if(product.id === action.payload.id) {
                   product.buyUnitPrice=action.payload.buyUnitPrice;
                       product.category=action.payload.category;
                       product.description= action.payload.description;
                       product.featured=action.payload.featured;
                       product.image=action.payload.image;
                       product.marched=action.payload.marched;
                       product.name=action.payload.name;
                       product.price=action.payload.price;
                       product.quantity=action.payload.quantity;
               }

            });
            return {...state, isLoading: false, errMess: null, products: [...pre]};

        default:
            return state;
    }
}