import * as ActionTypes from './ActionTypes';

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
            return {...state, isLoading: false, errMess: null, products: [...prev,action.payload]};

        default:
            return state;
    }
}