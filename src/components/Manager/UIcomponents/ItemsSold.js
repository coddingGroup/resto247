import React from 'react';

import {Button, Card, CardBody, CardFooter, Col, Row} from 'reactstrap';

const ItemsSold = (props) => {

    return (
        <Card className="bg-light mt-2">
            <CardBody>

                <CardBody>
                    <Row>
                        <Col className="border-right border-danger">
                            <Row>
                                <h1><i class="fa fa-shopping-cart "> </i> <br/></h1>
                            </Row>
                            <Row>
                                <div class="p-1 bg-secondary text-white mr-1 d-flex flex-fill "> Sold</div>
                            </Row>

                        </Col>
                        <Col>
                            <i class="badge badge-warning">Products</i>
                            <h1> {props.otherDailyReports===undefined ? "--": props.otherDailyReports.totalQuantity} </h1>
                        </Col>

                    </Row>

                </CardBody>
                <CardFooter className="d-flex flex-column ">
                    <Button className="p-2 bg-info"><i className="fa fa-plus-circle"> </i> More info</Button>
                </CardFooter>
            </CardBody>
        </Card>

    );
}

export default ItemsSold;