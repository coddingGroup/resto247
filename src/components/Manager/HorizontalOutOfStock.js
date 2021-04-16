import FlippingCard from "./FlippingCard";
import './Manager.css';
import {Loading} from "../LoadingComponent";
import React, {Component} from "react";












const OutOfStock = ({allProducts, isLoading, errMess}) =>{

    if (isLoading) {
        return (
            <div className="horizontalContent">
                <h2>Out Of Stock Product</h2>
                <div className="row flex-row flex-nowrap">
                    <Loading />
                </div></div>

        );
    }
    else if (errMess) {
        return (
            <h4> {errMess} </h4>
        );
    }
    else{
        let allOutOfStock = allProducts.map(
            (product) =>{
                return(

                    <FlippingCard oneProduct={product}/>
                )
            }
        )
        const allCardsOfOutOfStock = allOutOfStock.map(
            item =>{
                return(
                    <div >
                        <div className="mr-2">
                            {item}
                        </div>

                    </div>
                )
            }
        )



        return(
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