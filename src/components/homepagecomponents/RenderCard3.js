import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Form, Input, Row} from "reactstrap";
import {Loading} from "../LoadingComponent";
import React, {useState} from "react";
import '../../css/Some.css';
import {setImage} from "../../functions/setImage";

function RenderCard3({item, addToCart, cart}) {


    setImage(item.image);
    //categorized cards
    const [quantity, setQuantity] = useState('qty:1');
    const [displayD, setDisplayD] = useState("descriptionPartOfCartD_none");

    let changeValue = (event) => {
        setQuantity(event.target.value);
    }
    let showDescription = (event) => {
        setDisplayD("descriptionPartOfCartD_block");
    }
    let hideDescription = (event) => {
        setDisplayD("descriptionPartOfCartD_none");
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        if (cart.addedIds.includes(item.id)) {
            alert("product all ready in cart");
        } else {
            if (quantity === 'qty:1') {
                item["quantity"] = 1;
            } else {
                item["quantity"] = quantity;
            }

            addToCart(item);
        }


    };
    if (item.isLoading) {
        return (
            <Loading/>
        );
    } else if (item.errMess) {
        return (
            <h4> {item.errMess} </h4>
        );
    } else
        return (


            <div key={item.id} className="m-2">
                <Card onMouseEnter={showDescription} onMouseLeave={hideDescription}
                      className="bottom-shadow cardInWaiter">
                    <CardImg width="100%" src='' className={item.image} alt={item.image}/>
                    <CardTitle className="" tag="h6">
                        <div className="p-1 nameInCardForWaiter">
                            {item.name}
                        </div>
                        <div className="badge badge-warning priceInCardForWaiter"> {item.price} RWF</div>


                    </CardTitle>
                    <div className={displayD + " descriptionPartOfCart"}>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : item.description}
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </div>


                    <CardBody className="cardBodyForProductShow">

                        <div className="">
                            <Form className="z-index-front" onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={5}>
                                        <Input onChange={changeValue} type="number" name="quantity" value={quantity}
                                               placeholder="qty:1"/>
                                    </Col>
                                    <Col md={7}>
                                        <Button type="submit" size="sm"
                                                className="bottom-shadow bg-light add-to-cart-btn ">
                                            <i className="fa fa-lg fa-cart-plus  add-to-cart-icon"
                                               aria-hidden="true"></i> Add to cart
                                        </Button>
                                    </Col>
                                </Row>

                            </Form>


                        </div>

                    </CardBody>
                </Card>
            </div>

        );
}


export default RenderCard3;