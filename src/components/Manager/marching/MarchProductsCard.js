import {baseUrl} from "../../../shared/baseUrl";
import {Button, Col, Form, Input, Label, Row} from "reactstrap";
import React, {useState} from "react";
import '../../../css/march.css';

let MarchProductsCard = () => {
    const [marchProduct, setMarchProduct] = useState([]);

    let addOtherProduct = () => {
        let it =
            <div className="row">
                <Col>
                    <h5><a href="index.html">Ibirayi</a></h5>
                </Col>
                <Col>
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
                </Col>

            </div>
        ;
        setMarchProduct([...marchProduct, it]);
    }
    return (
        <div className="march shadow-lg">
            <div className="marchBody">
                <img className="marchImage mr-2"
                     src={"images/products/confit-chicken-thigh-and-andouille-sausage-cassoulet.jpg"} alt=""/>

                <div>

                    <div>
                        <Button onClick={addOtherProduct} className="btn-warning"> <span className="fa fa-plus"> Other Product</span>
                        </Button>
                        {marchProduct}
                    </div>

                </div>
                <div className="clear"></div>

            </div>
        </div>
    )
}
export default MarchProductsCard;