import * as ActionTypes from '../ActionTypes';

export const Invoices = (state = {
    isLoading: true,
    errMess: null,
    detailLoading: true,
    detailErrMess: null,
    invoices: {}
}, action) => {
    let prevInv = state.invoices;

    switch (action.type) {
        case ActionTypes.ADD_INVOICE:
            prevInv[action.payload.id] = action.payload;
            prevInv[action.payload.id].invoiceDetails = null;
            return {...state, isLoading: false, errMess: null, invoices: prevInv};

        case ActionTypes.INVOICE_LOADING:
            return {...state, isLoading: true, errMess: null};

        case ActionTypes.INVOICE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_INVOICE_DETAILS:
            let invoiceDetails = prevInv[action.invoiceId].invoiceDetails;
            prevInv[action.invoiceId].invoiceDetails = [invoiceDetails, action.payload];
            return {...state, isLoading: false, errMess: null, invoices: prevInv};
        case ActionTypes.INVOICE_DETAILS_LOADING:
            return {...state, detailLoading: true, detailErrMess: null};

        case ActionTypes.INVOICE_DETAILS_FAILED:
            return {...state, detailLoading: false, detailErrMess: action.payload};
        default:
            return state;
    }
}