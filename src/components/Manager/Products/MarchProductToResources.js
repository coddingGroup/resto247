import React, {useEffect, useState} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container, Form, FormGroup, Input, Label,
    Row
} from "reactstrap";
import Navigation from "../UIcomponents/SideNavigation";
import {baseUrl} from "../../../shared/baseUrl";
import '../../../css/march.css';
import MarchProductsCard from "../marching/MarchProductsCard";

const MarchProductToResources = (props) => {


    return (
        <React.Fragment>

            <div className="row">

                <div className="col-md-12">

                    <div>
                        <div>
                            <Row className="">
                                <Col md={5}>
                                    <div className="march shadow-lg">
                                        <div className="marchBody">
                                            <img className="marchImage mr-2"
                                                 src={"images/products/confit-chicken-thigh-and-andouille-sausage-cassoulet.jpg"}
                                                 alt=""/>

                                            <div>
                                                <h5><a href="index.html">Ibirayi</a></h5>
                                                <div>
                                                    <Form>
                                                        <Row className="form-group">
                                                            <Col>
                                                                <Label>
                                                                    Quantity
                                                                </Label>
                                                            </Col>
                                                            <Col>
                                                                <Input className="form-control" type="number"/>
                                                            </Col>

                                                        </Row>

                                                    </Form>
                                                </div>

                                            </div>
                                            <div className="clear"></div>

                                        </div>
                                    </div>


                                </Col>
                                <Col md={2} className="d-flex align-items-center justify-content-center">
                                    <div>
                                        <button type="button" className=" btn-circle btn btn-xl"><i
                                            className="fa fa-lg fa-gg"></i>
                                        </button>
                                    </div>

                                </Col>
                                <Col md={5}>


                                    <MarchProductsCard/>


                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

            </div>


        </React.Fragment>
    )
}
export default MarchProductToResources;