import * as ActionTypes from '../ActionTypes';

export const DailyStockUp = (state = {
    isLoading: true,
    errMess: null,
    dailyStockUp: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_DAILY_STOCK_UP:
            return {...state, isLoading: false, errMess: null, dailyStockUp: action.payload};

        case ActionTypes.DAILY_STOCK_UP_LOADING:
            return {...state, isLoading: true, errMess: null, dailyStockUp: []};

        case ActionTypes.DAILY_STOCK_UP_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dailyStockUp: []};

        default:
            return state;
    }
}