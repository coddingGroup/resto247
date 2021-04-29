import React from 'react';
import DairyUsage from './DairyUsage';
import DairyVisits from './DairyVisits';
import ItemsSold from '../UIcomponents/ItemsSold';
import DairyEarning from './DairyEarning';
import ReactDatePicker from '../UIcomponents/ReactDatePicker';
import {Table} from "reactstrap";
import ProductSold from "./ProductSold";
import DailyInvoicesComponent from "./DailyInvoicesComponent";
import DailyStockUp from "./DailyStockUp";

const Dashboard = (props) => {


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2 mt-4">
                    <h3>Choose Date</h3>
                </div>
                <div className="col-12 col-md-8 ">
                    <ReactDatePicker changeDailyDetailsInvoices={props.changeDailyDetailsInvoices}
                                     changeDailyStockUp={props.changeDailyStockUp}
                                     changeDailyInvoices={props.changeDailyInvoices}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3">
                    <DairyVisits/>
                </div>
                <div className="col-12 col-md-3">
                    <ItemsSold/>
                </div>
                <div className="col-12 col-md-3">
                    <DairyEarning/>
                </div>
                <div className="col-12 col-md-3">
                    <ItemsSold/>
                </div>

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
                                 dailyInvoiceDetails={props.dailyInvoiceDetails}
                                 uploadMiscellaneous={props.uploadMiscellaneous}
                                 pushInvoice={props.pushInvoice}
                                 products={props.products}
                                 changeDailyInvoices={props.changeDailyInvoices} dailyInvoices={props.dailyInvoices}/>

                </div>
                <div className="col">
                    <h2>
                        Daily order
                    </h2>
                    <Table responsive hover>
                        <thead>
                        <tr>
                            <th> OrdersId</th>
                            <th> Date</th>
                            <th> Waiter</th>
                            <th> Client Name</th>
                            <th> Total Price</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                        </tr>
                        </tbody>


                    </Table>
                </div>
            </div>
            <div className="row">

                <div className="col">
                    <DailyStockUp
                        dailyStockUp={props.dailyStockUp}
                    />

                </div>
                <div className="col">
                    <h2>
                        Daily order
                    </h2>
                    <Table responsive hover>
                        <thead>
                        <tr>
                            <th> OrdersId</th>
                            <th> Date</th>
                            <th> Waiter</th>
                            <th> Client Name</th>
                            <th> Total Price</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                        </tr>
                        </tbody>


                    </Table>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <DairyUsage/>
                </div>
                <div className="col-12 col-md-6">
                    <DairyUsage/>
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
                        changeDailyInvoices={props.changeDailyInvoices} dailyInvoices={props.dailyInvoices}
                    />
                </div>
            </div>
        </div>


    );
}

export default Dashboard;