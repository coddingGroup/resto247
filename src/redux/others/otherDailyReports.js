import * as ActionTypes from '../ActionTypes';

export const OtherDailyReports = (state = {
    isLoading: true,
    errMess: null,
    totalEarn: null,
    totalQuantity:null,
    totalInvoices:null,
    totalStockUpMoney:null,
    totalMiscellaneousMoney:null,
    totalStockOutMoney:null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DAILY_TOTAL_PRICE_AND_QUANTITY:
            return {...state, isLoading: false, errMess: null, totalEarn: action.totalEarn, totalQuantity: action.totalQuantity};

        case ActionTypes.ADD_DAILY_TOTAL_INVOICES:
            return {...state, isLoading: false, errMess: null, totalInvoices: action.totalInvoices};

        case ActionTypes.ADD_DAILY_TOTAL_STOCK_OUT_MONEY:
            return {...state, isLoading: false, errMess: null, totalStockOutMoney: action.totalStockOutMoney};

        case ActionTypes.ADD_DAILY_TOTAL_MISCELLANEOUS_MONEY:
            return {...state, isLoading: false, errMess: null, totalMiscellaneousMoney: action.totalMiscellaneousMoney};

        case ActionTypes.ADD_DAILY_TOTAL_STOCK_UP_MONEY:
            return {...state, isLoading: false, errMess: null, totalStockUpMoney: action.totalStockUpMoney};

        case ActionTypes.DAILY_TOTAL_PRICE_AND_QUANTITY_LOADING:
            return {...state, isLoading: true, errMess: null};

        case ActionTypes.DAILY_TOTAL_PRICE_AND_QUANTITY_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}