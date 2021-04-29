import React from 'react';

import {Card, CardBody, CardHeader, Col} from 'reactstrap';

const DairyUsage = () => {

    return (
        <Card className="bg-light mt-2">
            <CardBody>
                <CardHeader>
                    <h3><span className="fa fa-shopping-cart"> </span> Popular Food</h3>
                </CardHeader>
                <CardBody className="row">
                    <Col>
                        <h1> 50 </h1>
                    </Col>
                    <Col className="d-flex align-content-center">
                        <select>
                            <option>
                                Yesterday
                            </option>
                        </select>
                    </Col>

                </CardBody>

            </CardBody>
        </Card>

    );
}

export default DairyUsage;