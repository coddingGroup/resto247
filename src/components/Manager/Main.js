import React from 'react';
import Navigation from './UIcomponents/SideNavigation'
import Dashboard from './Reports/Dashboard'
import {Redirect, Route, Switch} from "react-router-dom";
import SignUp from "../SignUp";
import CircleMenu from "../Receptions/UIcomponents/CicleMenu";
import StockManagement from "./Products/StockManagement";


const MainManager = (props) => {
    let items = [
        {
            name: 'Add new Product',
            icon: 'fa fa-plus',
            color: 'btn-success',
        },
        {
            name: 'Add new Resources',
            icon: 'fa fa-trash',
            color: 'btn-danger',
            doFunction: 'togglerModal'
        }

    ];

    return (
        <div className="container-fluid">

            <div className="row align-items-start">

                <div className="col-12 col-md-11 offset-md-1">

                    <CircleMenu uploadResource={props.uploadResource}
                                uploadMiscellaneous={props.uploadMiscellaneous}
                                uploadProduct={props.uploadProduct} items={items}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <Navigation/>
                </div>
                <div className="col-md-10">


                    <Switch>
                        <Route path="/signup" component={() => <SignUp/>}/>
                        <Route path="/management/stock"
                               component={() => <StockManagement outOfStockProducts={props.outOfStockProducts}
                                                                 searchingOutput={props.searchingOutput}
                                                                 searchText={props.searchText}
                                                                 resources={props.resources}
                                                                 increaseStock={props.increaseStock}
                                                                 behaviors={props.behaviors}
                                                                 miscellaneous={props.miscellaneous}
                                                                 uploadMiscellaneous={props.uploadMiscellaneous}
                                                                 updateProduct={props.updateProduct}
                                                                 saveMarchedResource={props.saveMarchedResource}
                                                                 addResourcesReport={props.addResourcesReport}
                                                                 changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                                                 products={props.products}
                                                                 marchResourceToProducts={props.marchResourceToProducts}
                               />}/>
                        <Route exact path="/management/dashboard" component={() => <Dashboard
                            changeDailyDetailsInvoices={props.changeDailyDetailsInvoices}
                            dailyStockUp={props.dailyStockUp}
                            changeDailyStockUp={props.changeDailyStockUp}
                            addToCart={props.addToCart}
                            removeToCart={props.removeToCart}
                            waiters={props.waiters}
                            dailyInvoiceDetails={props.dailyInvoiceDetails}
                            cart={props.cart}
                            otherDailyReports={props.otherDailyReports}
                            changeDailyResourcesReports={props.changeDailyResourcesReports}
                            dailyResourcesReports={props.dailyResourcesReports}
                            changeDailyMiscellaneous={props.changeDailyMiscellaneous}
                            dailyMiscellaneous={props.dailyMiscellaneous}
                            setDailyPopularProduct={props.setDailyPopularProduct}
                            uploadMiscellaneous={props.uploadMiscellaneous}
                            pushInvoice={props.pushInvoice}
                            products={props.products}
                            changeDailyInvoices={props.changeDailyInvoices} dailyInvoices={props.dailyInvoices}/>}/>

                        <Redirect to="/management/dashboard"/>
                    </Switch>

                    {/*{displaySection()}*/}
                </div>

            </div>
        </div>
    );


}

export default MainManager;