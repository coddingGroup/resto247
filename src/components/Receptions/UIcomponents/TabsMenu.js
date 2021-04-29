import React, {useState} from 'react';
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
} from 'reactstrap';
import classnames from 'classnames';
import TableAddedCarts from '../../cartComponent/TableAddedCarts'
import AddedCarts from '../../cartComponent/AddedCart';
import '../../../css/home.css';
import FilterMenu from './FilterMenu';
import {Sticky, StickyContainer} from 'react-sticky'


import ScrollView from './ScrollView';
import RenderCard3 from "../../homepagecomponents/RenderCard3";
import NonPaidInvoicesComponent from "./NonPaidInvoicesComponent";

let numberOfItem = 12;
const TabsMenu = (props) => {



    let opElement = props.products.products.slice(0, numberOfItem);
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
    const arr = [
        ...menu
    ];


    const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab1')===null? '1': localStorage.getItem('activeTab1'));
    const [productToDisplay, setProductToDisplay] = useState(props.products.products);
    const [category, setCategory] = useState('All');


    const [hasMoreS, setHasMoreS] = useState(true);
    const [itemToFetch, setItemToFetch] = useState(numberOfItem);
    const [itemToStartOn, setItemToStartOn] = useState(numberOfItem);
    const [items2, setItems2] = useState(arr);




    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
        localStorage.setItem('activeTab1',tab);
    }


    let handleReportsClick = () =>{
        props.changeNonPaidInvoices(JSON.parse(localStorage.getItem('userCollection')).firstName);
    }
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
                        <span onClick={handleReportsClick}>Reports</span>

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
                                <ScrollView
                                    funMenu={funMenu}
                                    items2={items2} setItems2={setItems2}
                                    hasMoreS={hasMoreS} setHasMoreS={setHasMoreS}
                                    itemToFetch={itemToFetch} setItemToFetch={setItemToFetch}
                                    itemToStartOn={itemToStartOn} setItemToStartOn={setItemToStartOn}
                                    cart={props.cart}
                                    addToCart={props.addToCart}
                                    removeToCart={props.removeToCart}
                                    products={productToDisplay}/>

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
                                <CardBody> <TableAddedCarts pushInvoice={props.pushInvoice}
                                                            waiters={props.waiters.waiters}
                                                            removeToCart={props.removeToCart} cart={props.cart}/>
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
                        <Col>
                            <NonPaidInvoicesComponent changeNonPaidInvoices={props.changeNonPaidInvoices} nonPaidInvoices={props.nonPaidInvoices} />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default TabsMenu;
