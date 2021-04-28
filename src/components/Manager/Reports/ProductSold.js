import {Table} from "reactstrap";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const ProductSold = (props) => {

            let allTr = props.dailyInvoices.map((invoice, index) =>{
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{invoice.clientName}</td>
                        <td>{invoice.id}</td>
                    </tr>
                )
            })

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
                {allTr}
                </tbody>


            </Table>




            {/*<div id="scrollableDiv" className="card fixedDiv square scrollbar-cyan bordered-cyan">*/}
            {/*    <div className="card-body">*/}
            {/*        <InfiniteScroll*/}
            {/*            scrollableTarget={this.props.scrollableDiv}*/}
            {/*            dataLength={this.props.items2.length}*/}
            {/*            next={this.fetchMoreData}*/}
            {/*            hasMore={this.props.hasMoreS}*/}
            {/*            loader={<h4>Loading...</h4>}*/}
            {/*            endMessage={*/}
            {/*                <p> no more results </p>*/}
            {/*            }*/}

            {/*        >*/}
            {/*            <div className="row">*/}
            {/*                {*/}
            {/*                    this.props.items2.map(*/}
            {/*                        (item, i) => {*/}
            {/*                            return (*/}
            {/*                                <span>{item}*/}
            {/*                    */}
            {/*                    </span>*/}
            {/*                            )*/}
            {/*                        }*/}
            {/*                    )*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        </InfiniteScroll>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}