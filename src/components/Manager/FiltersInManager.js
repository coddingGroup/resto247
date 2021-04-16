import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {ITEMS} from '../../shared/ProductsCategories'
import FlippingCard from "./FlippingCard";
import ListOfProductCard from "../no_more_used_components/ListOfProductCard";
import {Loading} from "../LoadingComponent";



const arrayToFilter =
  {
    All: [
      <FlippingCard/>,
      <FlippingCard/>,<FlippingCard/>,
      <FlippingCard/>,<FlippingCard/>,
      <FlippingCard/>,<FlippingCard/>,
      <FlippingCard/>,<FlippingCard/>,
      <FlippingCard/>
    ],
    Suggestions:[
        <FlippingCard/>
    ]
  }

;






const SearchFilterInM = ({allProducts, isLoading , errMess}) => {

    const [activeTab, setActiveTab] = useState('mains');
    // const[cathegories,setCAthegories] = useState(ITEMS);
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
    else{
        let keysToUse = allProducts.reduce(
            (keysToUse,pr) =>{
                if(!keysToUse.includes(pr.category)){
                    keysToUse = [...keysToUse,pr.category];
                }

                return keysToUse;

            },[]

        )

        let arry = {
            All: []
        }
        for(let i = 0; i <  keysToUse.length; i++){
            arry[keysToUse[i]] = [];
        }

        const arr = allProducts.reduce(
            (arrayOfItems, productT) =>{
                arrayOfItems[productT.category] = [...arrayOfItems[productT.category],
                    <FlippingCard oneProduct = {productT}/>];
                return arrayOfItems;
            },arry
        )




        const toggle = tab => {
            if(activeTab !== tab) setActiveTab(tab);
        }

        const allKey = Object.keys(arrayToFilter);

        let allNavItemNew = keysToUse.map(cathegory =>{
            return(
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === cathegory })}
                        onClick={() => { toggle(cathegory); }}
                    >
                        {cathegory}
                    </NavLink>
                </NavItem>
            )
        })

        let allTabPane = keysToUse.map(key =>{
            let allComponents = arr[key].map( comp =>{
                return (
                    <div className=" m-2">

                        {comp}
                    </div>

                )
            });

            return(
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