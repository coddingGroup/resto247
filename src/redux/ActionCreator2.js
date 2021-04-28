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