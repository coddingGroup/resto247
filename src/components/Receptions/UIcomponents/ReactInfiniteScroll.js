import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RenderCard3 from "../../homepagecomponents/RenderCard3";
import {Component} from 'react';


const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};
let lastIndex = 12;

class ReactInfiniteScroll extends Component {

    constructor(props) {
        super(props);
        let opElement = this.props.products.slice(0, lastIndex);
        let menu = opElement.map((product) => {
            return (
                <div className="">
                    <RenderCard3 item={product}
                                 key={product.id}
                                 cart={this.props.cart}
                                 addToCart={this.props.addToCart}
                                 removeToCart={this.props.removeToCart}

                    />
                </div>
            );
        });
        const arr = [
            ...menu
        ];


        // this.state = {
        //     items2: arr,
        //     hasMoreS:true,
        //     itemsToFetch: lastIndex,
        //     itemToStartOn: lastIndex
        // };

    }


    fetchMoreData = () => {

        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            // this.setState({
            //
            //     items2: [...this.state.items2,...this.funMenu()]
            //
            // });
            let item2 = [...this.props.items2, ...this.props.funMenu()];

            this.props.setItems2(item2);
        }, 1500);
    };


    render() {
        return (
            <div className="mt-2">
                <InfiniteScroll
                    scrollableTarget={this.props.scrollableDiv}
                    dataLength={this.props.items2.length}
                    next={this.fetchMoreData}
                    hasMore={this.props.hasMoreS}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p> no more results </p>
                    }

                >
                    <div className="row">
                        {
                            this.props.items2.map(
                                (item, i) => {
                                    return (
                                        <span>{item}
                                
                                </span>
                                    )
                                }
                            )
                        }
                    </div>
                </InfiniteScroll>
            </div>

        );
    }
}

export default ReactInfiniteScroll;
