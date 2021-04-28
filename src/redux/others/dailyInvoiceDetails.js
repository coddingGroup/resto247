import * as ActionTypes from '../ActionTypes';

export const DailyInvoiceDetails = (state = {
    isLoading: true,
    errMess: null,
    products:[],
    dailyInvoiceDetails: {}
}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_DAILY_DETAILS_INVOICE:
            return {...state, isLoading: false, errMess: null, dailyInvoiceDetails: action.payload,products: action.products};

        case ActionTypes.SET_PRODUCTS_IN_DAILY_INVOICE_DETAILS:
            return {...state, isLoading: false, errMess: null, products: action.payload};

        case ActionTypes.DAILY_INVOICE_DETAILS_LOADING:
            return {...state, isLoading: true, errMess: null, dailyInvoiceDetails: {}};

        case ActionTypes.DAILY_INVOICE_DETAILS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dailyInvoiceDetails: {}};

        default:
            return state;
    }
}