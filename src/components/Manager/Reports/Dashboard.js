import React from 'react';
import DairyUsage from './DairyUsage';
import ItemsSold from '../UIcomponents/ItemsSold';
import ReactDatePicker from '../UIcomponents/ReactDatePicker';
import ProductSold from "./ProductSold";
import DailyInvoicesComponent from "./DailyInvoicesComponent";
import DailyStockUp from "./DailyStockUp";
import DailyMiscellaneousComponent from "./DailyMiscellaneousComponent";
import DailyResourcesReportsComponent from "./DailyResourcesReportsComponent";

const Dashboard = (props) => {
    let dailyTotals = [{
        icon:"fa fa-shopping-cart",
        name:"Sold",
        color:'badge-warning',
        unit:"Products",
        value:props.otherDailyReports.totalQuantity===null ? "--": props.otherDailyReports.totalQuantity
    },{
        icon:"fa fa-dollar",
        name:"Earning",
        unit: 'rwf',
        color:'',
        value:props.otherDailyReports.totalEarn===null ? "--": props.otherDailyReports.totalEarn
    },{
        icon:"fa fa-dollar",
        name:"Orders",
        unit: 'Invoices',
        color:'',
        value:props.otherDailyReports.totalInvoices===null ? "--": props.otherDailyReports.totalInvoices
    },
        {
            icon:"fa fa-dollar",
            name:"Stock up",
            unit: 'rwf',
            color:'badge-primary',
            value:props.otherDailyReports.totalStockUpMoney===null ? "--": props.otherDailyReports.totalStockUpMoney
        },
        {
            icon:"fa fa-dollar",
            name:"Expanses ",
            unit: 'rwf',
            color:'badge-danger',
            value:props.otherDailyReports.totalMiscellaneousMoney===null ? "--": props.otherDailyReports.totalMiscellaneousMoney
        },
        {
            icon:"fa fa-dollar",
            name:"Stock out ",
            unit: 'rwf',
            color:'badge-warning',
            value:props.otherDailyReports.totalStockOutMoney===null ? "--": props.otherDailyReports.totalStockOutMoney
        }
    ];



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


    let allCardsOfTotal = dailyTotals.map(oneDailyTotal =>{
        return(
            <div className="col">
                <ItemsSold icon={oneDailyTotal.icon} color={oneDailyTotal.color} name={oneDailyTotal.name} unit={oneDailyTotal.unit} value={oneDailyTotal.value} />
            </div>
        )
    })


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2 mt-4">
                    <h3>Choose Date</h3>
                </div>
                <div className="col-12 col-md-8 ">
                    <ReactDatePicker changeDailyDetailsInvoices={props.changeDailyDetailsInvoices}
                                     changeDailyStockUp={props.changeDailyStockUp}
                                     changeDailyInvoices={props.changeDailyInvoices}
                                     changeDailyResourcesReports={props.changeDailyResourcesReports}
                                     changeDailyMiscellaneous={props.changeDailyMiscellaneous}
                    />


                </div>
            </div>
            <div className="row">
                {/*<div className="col-12 col-md-3">*/}
                {/*    <DairyVisits/>*/}
                {/*</div>*/}
                {/*<div className="col-12 col-md-3">*/}
                {/*    <ItemsSold otherDailyReports={props.otherDailyReports} />*/}
                {/*</div>*/}
                {/*<div className="col-12 col-md-3">*/}
                {/*    <DairyEarning otherDailyReports={props.otherDailyReports} />*/}
                {/*</div>*/}
                {/*<div className="col-12 col-md-3">*/}
                {/*    <ItemsSold/>*/}
                {/*</div>*/}
                {allCardsOfTotal}
            </div>
            <div className="row">
                <div className="col">

                </div>
            </div>
            <div className="row">

                <div className="col">
                    <ProductSold dailyInvoices={props.dailyInvoices}
                                 addToCart={props.addToCart}
                                 removeToCart={props.removeToCart}
                                 waiters={props.waiters}
                                 cart={props.cart}
                                 setDailyPopularProduct={props.setDailyPopularProduct}
                                 dailyInvoiceDetails={props.dailyInvoiceDetails}
                                 uploadMiscellaneous={props.uploadMiscellaneous}
                                 pushInvoice={props.pushInvoice}
                                 products={props.products}
                                 changeDailyInvoices={props.changeDailyInvoices}/>

                </div>
                <div className="col">
                    <DailyMiscellaneousComponent dailyMiscellaneous={props.dailyMiscellaneous}/>
                </div>
            </div>
            <div className="row">

                <div className="col">
                    <DailyStockUp
                        dailyStockUp={props.dailyStockUp}
                    />

                </div>
                <div className="col">
                    <DailyResourcesReportsComponent dailyResourcesReports={props.dailyResourcesReports} />
                </div>
            </div>

            {/*<div className="row">*/}
            {/*    <div className="col-12">*/}
            {/*        <div className="container">*/}
            {/*            <div className="row">*/}
            {/*                <div className="col-12">*/}
            {/*                    <DairyUsage popularProduct={props.otherDailyReports.popularProduct} />*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*</div>*/}


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

export default Dashboard;