import {Redirect, Route, Switch} from "react-router-dom";
import IncreaseProduct from "./IncreaseProduct";
import React from "react";
import MarchProductToResources from "../marching/MarchProductToResources";


let StockManagement = (props) => {
    const handleSavingForResources = (values) => {
        props.increaseStock(values.id, values.unitPrice, values.quantity, values.from, values.name);
    };
    const handleSavingForProducts = (values) => {
        //props.increaseStock(values.id, values.unitPrice,values.quantity,values.from, values.name );
        props.updateProduct(values);
    };
    const handleSavingForDailyUsage = (values) => {
        props.addResourcesReport(values.id, values.unitPrice, values.quantity, values.to, values.name);
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
                                                             handleSaving={handleSavingForProducts}
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
                                                             handleSaving={handleSavingForResources}
                                                             changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                                             increaseStock={props.increaseStock}
                                                             products={props.resources}/>}/> />}/>

                    <Route exact path="/management/stock/dailyUsage"
                           component={() => <IncreaseProduct outOfStockProducts={props.outOfStockProducts}
                                                             searchingOutput={props.searchingOutput}
                                                             searchText={props.searchText}
                                                             opName="dailyUsage"
                                                             handleSaving={handleSavingForDailyUsage}
                                                             behaviors={props.behaviors}
                                                             changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                                             increaseStock={props.increaseStock}
                                                             products={props.resources}/>}/> />}/>
                    <Route exact path="/management/stock/marchProductToResources"
                           component={() => <MarchProductToResources marchResourceToProducts={props.marchResourceToProducts}
                                                                     products={props.products} resources={props.resources}
                           />}/>

                    <Redirect to="/management/stock/products"/>
                </Switch>
            </div>
        </div>


    )
}
export default StockManagement;