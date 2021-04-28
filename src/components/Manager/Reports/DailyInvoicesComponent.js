import RenderCard3 from "../../homepagecomponents/RenderCard3";
import {
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent, Table,
    TabPane
} from "reactstrap";
import {Sticky, StickyContainer} from "react-sticky";
import FilterMenu from "../../Receptions/UIcomponents/FilterMenu";
import classnames from 'classnames';
import ScrollView from "../../Receptions/UIcomponents/ScrollView";
import AddedCarts from "../../cartComponent/AddedCart";
import TableAddedCarts from "../../cartComponent/TableAddedCarts";
import {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

let numberOfItem = 12;
const DailyInvoicesComponent = (props) => {
    let allTr = props.dailyInvoices.dailyInvoices.map((invoice, index) =>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{invoice.clientName}</td>
                <td>{invoice.id}</td>
            </tr>
        )
    })





    let initial_values = () =>{
        let opElement1New = props.dailyInvoices.dailyInvoices.slice(0,numberOfItem);
        let menu1New = opElement1New.map((invoice, index) =>{
            return(
                <tr key={invoice.id}>
                    <th> {index + 1}</th>
                    <td>{invoice.receptionistName}</td>
                    <td>{invoice.waiterName}</td>
                    <td> {invoice.clientName}</td>
                    <td> {invoice.totalPrice}</td>
                    <td> {invoice.paymentStatus} </td>
                    <td> -- </td>
                    <td>--</td>
                </tr>
            )
        });


        const arrNew = [...menu1New];
        return arrNew;
    }



    const [activeTab, setActiveTab] = useState('1');
    const [productToDisplay, setProductToDisplay] = useState(props.dailyInvoices.dailyInvoices);
    const [category, setCategory] = useState('All');


    const [hasMoreS, setHasMoreS] = useState(true);
    const [itemToFetch, setItemToFetch] = useState(numberOfItem);
    const [itemToStartOn, setItemToStartOn] = useState(numberOfItem);
    const [items2, setItems2] = useState(initial_values());


    // let keysToUseNew = props.dailyInvoices.dailyInvoices.reduce(
    //     (keysToUse, pr) => {
    //         if (!keysToUse.includes(pr.receptionistName) && !keysToUse.includes(pr.waiterName)) {
    //             keysToUse = [...keysToUse, pr.waiterName, pr.receptionistName];
    //         }
    //
    //         return keysToUse;
    //
    //     }, []
    // );




    let funMenuNew = (dailyUsange = props.dailyInvoices.dailyInvoices, reset = false) => {
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
            let opElement = dailyUsange.slice(start, lastIndex);
            // this.setState({
            //     itemToStartOn:lastIndex
            // }
            //
            //
            // )
            setItemToStartOn(lastIndex);
            let menuNew = opElement.map((invoice, index) =>{
                return(
                    <tr key={invoice.id}>

                        <th> {++indexing}</th>
                        <td>{invoice.receptionistName}</td>
                        <td>{invoice.waiterName}</td>
                        <td> {invoice.clientName}</td>
                        <td> {invoice.totalPrice}</td>
                        <td> {invoice.paymentStatus} </td>
                        <td> -- </td>
                        <td>--</td>
                    </tr>
                )
            })
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
                                <h3 >Daily Invoices </h3>
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
                                        <th> Receptionist Name</th>
                                        <th> Waiter Name</th>
                                        <th> Client Name</th>
                                        <th> Total Price</th>
                                        <th> Payment Status </th>
                                            <th> Create At </th>
                                            <th>Update At</th>

                                        </tr>
                                        </thead>

                                    )}


                                </Sticky>

                                <div>

                                    <div id="scrollableDivInDailyInvoice" className="card fixedDiv square scrollbar-cyan bordered-cyan">
                                        <div className="card-body">
                                            <div className="mt-2">
                                                <InfiniteScroll
                                                    scrollableTarget={"scrollableDivInDailyInvoice"}
                                                    dataLength={items2.length}
                                                    next={fetchMoreData}
                                                    hasMore={hasMoreS}
                                                    loader={<span className="fa fa-lg fa-spinner text-warning"><b>Loading</b></span>}
                                                    endMessage={
                                                        <p> no more results </p>
                                                    }

                                                >
                                                    <div className="">
                                                        <Table>
                                                        <thead>
                                                        <tr>
                                                            <th> Id</th>
                                                            <th> Receptionist Name</th>
                                                            <th> Waiter Name</th>
                                                            <th> Client Name</th>
                                                            <th> Total Price</th>
                                                            <th> Payment Status </th>
                                                            <th> Create At </th>
                                                            <th>Update At</th>

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

export default DailyInvoicesComponent;
