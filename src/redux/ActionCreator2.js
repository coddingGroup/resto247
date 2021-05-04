import {firestore} from "../firebase/firebase";
import * as ActionTypes from './ActionTypes';
import {getResourceWithId} from "../functions/getResourceWithId";

export const changeDailyInvoices = (startDate, endDate) => dispatch => {
    firestore.collection('invoices').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            let invoices = [];
            let totalInvoices=0;
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                invoices.push({id, ...data});
                ++totalInvoices;
            });
            dispatch(addTotalDailyInvoices(totalInvoices))
            return invoices;
        }).then((invoices) => {
        dispatch(setDailyInvoice(invoices));
    })
        .catch(error => {

            console.log('error occur ' + error.message);
            return null;
        })

};
export const addTotalDailyInvoices = (total) =>({
    type: ActionTypes.ADD_DAILY_TOTAL_INVOICES,
    totalInvoices: total
})
export const setDailyInvoice = (invoices) => ({
    type: ActionTypes.CHANGE_DAILY_INVOICE,
    payload: invoices
});


export const changeDailyStockUp = (startDate, endDate) => dispatch => {
    firestore.collection('stockUp').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            let dailyStockUp = [];
            let totalStockUpMoney=0;
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                totalStockUpMoney = parseInt(data.unitPrice) * parseInt(data.quantity);
                dailyStockUp.push({id, ...data});
            });
            dispatch(addTotalStockUpMoney(totalStockUpMoney));
            return dailyStockUp;
        }).then((dailyStockUp) => {
        dispatch(setStockUp(dailyStockUp));
    })
        .catch(error => {

            console.log('error occur ' + error.message);
            return null;
        })

};
export const addTotalStockUpMoney = (totalStockUpMoney) =>({
    type: ActionTypes.ADD_DAILY_TOTAL_STOCK_UP_MONEY,
    totalStockUpMoney: totalStockUpMoney
});
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
            let totalEarn = 0;
            let totalDayQuantity=0;
            let dailyInvoicesDetails = {};
            snapshot.forEach(doc => {
                console.log("third step");
                let id = doc.id;
                let data = doc.data();
                totalDayQuantity += parseInt(data.quantity);
                totalEarn += parseInt(data.price);
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

            dispatch(addDailyTotalPriceAndQuantity(totalEarn,totalDayQuantity));
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

export const addDailyTotalPriceAndQuantity = (totalEarn, totalQuantity) =>({
    type: ActionTypes.ADD_DAILY_TOTAL_PRICE_AND_QUANTITY,
    totalEarn: totalEarn,
    totalQuantity:totalQuantity
})



export const changeDailyResourcesReports = (startDate, endDate) => dispatch => {
    firestore.collection('resourcesReports').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            let dailyResourcesReport = [];
            let totalStockOutMoney = 0;
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                totalStockOutMoney += parseInt(data.unitPrice) * parseInt(data.quantity);
                dailyResourcesReport.push({id, ...data});
            });
            dispatch(addTotalDailyOutStockMoney(totalStockOutMoney));
            return dailyResourcesReport;
        }).then((dailyResourcesReport) => {
        dispatch(setDailyResourcesReport(dailyResourcesReport));
    })
        .catch(error => {

            console.log('error occur ' + error.message);
            return null;
        })

};
export const addTotalDailyOutStockMoney = total => ({
   type:ActionTypes.ADD_DAILY_TOTAL_STOCK_OUT_MONEY,
    totalStockOutMoney: total

});
export const setDailyResourcesReport = (dailyResourcesReport) => ({
    type: ActionTypes.CHANGE_DAILY_RESOURCES_REPORTS,
    payload: dailyResourcesReport
});





export const setDailyPopularProduct = (product) => ({
    type: ActionTypes.SET_DAILY_POPULAR_PRODUCT,
    popularProduct:product
})



