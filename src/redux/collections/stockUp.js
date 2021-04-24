import * as ActionTypes from '../ActionTypes';

export const dailyReports = (state = {
    isLoading: true,
    saveComplete:false,
    errMess: null,
    stock: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STOCK:
            return {...state, isLoading: false, errMess: null, stock: action.payload};

        case ActionTypes.ADD_STOCK_LOADING:
            return {...state, isLoading: true, errMess: null, stock: []};

        case ActionTypes.ADD_STOCK_FAILED:
            return {...state, isLoading: false, errMess: action.payload, stock: []};

        default:
            return state;
    }
}