import * as ActionTypes from '../ActionTypes';

export const NonPaidInvoice = (state = {
    isLoading: true,
    errMess: null,
    nonPaidInvoices: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_NON_PAID_INVOICES:
            return {...state, isLoading: false, errMess: null, nonPaidInvoices: action.payload};

        case ActionTypes.NON_PAID_INVOICES_LOADING:
            return {...state, isLoading: true, errMess: null, nonPaidInvoices: []};

        case ActionTypes.NON_PAID_INVOICES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, nonPaidInvoices: []};

        default:
            return state;
    }
}