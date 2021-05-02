import {Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap";
import React, {useState} from "react";
import '../../../css/march.css';

let MarchProductsCard = (props) => {

    let [index,setIndex] =useState(0) ;

    const [marchProduct, setMarchProduct] = useState([]);
    let options = '';
    if(props.products.products !== undefined){
         options =  props.products.products.map(product =>{
            return (
                <option key={product.id} value={JSON.stringify({...product})}>{product.name} </option>
            )
        });

    }


    let changeChosenProduct = (event) =>{
         let product = JSON.parse(event.target.value);
            let prevChosen = props.chosenProducts;
            prevChosen[event.target.name] = product;
            alert(JSON.stringify(prevChosen));
            props.setChosenProducts({...prevChosen});

    }






    let addOtherProduct = () => {
        let it =
                    (<Form>

                        <Row className="form-group">
                            <Col>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                                    </div>
                                    <select name={index} className="custom-select" onChange={changeChosenProduct}>
                                        <option selected>Choose...</option>
                                        {options}
                                    </select>
                                </div>
                            </Col>
                            <Col>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Qtn</span>
                                    </div>
                                    <input type="number" name="quantity" className="form-control"
                                           aria-label="Amount (to the nearest dollar)"/>
                                </div>
                            </Col>

                        </Row>

                    </Form>)

        ;
        setIndex(index+1);
        setMarchProduct([...marchProduct, it]);
    }
    return (
        <div className="march shadow-lg">
            <div className="marchBody">
                <Card>
                    <CardHeader className="bg-primary text-white">Marched Products</CardHeader>
                    <CardBody>
                        <div className="row p-1">
                            <Button onClick={addOtherProduct} className="btn-warning"> <span className="fa fa-plus"> Other Product</span>
                            </Button>
                        </div>
                        <div className="row p-1">
                            <div className="col-6">
                                <h4>Names</h4>

                            </div>
                            <div className="col-6">
                                <h4>Quantity</h4>
                            </div>
                        </div>
                        <div className="row p-1">
                                {marchProduct}
                        </div>

                    </CardBody>
                </Card>



            </div>
        </div>
    )
}
export default MarchProductsCard;