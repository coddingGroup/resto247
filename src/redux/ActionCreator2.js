import { firestore} from "../firebase/firebase";
import * as ActionTypes from './ActionTypes';

export const changeDailyInvoices = (startDate, endDate) => dispatch =>{
    firestore.collection('invoices').where('createdAt','>=',startDate).where('createdAt','<=',endDate).get()
        .then(snapshot =>{
            let invoices =[];
            snapshot.forEach(doc =>{
                let id = doc.id;
                let data = doc.data();
                invoices.push({id,...data});
            });
            return invoices;
        }).then((invoices) =>{
        dispatch( setDailyInvoice(invoices));
    })
        .catch(error =>{

            console.log('error occur ' + error.message);
            return null;
        })

};
 export const setDailyInvoice = (invoices) =>({
     type: ActionTypes.CHANGE_DAILY_INVOICE,
     payload: invoices
 });







export const changeDailyDetailsInvoices = (startDate, endDate) => dispatch =>{
    firestore.collection('invoiceDetails').where('createdAt','>=',startDate).where('createdAt','<=',endDate).get()
        .then(snapshot =>{
            let dailyInvoicesDetails ={};
            snapshot.forEach(doc =>{
                let id = doc.id;
                let data = doc.data();
               let productName = data.productName;
               let ReceptionistName = data.ReceptionistName;
               let R_existing = dailyInvoicesDetails[productName][ReceptionistName];
               if(R_existing === null || R_existing === undefined){
                   dailyInvoicesDetails[productName][ReceptionistName] = {totalPrice:data.price,totalQuantity:data.quantity}
               }

                       let price = dailyInvoicesDetails[productName][ReceptionistName].totalPrice;
                       let quantity = dailyInvoicesDetails[productName][ReceptionistName].totalQuantity;
                       price+= (data.price* data.quantity) ;
                       quantity+= data.quantity;
                       dailyInvoicesDetails[productName][ReceptionistName] = {totalPrice:price,totalQuantity:quantity}



            });
            let products = Object.keys(dailyInvoicesDetails);
            dispatch(setProductsInDailyInvoiceDetails(products));
            return dailyInvoicesDetails;
        }).then((dailyInvoicesDetails) =>{
        dispatch( setDailyInvoicesDetails(dailyInvoicesDetails));
    })
        .catch(error =>{

            console.log('error occur ' + error.message);
            return null;
        })

};
export const setDailyInvoicesDetails = (dailyInvoicesDetails) =>({
    type: ActionTypes.CHANGE_DAILY_DETAILS_INVOICE,
    payload: dailyInvoicesDetails
});
export const setProductsInDailyInvoiceDetails = (products) =>({
   type:ActionTypes.SET_PRODUCTS_IN_DAILY_INVOICE_DETAILS,
   payload:products
});