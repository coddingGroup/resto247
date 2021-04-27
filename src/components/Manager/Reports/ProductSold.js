import {Table} from "reactstrap";
import React from "react";

export const ProductSold = () => {
    return (
        <div>
            <h2>
                Product sold
            </h2>
            <Table responsive hover>
                <thead>
                <tr>
                    <th> Id</th>
                    <th> Name</th>
                    <th> Quantity</th>
                    <th> Unity Price</th>
                    <th> Total Price</th>
                    <th> Day profit/product</th>

                </tr>
                </thead>
                <tbody>
                <tr>

                </tr>
                </tbody>


            </Table>




            <div id="scrollableDiv" className="card fixedDiv square scrollbar-cyan bordered-cyan">
                <div className="card-body">

                </div>
            </div>
        </div>
    )
}