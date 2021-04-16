import { array } from "prop-types";
import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import RenderCard2 from "../../homepagecomponents/RenderCard2";
import {Component} from 'react';


const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};
let lastIndex = 6;
class ReactInfiniteScroll extends Component {
    
    constructor(props) {
        super(props);
        let opElement = this.props.products.products.slice(0, lastIndex);
        let menu = opElement.map((product) => {
            return (
                <div className="">
                    <RenderCard2 item={product} />
                </div>
            );
        });
        const arr = [
            ...menu
        ];
        

        this.state = {
            items2: arr,
            hasMoreS:true,
            itemsToFetch: lastIndex,
            itemToStartOn: lastIndex
        };
        this.funMenu = this.funMenu.bind(this);

    }
    funMenu = () =>{
        let products  = this.props.products.products;
        var last = this.state.itemToStartOn + this.state.itemsToFetch;
        let lastIndex = (products.length > this.state.itemToStartOn && products.length < last)? products.length : last;
        if(products.length >=  lastIndex){
            
        let opElement = products.slice(this.state.itemToStartOn, lastIndex);
        this.setState({
            itemToStartOn:lastIndex
        }
            
        )
        let menu = opElement.map((product) => {
            return (
                <div className="">
                    <RenderCard2 item={product} />
                </div>
            );
        });
        if(products.length === lastIndex){
            this.setState({hasMoreS: false});
        }
        return menu;
        }
        else{
           
            return null;
            
        }
        
    }
   

    fetchMoreData = () => {
        
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                
                items2: [...this.state.items2,...this.funMenu()]
                
            });
            
            
        }, 1500);
    };

     

    render() {
        return (
            <div className="mt-2">
                <InfiniteScroll
                scrollableTarget={this.props.scrollableDiv}
                    dataLength={this.state.items2.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMoreS}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p> no more results </p>
                    }
                    
                >
                 <div className="row">  
                {
                    this.state.items2.map(
                        (item,i) =>{
                            return(
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
