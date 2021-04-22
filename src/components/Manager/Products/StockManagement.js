import {Redirect, Route, Switch} from "react-router-dom";
import SignUp from "../../SignUp";
import IncreaseProduct from "./IncreaseProduct";
import Dashboard from "../Reports/Dashboard";
import React from "react";


let StockManagement = (props) => {


    return (
        <Switch>
            <Route path="/signup" component={() => <SignUp/>}/>
            <Route exact path="products" component={() => <IncreaseProduct outOfStockProducts={props.outOfStockProducts}
                                                                           searchingOutput={props.searchingOutput}
                                                                           searchText={props.searchText}

                                                                           products={props.products}/>}/>
            <Route exact path="Resources"
                   component={() => <IncreaseProduct outOfStockProducts={props.outOfStockProducts}
                                                     searchingOutput={props.searchingOutput}
                                                     searchText={props.searchText}

                                                     products={props.products}/>}/> />}/>

            <Redirect to="/management/dashboard"/>
        </Switch>
    )
}
export default StockManagement;