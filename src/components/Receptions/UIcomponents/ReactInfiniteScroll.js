import React, {Component} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

class ReactInfiniteScroll extends Component {

    constructor(props) {
        super(props);



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
