import FlippingCard from "../FlippingCard";
import '../../../css/Manager.css';
import {Loading} from "../../LoadingComponent";
import React from "react";

const OutOfStock = (props) => {

    if (props.isLoading) {
        return (
            <div className="horizontalContent">
                <h2>Out Of Stock Product</h2>
                <div className="row flex-row flex-nowrap">
                    <Loading/>
                </div>
            </div>

        );
    } else if (props.errMess) {
        return (
            <h4> {props.errMess} </h4>
        );
    } else {
        let allOutOfStock = props.allProducts.map(
            (product) => {
                return (

                    <FlippingCard oneProduct={product}
                                  opName={props.opName}
                                  behaviors={props.behaviors}
                                  handleSaving={props.handleSaving}
                                  changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                    />
                )
            }
        )
        const allCardsOfOutOfStock = allOutOfStock.map(
            item => {
                return (
                    <div>
                        <div className="mr-2">
                            {item}
                        </div>

                    </div>
                )
            }
        )


        return (
            <div className="horizontalContent">
                <h2>Out Of Stock Product</h2>
                <div className="row flex-row flex-nowrap">

                    {allCardsOfOutOfStock}
                </div>
            </div>
        )
    }


}

export default OutOfStock;