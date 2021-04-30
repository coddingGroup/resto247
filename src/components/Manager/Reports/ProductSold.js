import {Col, Row, Table,} from "reactstrap";
import {Sticky, StickyContainer} from "react-sticky";
import {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

let numberOfItem = 12;
const ProductSold = (props) => {
    const [productToDisplay, setProductToDisplay] = useState(props.dailyInvoiceDetails.dailyInvoiceDetails);
    const [products, setProducts] = useState(props.dailyInvoiceDetails.products);
    const [hasMoreS, setHasMoreS] = useState(true);

    let initial_values = (start = 0, lastIndex = numberOfItem, indexing = 0) => {

        //alert(JSON.stringify(productToDisplay));
        if (productToDisplay === null || productToDisplay === undefined) {
            setHasMoreS(false);
            return [];
        }
        let indexing1;
        let opElement = products.slice(start, lastIndex);
        let menu1New = opElement.map((product, index) => {

            let receptionist = Object.keys(productToDisplay[product]);
            let details = "";
            let totalPrice = 0;
            let totalQuantity = 0;
            receptionist.forEach((rec) => {
                totalPrice += parseInt(productToDisplay[product][rec].totalPrice);
                totalQuantity += parseInt(productToDisplay[product][rec].totalQuantity);
                details += rec + ":" + productToDisplay[product][rec].totalQuantity + ", ";


            });
            return (

                <tr>
                    <th> {indexing === 0 ? (index + 1) : (++indexing1)}</th>
                    <td>{product}</td>
                    <td>{totalQuantity}</td>
                    <td>{totalPrice}</td>
                    <td>{details}</td>
                </tr>
            )


        });

        if (productToDisplay.length <= (lastIndex + 1)) {
            setHasMoreS(false);
        }

        const arrNew = [...menu1New];
        return arrNew;
    }


    const [activeTab, setActiveTab] = useState('1');

    const [category, setCategory] = useState('All');


    const [itemToFetch, setItemToFetch] = useState(numberOfItem);
    const [itemToStartOn, setItemToStartOn] = useState(numberOfItem);
    const [items2, setItems2] = useState(initial_values());

    let funMenuNew = (dailyUsange = productToDisplay, reset = false) => {
        if (dailyUsange === null || dailyUsange === undefined) {
            setHasMoreS(false);
            return [];
        }
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
            let menuNew = initial_values(start, lastIndex, indexing);

            setItemToStartOn(lastIndex);
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
                    <div className="d-flex justify-content-center color3 mt-4">
                        <h3>Daily sold product </h3>
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
                                        <th>Id</th>
                                        <th>Product Name</th>
                                        <th>Total Quantity</th>
                                        <th>Total Price</th>
                                        <th>Details</th>

                                    </tr>
                                    </thead>

                                )}


                            </Sticky>

                            <div>


                                <div id="scrollableDivForProductSold"
                                     className="card fixedDiv square scrollbar-cyan bordered-cyan">
                                    <div className="card-body">
                                        <div className="mt-2">
                                            <InfiniteScroll
                                                scrollableTarget={"scrollableDivForProductSold"}
                                                dataLength={items2.length}
                                                next={fetchMoreData}
                                                hasMore={hasMoreS}
                                                loader={<span
                                                    className="fa fa-lg fa-spinner text-warning"><b>loading..</b></span>}
                                                endMessage={
                                                    <p> no more results </p>
                                                }

                                            >
                                                <div className="">
                                                    <Table>
                                                        <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Product Name</th>
                                                            <th>Total Quantity</th>
                                                            <th>Total Price</th>
                                                            <th>Details</th>

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
            <Row>
                <Col>

                </Col>
            </Row>

        </div>
    );
}

export default ProductSold;
