import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {ITEMS} from '../../shared/ProductsCategories'



const SearchFilter = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const[cathegories,setCAthegories] = useState(ITEMS);
 
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  var allNavIntem = cathegories.map((cathegory) =>{
      return(

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === cathegory.id })}
            onClick={() => { toggle(cathegory.id); }}
          >
            {cathegory.name}
          </NavLink>
        </NavItem>
      )
    }
  )

  return (
    <div>
      <Nav pills>
        {allNavIntem}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
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

export default SearchFilter;