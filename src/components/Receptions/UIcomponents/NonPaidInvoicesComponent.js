import {Button, Col, Container, Row, Table} from "reactstrap";
import {Sticky, StickyContainer} from "react-sticky";
import {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import makeInvoicePaid from "../../../functions/makeInvoicePaid";

let numberOfItem = 12;
const NonPaidInvoicesComponent = (props) => {


    const [productToDisplay, setProductToDisplay] = useState(props.nonPaidInvoices.nonPaidInvoices);

    let handleMakePaidClick = event =>{
        alert(event.target.id)
        makeInvoicePaid(event.target.id, props.changeNonPaidInvoices);

    }
    let handleRefresh = (event) =>{
        let receptionistName = JSON.parse(localStorage.getItem('userCollection')).firstName;
        props.changeNonPaidInvoices(receptionistName);
    }



    const [hasMoreS, setHasMoreS] = useState(true);

    let initial_values = (start = 0, endIndex = numberOfItem, indexing = 0) => {
        if (productToDisplay === null || productToDisplay === undefined) {
            console.log(" is undefined or null");
            return [];
        }
        let indexing1;

        let opElement1New = productToDisplay.slice(start, endIndex);
        let menu1New = opElement1New.map((oneInvoice, index) => {
            return (
                <tr key={oneInvoice.id}>
                    <th> {indexing === 0 ? (index + 1) : (++indexing1)}</th>
                    <td>{oneInvoice.waiterName}</td>
                    <td>{oneInvoice.totalPrice}</td>
                    <td>{oneInvoice.clientName}</td>
                    <td> {oneInvoice.paymentStatus}</td>
                    <td> --</td>
                    <td> <Button id={oneInvoice.id} onClick={handleMakePaidClick} className='bg-warning'>Make Paid</Button> </td>
                </tr>
            )
        });


        const arrNew = [...menu1New];
        return arrNew;
    }


    const [activeTab, setActiveTab] = useState('1');
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
        <Container >
            <Row> <Col md={{size: 4, offset: 8}}>
                <Button onClick={handleRefresh}> <span className="fa fa-spinner" >Click to refresh</span> </Button>
            </Col> </Row>
            <Row>

                <Col sm="12">
                    <div className="d-flex justify-content-center bg-warning mt-4">
                        <h3>non paid Invoice </h3>
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
                                        <th>WaiterName</th>
                                        <th>TotalPrice</th>
                                        <th>ClientName</th>
                                        <th> PaymentStatus</th>
                                        <th> created At</th>

                                    </tr>
                                    </thead>

                                )}


                            </Sticky>

                            <div>

                                <div id="scrollableDivInReports"
                                     className="card fixedDiv square scrollbar-cyan bordered-cyan">
                                    <div className="card-body">
                                        <div className="mt-2">
                                            <InfiniteScroll
                                                scrollableTarget={"scrollableDivInReports"}
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
                                                            <th>WaiterName</th>
                                                            <th>TotalPrice</th>
                                                            <th>ClientName</th>
                                                            <th> PaymentStatus</th>
                                                            <th> created At</th>

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

        </Container>
    );
}

export default NonPaidInvoicesComponent;
