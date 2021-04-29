import {firestore} from "../firebase/firebase";
import * as ActionTypes from './ActionTypes';

export const changeDailyInvoices = (startDate, endDate) => dispatch => {
    firestore.collection('invoices').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            let invoices = [];
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                invoices.push({id, ...data});
            });
            return invoices;
        }).then((invoices) => {
        dispatch(setDailyInvoice(invoices));
    })
        .catch(error => {

            console.log('error occur ' + error.message);
            return null;
        })

};
export const setDailyInvoice = (invoices) => ({
    type: ActionTypes.CHANGE_DAILY_INVOICE,
    payload: invoices
});


export const changeDailyStockUp = (startDate, endDate) => dispatch => {
    firestore.collection('stockUp').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            let dailyStockUp = [];
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                dailyStockUp.push({id, ...data});
            });
            return dailyStockUp;
        }).then((dailyStockUp) => {
        dispatch(setStockUp(dailyStockUp));
    })
        .catch(error => {

            console.log('error occur ' + error.message);
            return null;
        })

};
export const setStockUp = (dailySockUp) => ({
    type: ActionTypes.CHANGE_DAILY_STOCK_UP,
    payload: dailySockUp
});



export const changeNonPaidInvoices = (receptionistName) => dispatch => {

    firestore.collection('invoices').where('paymentStatus','==','notPaid').where('receptionistName','==',receptionistName).get()
        .then(snapshot =>{
            let receptionistInvoices = [];
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                receptionistInvoices.push({id, ...data});
            });
            return receptionistInvoices;
        }).then(receptionistInvoices =>{
        dispatch(addNOnPaidInvoices(receptionistInvoices));
    }).catch(error =>{
        dispatch(nonPaidInvoicesFailed(error.message));
        console.log('error error with message ' + error.message);
    });

};
export const addNOnPaidInvoices = (receptionistInvoices) => ({
    type: ActionTypes.CHANGE_NON_PAID_INVOICES,
    payload: receptionistInvoices
});
export const nonPaidInvoicesFailed=(errM)=>({
    type: ActionTypes.NON_PAID_INVOICES_FAILED,
    payload: errM
})




export const changeDailyDetailsInvoices = (startDate, endDate) => dispatch => {
    console.log("fist step");
    firestore.collection('invoiceDetails').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            console.log("sec step");
            let dailyInvoicesDetails = {};
            snapshot.forEach(doc => {
                console.log("third step");
                let id = doc.id;
                let data = doc.data();
                let productName = (data.productName).replaceAll(' ', '_');
                let receptionistName = (data.receptionistName).replaceAll(' ', '_');
                let R_existing = dailyInvoicesDetails[productName];
                if (R_existing === null || R_existing === undefined) {
                    console.log("4 step of if");
                    dailyInvoicesDetails[productName] = {};
                    dailyInvoicesDetails[productName][receptionistName] = {};
                    dailyInvoicesDetails[productName][receptionistName] = {
                        totalPrice: parseInt(data.price),
                        totalQuantity: parseInt(data.quantity),
                        id:id
                    };
                } else if (dailyInvoicesDetails[productName][receptionistName] === null || dailyInvoicesDetails[productName][receptionistName] === undefined) {
                    dailyInvoicesDetails[productName][receptionistName] = {};
                    dailyInvoicesDetails[productName][receptionistName] = {
                        totalPrice: parseInt(data.price),
                        totalQuantity: parseInt(data.quantity),
                        id
                    };
                } else {
                    console.log("4 step of else");

                    let price = dailyInvoicesDetails[productName][receptionistName].totalPrice;
                    let quantity = dailyInvoicesDetails[productName][receptionistName].totalQuantity;
                    price += (parseInt(data.price) * parseInt(data.quantity));
                    quantity += parseInt(data.quantity);
                    dailyInvoicesDetails[productName][receptionistName] = {totalPrice: price, totalQuantity: quantity,id}
                }


            });


            return dailyInvoicesDetails;
        }).then((dailyInvoicesDetails) => {
        let products = Object.keys(dailyInvoicesDetails);
        //dispatch(setProductsInDailyInvoiceDetails(products));
        console.log("5 step of if");
        dispatch(setDailyInvoicesDetails(dailyInvoicesDetails, products));
    })
        .catch(error => {

            console.log('error occur ' + error.message);
            return null;
        })

};
export const setDailyInvoicesDetails = (dailyInvoicesDetails, products) => ({
    type: ActionTypes.CHANGE_DAILY_DETAILS_INVOICE,
    payload: dailyInvoicesDetails,
    products: products
});
export const setProductsInDailyInvoiceDetails = (products) => ({
    type: ActionTypes.SET_PRODUCTS_IN_DAILY_INVOICE_DETAILS,
    payload: products
});





export const changeDailyResourcesReports = (startDate, endDate) => dispatch => {
    firestore.collection('resourcesReports').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            let dailyResourcesReport = [];
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                dailyResourcesReport.push({id, ...data});
            });
            return dailyResourcesReport;
        }).then((dailyResourcesReport) => {
        dispatch(setDailyResourcesReport(dailyResourcesReport));
    })
        .catch(error => {

            console.log('error occur ' + error.message);
            return null;
        })

};
export const setDailyResourcesReport = (dailyResourcesReport) => ({
    type: ActionTypes.CHANGE_DAILY_RESOURCES_REPORTS,
    payload: dailyResourcesReport
});



export const changeDailyMiscellaneous = (startDate, endDate) => dispatch => {
    firestore.collection('miscellaneous').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            let dailyMiscellaneous = [];
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                dailyMiscellaneous.push({id, ...data});
            });
            return dailyMiscellaneous;
        }).then((dailyMiscellaneous) => {
        dispatch(setDailyMiscellaneous(dailyMiscellaneous));
    })
        .catch(error => {

            console.log('error occur ' + error.message);
            return null;
        })

};
export const setDailyMiscellaneous = (dailyMiscellaneous) => ({
    type: ActionTypes.CHANGE_DAILY_MISCELLANEOUS,
    payload: dailyMiscellaneous
});
