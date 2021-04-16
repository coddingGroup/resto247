import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, TabContent, TabPane, Nav, NavItem, NavLink, CardImgOverlay, Button, Row, Col } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";
import classnames from 'classnames';
import { ITEMS } from '../shared/ProductsCategories';
import '../css/home.css';
import HotDeal from "./homepagecomponents/HotDeal";
import Header from "./HeaderComponent";

function RenderCard({ item, isLoading, errMess }) {
    // render featured cards

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4> {errMess} </h4>
        );
    }
    else
        return (
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }} >
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>
                            {item.description}
                        </CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
};

function RenderCard2({ item, onClick }) {
    //categorized cards

    if (item.isLoading) {
        return (
            <Loading />
        );
    }
    else if (item.errMess) {
        return (
            <h4> {item.errMess} </h4>
        );
    }
    else
        return (
  
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }} >
                    <Card inverse className="m-2 shadow-sm rounded"  style={{ width: '16rem' }}>
                        <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
                        <CardImgOverlay >
                            <CardTitle tag="h6"  >
                                <div className="p-1 w-100 titleOfCard">{item.name}
                                <div className="badge badge-warning priceInHomepage"> 3000 RWF </div>
                                </div>
                                
                                
                                </CardTitle>
                            <div className="d-none">
                                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : item.description}
                            </div>

                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardImgOverlay>
                        <CardBody className="cardBodyForProductShow">
                            
                            <div className="row">
                
                                
                            <Button  size="sm" className="bg-light  read-more-btn col-6 ">
                            <i className="fa fa-lg fa-info read-more-icon" aria-hidden="true"></i> Read More
                            </Button>

                            
                                <Button   size="sm" className="col-6 bg-light add-to-cart-btn">
                                <i className="fa fa-lg fa-cart-plus  add-to-cart-icon" aria-hidden="true"></i> Add to cart
                                </Button>
                             
                           
                            </div>
                            
                            
                            
                        </CardBody>
                    </Card>
                </FadeTransform>

        );
}



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
                    className={classnames({ active: activeTab === cathegory.id })}
                    onClick={() => { toggle(cathegory.id); }}>
                    {cathegory.name}
                </NavLink>
            </NavItem>
        )
    });

    const menu = props.products.products.map((product) => {
        return (
            <div className="col-12 col-md-3 pl-1">
                <RenderCard2 item={product} />
            </div>
        );
    });

    return (

<React.Fragment>

<Header />
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
                                        errMess={props.dishesErrMess} />
                                </div>
                                <div className="col-12 col-md m-2">
                                    <RenderCard item={props.promotion}
                                        isLoading={props.promosLoading}
                                        errMess={props.promosErrMess} />
                                </div>
                                <div className="col-12 col-md m-2">
                                    <RenderCard item={props.leader}
                                        isLoading={props.leadersLoading}
                                        errMess={props.leadersErrMess} />
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



        </div>
        </React.Fragment>
    );
}
export default Home;