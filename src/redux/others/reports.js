import * as ActionTypes from '../ActionTypes';

export const Reports = (state = {
    isLoading: true,
    errMess: null,
    resourceMonthReport: [],
    productMonthReport: [],
    miscellaneousMonthReport:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESOURCE_MONTH_REPORT:
            return {
                ...state, isLoading: false, errMess: null, resourceMonthReport: action.payload
            };
        case ActionTypes.ADD_PRODUCT_MONTH_REPORT:
            return {
                ...state, isLoading: false, errMess: null, productMonthReport: action.payload
            };
        case ActionTypes.ADD_MISCELLANEOUS_MONTH_REPORT:
            return {
                ...state, isLoading: false, errMess: null, miscellaneousMonthReport: action.payload
            };

        // case ActionTypes.SET_PRODUCTS_IN_DAILY_INVOICE_DETAILS:
        //     return {...state, isLoading: false, errMess: null, products: action.payload};
        //
        // case ActionTypes.DAILY_INVOICE_DETAILS_LOADING:
        //     return {...state, isLoading: true, errMess: null, dailyInvoiceDetails: {}};
        //
        // case ActionTypes.DAILY_INVOICE_DETAILS_FAILED:
        //     return {...state, isLoading: false, errMess: action.payload, dailyInvoiceDetails: {}};

        default:
            return state;
    }
}