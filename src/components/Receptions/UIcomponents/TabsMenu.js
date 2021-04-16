import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardBody, CardFooter } from 'reactstrap';
import classnames from 'classnames';
import ToggleButton from './ToggleButton';
import TableAddedCarts from './TableAddedCarts'
import AddedCarts from './AddedCartsBagde';
import '../../../css/home.css';
import FilterMenu from './FilterMenu';
import { Sticky, StickyContainer } from 'react-sticky'

import PageComponent from './PaginationComponent';


import ScrollView from './ScrollView';


const TabsMenu = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Reports
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12" className="bg-light">
              <ToggleButton />

            </Col>
          </Row>
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
                      {  <FilterMenu />
                      }
                    </header>
                  )}


                </Sticky>
                <ScrollView  products={props.products} />
              </StickyContainer>



            </Col>

            <Col sm="4">
              <Card className="mt-2">
                <CardTitle className="mt-1 col">
                  <h3>  Products on Cart  <span class="float-right "><AddedCarts /> </span>
                      <span class="fa fa-print mt-2 float-right"> </span>
                  </h3>
                </CardTitle>
                <CardBody> <TableAddedCarts /> </CardBody>
                <CardFooter>
                  <div class="d-flex justify-content-center">
                    <Button color="light"> <i class="d-flex add-to-cart-icon2"> Verify {' '} </i><i class="fa fa-3x fa-arrow-circle-right add-to-cart-icon2"></i> </Button>

                  </div>

                </CardFooter>
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
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabsMenu;
