import {Col, Form, Row} from "reactstrap";
import React, {useState} from "react";
import {setImage} from "../../../functions/setImage";

let MarchResourceCard = (props) =>{
    let [quantity,setQuantity] = useState(0);

    let changeChosenProduct = (event) =>{
        let resource = JSON.parse(event.target.value);
        props.setChosenResource(resource);
        setImage(resource.image,'marchResourceImage');
    }


    let handleQuantityChange = (event) =>{
        let value=event.target.value;
        let prev = props.chosenResource;
        if(prev.name === undefined){
            alert("choose resources first");
        }
        else{
            setQuantity(value);
            prev.matchResourceQuantity = value;
        }

    }








    let resourceOptions;
    if( props.resources.products!==undefined){
        resourceOptions = props.resources.products.map(resource =>{
            return (
                <option key={resource.id} value={JSON.stringify(resource)}>{resource.name} </option>
            )
        });
    }
    return(
        <div className="mb-3">
            <div className="march shadow-lg">
                <div className="marchBody">
                    <div className="">
                        <h2 className="d-flex justify-content-center color2 pb-1"> Resources</h2>
                        <div className="resourcesPart">

                            <img src="" className={"doc.image" +" marchImage marchResourceImage mr-2"} alt="Card image cap" />
                            <div className="marchDescription">
                                <Form>
                                    <Row className="form-group">
                                        <Col>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Name</label>
                                                </div>
                                                <select className="custom-select" id="inputGroupSelect02" onChange={changeChosenProduct}>
                                                    <option selected>Choose...</option>
                                                    {resourceOptions}
                                                </select>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Qtn</span>
                                                </div>
                                                <input type="number" name="" value={quantity} onChange={handleQuantityChange} className="form-control"
                                                       aria-label="Amount (to the nearest dollar)"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>

                </div>
            </div>
        </div>
    )
}
export default MarchResourceCard;