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
    TabContent,
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
const ScrollingItems = (props) => {


    let opElement1 = props.products.products.slice(0, numberOfItem);
    let menu1 = opElement1.map((product) => {
        return (
            <div className="">
                <RenderCard3 item={product}
                             key={product.id}
                             cart={props.cart}
                             addToCart={props.addToCart}
                             removeToCart={props.removeToCart}

                />
            </div>
        );
    });
    const arr = [
        ...menu1
    ];


    const [activeTab, setActiveTab] = useState('1');
    const [productToDisplay, setProductToDisplay] = useState(props.products.products);
    const [category, setCategory] = useState('All');


    const [hasMoreS, setHasMoreS] = useState(true);
    const [itemToFetch, setItemToFetch] = useState(numberOfItem);
    const [itemToStartOn, setItemToStartOn] = useState(numberOfItem);
    const [items2, setItems2] = useState(arr);

    let keysToUse = props.products.products.reduce(
        (keysToUse, pr) => {
            if (!keysToUse.includes(pr.category)) {
                keysToUse = [...keysToUse, pr.category];
            }

            return keysToUse;

        }, []
    );
    let funMenu = (products = productToDisplay, reset = false) => {
        let start;
        if (!reset) {
            start = itemToStartOn;
        } else {
            start = 0;
        }

        let last = start + itemToFetch;


        let lastIndex = (products.length < last) ? products.length : last;
        if (products.length >= lastIndex) {

            let opElement = products.slice(start, lastIndex);
            // this.setState({
            //     itemToStartOn:lastIndex
            // }
            //
            //
            // )
            setItemToStartOn(lastIndex);
            let menu = opElement.map((product) => {
                return (
                    <div className="">
                        <RenderCard3 key={product.id + "op"} cart={props.cart} addToCart={props.addToCart}
                                     removeToCart={props.removeToCart} item={product}/>
                    </div>
                );
            });
            if (products.length === lastIndex) {
                // this.setState({hasMoreS: false});
                setHasMoreS(false);
            }
            return menu;
        } else {
            // this.setState({hasMores:false});
            setHasMoreS(false);
            return [];

        }

    }
    let changeProductToDisplay = (newCategory = 'All') => {
        let items = undefined;
        if (newCategory === 'All') {
            items = props.products.products;
        } else {
            items = props.products.products.reduce(
                (item, pr) => {
                    if (pr.category == newCategory) {
                        item = [...item, pr];
                    }

                    return item;

                }, []
            );

        }
        setProductToDisplay(items);

        setItemToStartOn(0);
        let newItem = [...funMenu(items, true)]
        setItems2(newItem);


    }


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let lastIndex = 12;
    let opElement = props.products.products.slice(0, lastIndex);
    let menu = opElement.map((product) => {
        return (
            <div className="">
                <RenderCard3 item={product}
                             key={product.id}
                             cart={props.cart}
                             addToCart={props.addToCart}
                             removeToCart={props.removeToCart}

                />
            </div>
        );
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let fetchMoreData = () => {

        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            // this.setState({
            //
            //     items2: [...this.state.items2,...this.funMenu()]
            //
            // });
            let item2 = [...items2, ...funMenu()];

            setItems2(item2);
        }, 1500);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '1'})}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        Products
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === '2'})}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        Reports
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>

                        <Col sm="8">

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
                                        <header style={style}>
                                            {<FilterMenu categories={keysToUse}
                                                         category={category}
                                                         changeProductToDisplay={changeProductToDisplay}
                                                         setCategory={setCategory}/>

                                            }
                                        </header>
                                    )}


                                </Sticky>
                                {/*<ScrollView*/}
                                {/*    funMenu={funMenu}*/}
                                {/*    items2={items2} setItems2={setItems2}*/}
                                {/*    hasMoreS={hasMoreS} setHasMoreS={setHasMoreS}*/}
                                {/*    itemToFetch={itemToFetch} setItemToFetch={setItemToFetch}*/}
                                {/*    itemToStartOn={itemToStartOn} setItemToStartOn={setItemToStartOn}*/}
                                {/*    cart={props.cart}*/}
                                {/*    addToCart={props.addToCart}*/}
                                {/*    removeToCart={props.removeToCart}*/}
                                {/*    products={productToDisplay}/>*/}








                                <div>

                                    <div id="scrollableDiv" className="card fixedDiv square scrollbar-cyan bordered-cyan">
                                        <div className="card-body">
                                            <div className="mt-2">
                                                <InfiniteScroll
                                                    scrollableTarget={"scrollableDiv"}
                                                    dataLength={items2.length}
                                                    next={fetchMoreData}
                                                    hasMore={hasMoreS}
                                                    loader={<h4>Loading...</h4>}
                                                    endMessage={
                                                        <p> no more results </p>
                                                    }

                                                >
                                                    <div className="row">
                                                        {
                                                            items2.map(
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
                                        </div>
                                    </div>
                                </div>

                            </StickyContainer>


                        </Col>

                        <Col sm="4">
                            <Card className="mt-2">
                                <CardTitle className="mt-1 col">
                                    <h3> Products on Cart <span class="float-right "><AddedCarts
                                        cart={props.cart}/> </span>
                                        <span class="fa fa-print mt-2 float-right"> </span>
                                    </h3>
                                </CardTitle>
                                <CardBody> <TableAddedCarts pushInvoice={props.pushInvoice} removeToCart={props.removeToCart} cart={props.cart}/>
                                </CardBody>
                            </Card>


                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default ScrollingItems;
