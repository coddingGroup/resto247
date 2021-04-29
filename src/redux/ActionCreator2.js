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