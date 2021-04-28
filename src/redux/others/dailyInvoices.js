import * as ActionTypes from '../ActionTypes';

export const DailyInvoices = (state = {
    isLoading: true,
    errMess: null,
    dailyInvoices: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_DAILY_INVOICE:
            return {...state, isLoading: false, errMess: null, dailyInvoices: action.payload};

        case ActionTypes.DAILY_INVOICE_LOADING:
            return {...state, isLoading: true, errMess: null, dailyInvoices: []};

        case ActionTypes.DAILY_INVOICE_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dailyInvoices: []};

        default:
            return state;
    }
}