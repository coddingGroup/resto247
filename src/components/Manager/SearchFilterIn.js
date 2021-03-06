import React, {useState} from 'react';
import {Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import FlippingCard from "./FlippingCard";
import {Loading} from "../LoadingComponent";
import RenderCard3 from "../homepagecomponents/RenderCard3";


const SearchFilterInM = (props) => {

    const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTabInProducts')===null? 'food': localStorage.getItem('activeTabInProducts'));
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
            if (activeTab !== tab) {
                setActiveTab(tab);
                localStorage.setItem('activeTabInProducts',tab);
            }

        }


        let allNavItemNew = keysToUse.map(category => {
            return (
                <NavItem key={category+"category"}>
                    <NavLink
                        className={classnames({active: activeTab === category})}
                        onClick={() => {
                            toggle(category);
                        }}
                    >
                        {category}
                    </NavLink>
                </NavItem>
            )
        })
        let keyTo = 34653432;

        let allTabPane = keysToUse.map(key => {

            let allComponents = arr[key].map(comp => {
                return (
                    <div key={++keyTo} className=" m-2">

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