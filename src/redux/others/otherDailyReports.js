import * as ActionTypes from '../ActionTypes';

export const OtherDailyReports = (state = {
    isLoading: true,
    errMess: null,
    totalEarn: 0,
    totalQuantity:0
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DAILY_TOTAL_PRICE_AND_QUANTITY:
            return {...state, isLoading: false, errMess: null, totalEarn: action.totalEarn, totalQuantity: action.totalQuantity};

        case ActionTypes.DAILY_TOTAL_PRICE_AND_QUANTITY_LOADING:
            return {...state, isLoading: true, errMess: null};

        case ActionTypes.DAILY_TOTAL_PRICE_AND_QUANTITY_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}