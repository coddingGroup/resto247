import {Redirect, Route, Switch} from "react-router-dom";
import SignUp from "../../SignUp";
import IncreaseProduct from "./IncreaseProduct";
import Dashboard from "../Reports/Dashboard";
import React from "react";
import MarchProductToResources from "./MarchProductToResources";
import Navigation from "../UIcomponents/SideNavigation";


let StockManagement = (props) => {
    const handleSaving = (values) =>{
        props.increaseStock(values.id, values.unitPrice,values.quantity,values.typeOfUser, values.name );
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <Switch>
                    <Route exact path="/management/stock/products"
                           component={() => <IncreaseProduct outOfStockProducts={props.outOfStockProducts}
                                                             searchingOutput={props.searchingOutput}
                                                             searchText={props.searchText}
                                                             opName="products"
                                                             handleSaving={handleSaving}
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
                                                             handleSaving={handleSaving}
                                                             changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                                             increaseStock={props.increaseStock}
                                                             products={props.resources}/>}/> />}/>

                    <Route exact path="/management/stock/dailyUsage"
                           component={() => <IncreaseProduct outOfStockProducts={props.outOfStockProducts}
                                                             searchingOutput={props.searchingOutput}
                                                             searchText={props.searchText}
                                                             opName="dailyUsage"
                                                             handleSaving={handleSaving}
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