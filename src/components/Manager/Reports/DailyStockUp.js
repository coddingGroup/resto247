import {Col, Row, Table} from "reactstrap";
import {Sticky, StickyContainer} from "react-sticky";
import {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

let numberOfItem = 12;
const DailyStockUp = (props) => {
    const [productToDisplay, setProductToDisplay] = useState(props.dailyStockUp.dailyStockUp);

    let initial_values = (start = 0, endIndex = numberOfItem, indexing = 0) => {
        if (productToDisplay === null || productToDisplay === undefined) {
            console.log("dailyStockUp is undefined or null");
            return [];
        }
        let indexing1;

        let opElement1New = productToDisplay.slice(start, endIndex);
        let menu1New = opElement1New.map((oneStockUp, index) => {
            let totalPrice = parseInt(oneStockUp.quantity) * parseInt(oneStockUp.unitPrice);
            return (
                <tr key={oneStockUp.id}>
                    <th> {indexing === 0 ? (index + 1) : (++indexing1)}</th>
                    <td>{oneStockUp.resourceName}</td>
                    <td>{oneStockUp.quantity}</td>
                    <td> {oneStockUp.unitPrice}</td>
                    <td>{totalPrice}</td>
                    <td> {oneStockUp.from}</td>
                    <td> {oneStockUp.newStockQuantity} </td>
                    <td> --</td>
                </tr>
            )
        });


        const arrNew = [...menu1New];
        return arrNew;
    }


    const [activeTab, setActiveTab] = useState('1');
    const [hasMoreS, setHasMoreS] = useState(true);
    const [itemToFetch, setItemToFetch] = useState(numberOfItem);
    const [itemToStartOn, setItemToStartOn] = useState(numberOfItem);
    const [items2, setItems2] = useState(initial_values());

    let funMenuNew = (dailyUsange = productToDisplay, reset = false) => {
        let start;
        if (!reset) {
            start = itemToStartOn;
        } else {
            start = 0;
        }

        let last = start + itemToFetch;


        let lastIndex = (dailyUsange.length < last) ? dailyUsange.length : last;
        if (dailyUsange.length >= lastIndex) {
            let indexing = start;
            // this.setState({
            //     itemToStartOn:lastIndex
            // }
            //
            //
            // )
            setItemToStartOn(lastIndex);
            let menuNew = initial_values(start, lastIndex, indexing);
            if (dailyUsange.length === lastIndex) {
                // this.setState({hasMoreS: false});
                setHasMoreS(false);
            }
            return menuNew;
        } else {
            // this.setState({hasMores:false});
            setHasMoreS(false);
            return [];

        }

    }


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let fetchMoreData = () => {

        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {

            let item2 = [...items2, ...funMenuNew()];

            setItems2(item2);
        }, 1500);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>


            <Row>

                <Col sm="12">
                    <div className="d-flex justify-content-center bg-warning mt-4">
                        <h3>Daily Stock Up </h3>
                    </div>
                    <Table responsive hover>

                        <StickyContainer>

                            <Sticky>
                                {({
                                      style,


                                      isSticky,
                                      wasSticky,
                                      distanceFromTop,
                                      distanceFromBottom,
                                      calculatedHeight
                                  }) => (
                                    // <header style={style}>
                                    //     {<FilterMenu categories={keysToUse}
                                    //                  category={category}
                                    //                  changeProductToDisplay={changeProductToDisplay}
                                    //                  setCategory={setCategory}/>
                                    //
                                    //     }
                                    // </header>

                                    <thead>
                                    <tr>
                                        <th> Id</th>
                                        <th>Resource name</th>
                                        <th>Quantity</th>
                                        <th> Unit price</th>
                                        <th>Total price</th>
                                        <th> From</th>
                                        <th> Stock comes</th>
                                        <th> Created At</th>

                                    </tr>
                                    </thead>

                                )}


                            </Sticky>

                            <div>

                                <div id="scrollableDivInDailyStockUp"
                                     className="card fixedDiv square scrollbar-cyan bordered-cyan">
                                    <div className="card-body">
                                        <div className="mt-2">
                                            <InfiniteScroll
                                                scrollableTarget={"scrollableDivInDailyStockUp"}
                                                dataLength={items2.length}
                                                next={fetchMoreData}
                                                hasMore={hasMoreS}
                                                loader={<span
                                                    className="fa fa-lg fa-spinner text-warning"><b>Loading</b></span>}
                                                endMessage={
                                                    <p> no more results </p>
                                                }

                                            >
                                                <div className="">
                                                    <Table>
                                                        <thead>
                                                        <tr>
                                                            <th> Id</th>
                                                            <th>Resource name</th>
                                                            <th>Quantity</th>
                                                            <th> Unit price</th>
                                                            <th>Total price</th>
                                                            <th> From</th>
                                                            <th> Stock comes</th>
                                                            <th> Created At</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {

                                                            items2.map(
                                                                (item, i) => {
                                                                    return (
                                                                        item

                                                                    )
                                                                }
                                                            )
                                                        }
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </InfiniteScroll>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </StickyContainer>
                    </Table>

                </Col>

            </Row>

        </div>
    );
}

export default DailyStockUp;
