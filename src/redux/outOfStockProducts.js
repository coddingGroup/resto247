import * as ActionTypes from './ActionTypes';

export const OutOfStockProducts = (state = {
    isLoading: true,
    outOfStockProducts: [],
    errMess: null
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_OUT_OF_STOCK_PRODUCTS:
            return {...state, isLoading: false, errMess: null, outOfStockProducts: action.payload}

        case ActionTypes.OUT_OF_STOCK_PRODUCTS_LOADING:
            return {...state, isLoading: true, errMess: null, outOfStockProducts: []}

        case ActionTypes.OUT_OUT_STOCK_PRODUCTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, outOfStockProducts: []}

        default:
            return state;
    }


}