export const changeDailyMiscellaneous = (startDate, endDate) => dispatch => {
    firestore.collection('miscellaneous').where('createdAt', '>=', startDate).where('createdAt', '<=', endDate).get()
        .then(snapshot => {
            let dailyMiscellaneous = [];
            let totalMiscellaneousMoney=0;
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                totalMiscellaneousMoney += parseInt(data.price);
                dailyMiscellaneous.push({id, ...data});
            });
            dispatch(addTotalDailyMiscellaneousMoney(totalMiscellaneousMoney));
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

export const addTotalDailyMiscellaneousMoney = (total) =>({
    type:ActionTypes.ADD_DAILY_TOTAL_MISCELLANEOUS_MONEY,
    totalMiscellaneousMoney:total
})

export const fetchMatchResourceToProducts = () =>dispatch =>{
   return  firestore.collection('marchResourceToProducts').get()
        .then(snapshot =>{
            let marchResourceToProducts = [];
            snapshot.forEach(doc =>{
                let id = doc.id;
                let data = doc.data();

                marchResourceToProducts.push({id, ...data});

            });
            return marchResourceToProducts;
        }).then(marchResourceToProducts =>{
            console.log(JSON.stringify(marchResourceToProducts));
            dispatch(setMarchResourceToProducts(marchResourceToProducts));
    }).catch(error =>{
        console.log(error.message);
    })
}

export const setMarchResourceToProducts = (marchResourceToProducts) =>({
   type:ActionTypes.SET_MARCH_RESOURCE_TO_PRODUCTS,
   payload:marchResourceToProducts
});

export const saveMarchedResource = (resource, products) => dispatch =>{

    let productsTo = [];
    for (let index in products) {
        let oneProduct = {};
        oneProduct.id = products[index].id;
        oneProduct.name = products[index].name;
        oneProduct.quantity = products[index].matchProductQuantity;

        productsTo.push(oneProduct);
    }
    let data = {
        featured:true,
        image: resource.image,
        resourceName: resource.name,
        resourceId: resource.id,
        resourceQuantity: resource.matchResourceQuantity,
        products: productsTo

    };
    firestore.collection('marchResourceToProducts').add(data).then(docRef =>{

        firestore.collection('marchResourceToProducts').doc(docRef.id).get()
            .then(doc =>{
                if(doc.exists){
                    let id = doc.id;
                    let data = doc.data();
                    dispatch(addMarchResourceToProducts({id, ...data}));
                }
                else{
                    console.log("doc not exists");
                }
            }).catch(error =>{
                console.log(error.message);
        })
    }).catch(error =>{
        console.log(error.message);
    });
}
let addMarchResourceToProducts = (data)=>({
    type:ActionTypes.ADD_MARCH_RESOURCE_TO_PRODUCTS,
    payload: data
})

export const fetchResourceMonthReport = (year , month) => dispatch =>{
    firestore.collection('resourceMonthReport').where('year','==',year).where('month','==',month).get()
        .then(snapshot =>{
            let resourceMonthReport =[];
            snapshot.forEach(doc =>{
                let id = doc.id;
                let data = doc.data();

                resourceMonthReport.push({id,...data});
            });
            return resourceMonthReport;
        }).then((resourceMonthReport) =>{
            dispatch(setResourceMonthReport(resourceMonthReport));

    }).catch(error =>{
        console.log(error.message);
    });
};
export const setResourceMonthReport =(resourceMonthReport) =>({
   type:ActionTypes.ADD_RESOURCE_MONTH_REPORT,
    payload: resourceMonthReport
});



export const fetchProductMonthReport = (year , month) => dispatch =>{
    firestore.collection('productMonthReport').where('year','==',year).where('month','==',month).get()
        .then(snapshot =>{
            let productMonthReport =[];
            snapshot.forEach(doc =>{
                let id = doc.id;
                let data = doc.data();
                productMonthReport.push({id,...data});
            });
            return productMonthReport;
        }).then((productMonthReport) =>{
        dispatch(setProductMonthReport(productMonthReport));

    }).catch(error =>{
        console.log(error.message);
    });
};
export const setProductMonthReport =(productMonthReport) =>({
    type:ActionTypes.ADD_PRODUCT_MONTH_REPORT,
    payload: productMonthReport
});