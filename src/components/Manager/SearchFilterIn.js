import React, {useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import {ITEMS} from '../../shared/ProductsCategories'
import FlippingCard from "./FlippingCard";
import {Loading} from "../LoadingComponent";
import RenderCard3 from "../homepagecomponents/RenderCard3";
import IncreaseProduct from "./Products/IncreaseProduct";


const SearchFilterInM = (props) => {

    const [activeTab, setActiveTab] = useState('food');
    // const[cathegories,setCAthegories] = useState(ITEMS);
    if (props.isLoading) {
        return (
            <Loading/>
        );
    } else if (props.errMess) {
        return (
            <h4> {props.errMess} </h4>
        );
    } else {
        let keysToUse = props.allProducts.reduce(
            (keysToUse, pr) => {
                if (!keysToUse.includes(pr.category)) {
                    keysToUse = [...keysToUse, pr.category];
                }

                return keysToUse;

            }, []
        )

        let arry = {
            All: []
        }
        for (let i = 0; i < keysToUse.length; i++) {
            arry[keysToUse[i]] = [];
        }
        let cardT = undefined;
        if (props.cardToRender === "FlippingCard") {
            cardT = (productT) => {
                return <FlippingCard increaseStock={props.increaseStock}
                                     behaviors={props.behaviors}
                                     handleSaving={props.handleSaving}
                                     opName={props.opName}
                                     changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                                     oneProduct={productT}/>
            }
        } else {
            cardT = (productT) => {
                return <RenderCard3 item={productT} addToCart={props.addToCart} cart={props.cart}/>
            }
        }

        const arr = props.allProducts.reduce(
            (arrayOfItems, productT) => {
                arrayOfItems[productT.category] = [...arrayOfItems[productT.category],
                    cardT(productT)];
                return arrayOfItems;
            }, arry
        )


        const toggle = tab => {
            if (activeTab !== tab) setActiveTab(tab);
        }


        let allNavItemNew = keysToUse.map(cathegory => {
            return (
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === cathegory})}
                        onClick={() => {
                            toggle(cathegory);
                        }}
                    >
                        {cathegory}
                    </NavLink>
                </NavItem>
            )
        })

        let allTabPane = keysToUse.map(key => {
            let allComponents = arr[key].map(comp => {
                return (
                    <div className=" m-2">

                        {comp}
                    </div>

                )
            });

            return (
                <TabPane tabId={key}>
                    <Row>

                        {allComponents}

                    </Row>
                </TabPane>
            )
        })
        return (
            <div>
                <Nav pills>
                    {allNavItemNew}
                </Nav>
                <TabContent activeTab={activeTab}>
                    {allTabPane}
                </TabContent>
            </div>
        );
    }


}

export default SearchFilterInM;