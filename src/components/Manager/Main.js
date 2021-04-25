import React, {useState} from 'react';
import Navigation from './UIcomponents/SideNavigation'
import Dashboard from './Reports/Dashboard'
import {Redirect, Route, Switch} from "react-router-dom";
import IncreaseProduct from "./Products/IncreaseProduct";
import SignUp from "../SignUp";
import CircleMenu from "../Receptions/UIcomponents/CicleMenu";
import {CSSTransition, TransitionGroup} from "react-transition-group";
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

                    <CircleMenu items={items}/>
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
                                                                 changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                                                 products={props.products}/>}/>
                        <Route exact path="/management/dashboard" component={() => <Dashboard/>}/>

                        <Redirect to="/management/dashboard"/>
                    </Switch>

                    {/*{displaySection()}*/}
                </div>

            </div>
        </div>
    );


}

export default MainManager;