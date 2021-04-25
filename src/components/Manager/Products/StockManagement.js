import {Redirect, Route, Switch} from "react-router-dom";
import SignUp from "../../SignUp";
import IncreaseProduct from "./IncreaseProduct";
import Dashboard from "../Reports/Dashboard";
import React from "react";
import MarchProductToResources from "./MarchProductToResources";
import Navigation from "../UIcomponents/SideNavigation";


let StockManagement = (props) => {

    return (
        <div className="row">
            <div className="col-md-12">
                <Switch>
                    <Route exact path="/management/stock/products"
                           component={() => <IncreaseProduct outOfStockProducts={props.outOfStockProducts}
                                                             searchingOutput={props.searchingOutput}
                                                             searchText={props.searchText}
                                                             opName="products"
                                                             behaviors={props.behaviors}
                                                             changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                                             increaseStock={props.increaseStock}
                                                             products={props.products}/>}/>
                    <Route exact path="/management/stock/Resources"
                           component={() => <IncreaseProduct outOfStockProducts={props.outOfStockProducts}
                                                             searchingOutput={props.searchingOutput}
                                                             searchText={props.searchText}
                                                             opName="resources"
                                                             behaviors={props.behaviors}
                                                             changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                                             increaseStock={props.increaseStock}
                                                             products={props.resources}/>}/> />}/>

                    <Route exact path="/management/stock/dailyUsage"
                           component={() => <IncreaseProduct outOfStockProducts={props.outOfStockProducts}
                                                             searchingOutput={props.searchingOutput}
                                                             searchText={props.searchText}
                                                             opName="dailyUsage"
                                                             behaviors={props.behaviors}
                                                             changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                                             increaseStock={props.increaseStock}
                                                             products={props.resources}/>}/> />}/>
                    <Route exact path="/management/stock/marchProductToResources"
                           component={() => <MarchProductToResources/>}/>

                    <Redirect to="/management/stock/products"/>
                </Switch>
            </div>
        </div>


    )
}
export default StockManagement;