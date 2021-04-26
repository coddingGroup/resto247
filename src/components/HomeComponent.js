import React, {useState} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from "reactstrap";
import classnames from 'classnames';
import {ITEMS} from '../shared/ProductsCategories';
import '../css/home.css';
import Header from "./HeaderComponent";
import RenderCard3 from './homepagecomponents/RenderCard3'
import RenderCard from './homepagecomponents/RenderCard'
import SearchFilterInM from "./Manager/SearchFilterIn";


function Home(props) {

    const [activeTab, setActiveTab] = useState('1');
    const [cathegories, setCathegories] = useState(ITEMS);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    var allNavIntem = cathegories.map((cathegory) => {
        return (

            <NavItem>
                <NavLink
                    className={classnames({active: activeTab === cathegory.id})}
                    onClick={() => {
                        toggle(cathegory.id);
                    }}>
                    {cathegory.name}
                </NavLink>
            </NavItem>
        )
    });

    const menu = props.products.products.map((product) => {
        return (
            <div className="col-12 col-md-3 pl-1">
                <RenderCard3 item={product} addToCart={props.addToCart} cart={props.cart}/>
            </div>
        );
    });

    return (

        <React.Fragment>

            <Header/>
            <div className="container ">

                <Nav pills>
                    {allNavIntem}
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div className="row align-items-start">
                                    <div className="col-12 col-md m-2">
                                        <RenderCard item={props.dish}
                                                    isLoading={props.dishesLoading}
                                                    errMess={props.dishesErrMess}/>
                                    </div>
                                    <div className="col-12 col-md m-2">
                                        <RenderCard item={props.promotion}
                                                    isLoading={props.promosLoading}
                                                    errMess={props.promosErrMess}/>
                                    </div>
                                    <div className="col-12 col-md m-2">
                                        <RenderCard item={props.hotdeal}
                                                    isLoading={props.hotdealsLoading}
                                                    errMess={props.hotdealsErrMess}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>

                            {menu}

                        </Row>
                    </TabPane>
                </TabContent>

                <SearchFilterInM cardToRender={"RenderCard3"} allProducts={props.products.products}
                                 isLoading={props.products.isLoading}
                                 cart={props.cart}
                                 addToCart={props.addToCart}
                                 errMess={props.products.errMess}/>


            </div>
        </React.Fragment>
    );
}

export default Home;