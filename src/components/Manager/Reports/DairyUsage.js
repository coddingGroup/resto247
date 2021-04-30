import React from 'react';

import {Card, CardBody, CardHeader, Col} from 'reactstrap';

const DairyUsage = (props) => {

    return (
        <Card className="bg-light mt-2">
            <CardBody>
                <CardHeader>
                    <h3><span className="fa fa-shopping-cart"> </span> Popular Product</h3>
                </CardHeader>
                <CardBody className="row">
                    <Col>
                        <h2>{(props.popularProduct === null || props.popularProduct===undefined)?'--' : props.popularProduct.totalQuantity } quantity</h2>
                        <h4>{(props.popularProduct === null || props.popularProduct===undefined)?'--' : props.popularProduct.totalPrice } rwf</h4>
                    </Col>
                    <Col className="d-flex align-content-center">
                        <h1>{(props.popularProduct === null || props.popularProduct===undefined)?'--' : props.popularProduct.productName }</h1>
                    </Col>

                </CardBody>

            </CardBody>
        </Card>

    );
}

export default DairyUsage;