import {firebasestore, firestore} from "../firebase/firebase";

const makeInvoicePaid = (invoiceId, callback) =>{
    firestore.collection('invoices').doc(invoiceId).update({
        paymentStatus: 'paid',
        updatedAt: firebasestore.FieldValue.serverTimestamp()

    }).then(() =>{
        let receptionistName = JSON.parse(localStorage.getItem('userCollection')).firstName;
        callback(receptionistName);
    })
        .catch(error => {
            console.log(error.message);
        });
}
export default makeInvoicePaid;