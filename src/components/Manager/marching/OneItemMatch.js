import React, {useEffect} from 'react'
import {setImage} from "../../../functions/setImage";
import {
    
    Card,
    CardBody,
    CardHeader,
    Col,
    
    Row
} from "reactstrap";
export default function OneItemMatch(doc) {
    useEffect(() => {
        setImage(doc.image);
      });

    let resourceSide = (<div className="mb-3">
                <div key={doc.id} className="march shadow-lg">
                    <div className="marchBody">
                        <div className="">
                            <h2 className="d-flex justify-content-center color2 pb-1"> Resources</h2>
                            <div className="resourcesPart">
                                <img src="" className={doc.image +" marchImage mr-2"} alt="Card image cap" />
                                <div className="marchDescription">
                                    <h3 tag="h5">Name : {doc.resourceName}</h3>
                                    <h5 tag="h6" className="mb-2 text-muted">Quantity: {doc.resourceQuantity}</h5>
                                </div>
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
    
}
