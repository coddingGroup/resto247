import React, {useState} from 'react';
import {Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import {Loading} from "../LoadingComponent";
import ScrollView from "./UIcomponents/ScrollView";


const AllProducts = (props) => {

    const [activeTab, setActiveTab] = useState('mains');
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


        const arr = props.allProducts.reduce(
            (arrayOfItems, productT) => {
                arrayOfItems[productT.category] = [...arrayOfItems[productT.category],
                    productT];
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
            return (
                <TabPane tabId={key}>
                    <Row>

                        <ScrollView
                            cart={props.cart}
                            addToCart={props.addToCart}
                            removeToCart={props.removeToCart}
                            products={arr[key]}/>

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

export default AllProducts;