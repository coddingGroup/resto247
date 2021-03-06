import React, {useState} from "react";
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from 'classnames';
import {ITEMS} from '../shared/ProductsCategories';
import '../css/home.css';
import Header from "./HeaderComponent";
import RenderCard3 from './homepagecomponents/RenderCard3';
import SearchFilterInM from "./Manager/SearchFilterIn";


function Home(props) {

    const [activeTab, setActiveTab] = useState('1');
    const [cathegories] = useState(ITEMS);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    //this is important comment
    // let allNavIntem = cathegories.map((cathegory) => {
    //     return (
    //
    //         <NavItem>
    //             <NavLink
    //                 className={classnames({active: activeTab === cathegory.id})}
    //                 onClick={() => {
    //                     toggle(cathegory.id);
    //                 }}>
    //                 {cathegory.name}
    //             </NavLink>
    //         </NavItem>
    //     )
    // });

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

                {/*<Nav pills>*/}
                {/*    {allNavIntem}*/}
                {/*</Nav>*/}
                {/*<TabContent activeTab={activeTab}>*/}
                {/*    <TabPane tabId="1">*/}
                {/*        <Row>*/}
                {/*            <Col sm="12">*/}
                {/*                <div className="row align-items-start">*/}
                {/*                    Upcomming*/}
                {/*                    /!*<div className="col-12 col-md m-2">*!/*/}
                {/*                    /!*    <RenderCard item={props.dish}*!/*/}
                {/*                    /!*                isLoading={props.dishesLoading}*!/*/}
                {/*                    /!*                errMess={props.dishesErrMess}/>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                    /!*<div className="col-12 col-md m-2">*!/*/}
                {/*                    /!*    <RenderCard item={props.promotion}*!/*/}
                {/*                    /!*                isLoading={props.promosLoading}*!/*/}
                {/*                    /!*                errMess={props.promosErrMess}/>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                    /!*<div className="col-12 col-md m-2">*!/*/}
                {/*                    /!*    <RenderCard item={props.hotdeal}*!/*/}
                {/*                    /!*                isLoading={props.hotdealsLoading}*!/*/}
                {/*                    /!*                errMess={props.hotdealsErrMess}/>*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                </div>*/}
                {/*            </Col>*/}
                {/*        </Row>*/}
                {/*    </TabPane>*/}
                {/*    <TabPane tabId="2">*/}
                {/*        <Row>*/}

                {/*            {menu}*/}

                {/*        </Row>*/}
                {/*    </TabPane>*/}
                {/*</TabContent>*/}
                <section className="about-section">
                    <article>
                        <h3>
                            Section for the text why your restaurant is the best.
                        </h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            A quos, voluptatum illum mollitia dolores libero placeat
                            nesciunt quasi adipisci impedit!Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                            A quos, voluptatum illum mollitia dolores libero placeat
                            nesciunt quasi adipisci impedit!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            A quos, voluptatum illum mollitia dolores libero placeat
                            nesciunt quasi adipisci impedit!Lorem ipsum dolor sit.
                        </p>
                    </article>
                </section>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/restaurant-management-2a3f1.appspot.com/o/brooke-lark-aGjP08-HbYY-unsplash.jpg?alt=media&token=43e34223-e9d6-45ba-8aa5-b7c25e9b739a" className="d-block w-100" alt="food"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/restaurant-management-2a3f1.appspot.com/o/lily-banse--YHSwy6uqvk-unsplash.jpg?alt=media&token=c97d6974-caef-46f1-a208-2e1f3996b749" className="d-block w-100" alt="food"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/restaurant-management-2a3f1.appspot.com/o/rachel-park-hrlvr2ZlUNk-unsplash.jpg?alt=media&token=84c4a0cb-7742-4247-8baa-5928de31a94d" className="d-block w-100" alt="food"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="row">
                    <div className="col">
                    <div className=" d-flex justify-content-center p-2 mt-3">
                        <h1> Our Products </h1>
                    </div>
                    </div>
                </div>

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