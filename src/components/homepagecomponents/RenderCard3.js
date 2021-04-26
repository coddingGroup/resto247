import {
    Card, CardImg, CardBody,
    CardTitle,
    Button,
    Form,
    Input,
    Row,
    Col,
    Label, CardSubtitle, CardText
} from "reactstrap";
import {Loading} from "../LoadingComponent";
import {baseUrl} from "../../shared/baseUrl";
import {FadeTransform} from "react-animation-components";
import React, {useState} from "react";
import '../../css/Some.css';
import {firebaseStorage} from "../../firebase/firebase";

function RenderCard3({item, addToCart, cart}) {
    //categorized cards
    const [quantity, setQuantity] = useState('qty:1');
    const [displayD, setDisplayD] = useState("descriptionPartOfCartD_none");

    const [image, setImage] = useState('');
    let gsReference = firebaseStorage.refFromURL(item.image);
    gsReference.getDownloadURL()
        .then((url) => {
            setImage(url);
        })
        .catch((error) => {
            setImage('https://firebasestorage.googleapis.com/v0/b/resto247-2c1f2.appspot.com/o/images%2Flogo.jpg?alt=media&token=6296ddb1-0cda-4a2a-8956-50209dc3a992');
        });
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
                    <CardImg width="100%" src={image} alt={item.name}/>
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