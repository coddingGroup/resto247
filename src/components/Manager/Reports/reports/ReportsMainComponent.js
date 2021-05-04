
import DailyInvoicesComponent from "../DailyInvoicesComponent";
import React from "react";
import ChooseMonth from "./ChooseMonth";
import ProfitCard from "./ProfitCard";

const ReportsMainComponent = (props) => {
    let monthExpensesOnStock = 0;
    props.reports.resourceMonthReport.map(report =>{
        monthExpensesOnStock += report.totalCost;
    });

    let monthIncome = 0;
    props.reports.productMonthReport.map(report =>{
        monthIncome+= report.totalPrice;
    })
    let monthExpenseMiscellaneous = 0;
    props.reports.miscellaneousMonthReport.map(report =>{
        if(report.isExpanse){
            monthExpenseMiscellaneous+= report.totalMoney;
        }
    })

        // let popularProductCalc = () =>{
    //     let popularProduct = {
    //         totalPrice:0,
    //         totalQuantity: 0,
    //         productName:''
    //     };
    //     if(props.dailyInvoiceDetails === null || props.dailyInvoiceDetails){
    //         return;
    //     }
    //     else if(props.dailyInvoiceDetails.dailyInvoiceDetails === null || props.dailyInvoiceDetails.dailyInvoiceDetails){
    //         return;
    //     }
    //     let products = props.dailyInvoiceDetails.products;
    //      if(products === undefined || products ===null){
    //         return
    //     }
    //     products.forEach((product) => {
    //
    //         let receptionist = Object.keys(props.dailyInvoices.dailyInvoices[product]);
    //         let totalPrice = 0;
    //         let totalQuantity = 0;
    //         receptionist.forEach((rec) => {
    //             totalPrice += parseInt(props.dailyInvoices.dailyInvoices[product][rec].totalPrice);
    //             totalQuantity += parseInt(props.dailyInvoices.dailyInvoices[product][rec].totalQuantity);
    //             if( popularProduct.totalQuantity <= totalQuantity){
    //                 popularProduct.totalQuantity = totalQuantity;
    //                 popularProduct.totalPrice = totalPrice;
    //                 popularProduct.productName = product;
    //             }
    //
    //
    //         });
    //
    //
    //     });
    //     props.setDailyPopularProduct(popularProduct);
    // }
    //
    //
    //
    // popularProductCalc();




    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2 mt-4">
                    <h3>Choose Date</h3>
                </div>
                <div className="col-12 col-md-8 ">
                    <ChooseMonth/>


                </div>
            </div>
            <div className="row">
                <ProfitCard monthIncone={monthIncome} monthExpensesOnStock={monthExpensesOnStock} monthExpenseMiscellaneous={monthExpenseMiscellaneous} />
            </div>
            <div className="row">
                <div className="col">

                </div>
            </div>

            <div className="row">
                <div className="col-12">


                    <DailyInvoicesComponent
                        dailyInvoices={props.dailyInvoices}
                        addToCart={props.addToCart}
                        removeToCart={props.removeToCart}
                        waiters={props.waiters}
                        cart={props.cart}
                        uploadMiscellaneous={props.uploadMiscellaneous}
                        pushInvoice={props.pushInvoice}
                        products={props.products}
                        changeDailyInvoices={props.changeDailyInvoices}
                    />
                </div>
            </div>
        </div>


    );
}

export default ReportsMainComponent;