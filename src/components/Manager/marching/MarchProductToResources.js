import React from 'react';
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
    Form,
    Input,
    Label,
    Row
} from "reactstrap";
import '../../../css/march.css';
import MarchProductsCard from "./MarchProductsCard";
import {setImage} from "../../../functions/setImage";

const MarchProductToResources = (props) => {
    let prevMarched = null;
    let marchResourceToProducts = props.marchResourceToProducts.marchResourceToProducts;
    if(marchResourceToProducts !==undefined && marchResourceToProducts !==null)
    {
        prevMarched = (marchResourceToProducts).map(doc =>{
            let resourceSide = (<div>
                <div className="march shadow-lg">
                    <div className="marchBody">
                        <div>
                            <Card>
                                <CardImg top width="100%" src="" className={doc.resourceData.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{doc.resourceName}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{doc.resourceData.image}</CardSubtitle>
                                    <CardText>{doc.resourceData.category}</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </div>

                        <div>
                            <h5><a href="index.html">{doc.resourceName}</a></h5>
                            <div>
                                <Form>
                                    <Row className="form-group">
                                        <Col>
                                            <Label>
                                                {doc.resourceQuantity}
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


            </div>);

            let allProducts = doc.products.map(product =>{
                return (
                    <React.Fragment>
                        <dt className="col-6">{product.name}</dt>
                        <dd className="col-6">{product.quantity}</dd>
                    </React.Fragment>
                )
            });
            let productsSide = (
                <div>


                    <Card>
                        <CardHeader className="bg-primary text-white">Marched Products</CardHeader>
                        <CardBody>
                            <div className="row p-1">
                                <div className="col-6">
                                    <h4>Names</h4>

                                </div>
                                <div className="col-6">
                                    <h4>Quantity</h4>
                                </div>
                            </div>
                            <dl className="row p-1">
                                {allProducts}
                            </dl>
                        </CardBody>
                    </Card>


                </div>
            );

            return (
                <div>
                    <div>
                        <Row className="">
                            <Col md={5}>
                                {resourceSide}
                            </Col>
                            <Col md={2} className="d-flex align-items-center justify-content-center">
                                <div>
                                    <button type="button" className=" btn-circle btn btn-xl"><i
                                        className="fa fa-lg fa-gg"></i>
                                    </button>
                                </div>

                            </Col>
                            <Col md={5}>
                                {productsSide}
                            </Col>
                        </Row>
                    </div>
                </div>



            );
        });
    }



    return (
        <React.Fragment>

            <div className="row">

                <div className="col-md-12">
                    {prevMarched}

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