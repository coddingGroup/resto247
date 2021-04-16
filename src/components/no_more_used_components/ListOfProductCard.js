import {Loading} from "../LoadingComponent";
import {FadeTransform} from "react-animation-components";
import {Button, Card, CardBody, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {baseUrl} from "../../shared/baseUrl";
import {useState} from "react";
import '../Manager/Manager.css';

function ListOfProductCard(props) {
    //categorized cards

    if (props.out.isLoading) {
        return (
            <Loading />
        );
    }
    else if (props.out.errMess) {
        return (
            <h4> {props.out.errMess} </h4>
        );
    }
    else
        return (

            <FadeTransform in
                           transformProps={{
                               exitTransform: 'scale(0.5) translateY(-50%)'
                           }} >
                <Card inverse className="m-2" style={{ width: '16rem' }}>
                    <div className="card_image">
                        <CardImg width="100%" src={props.out.image} alt={props.out.name} />
                    </div>

                    <CardImgOverlay>
                        <CardTitle tag="h6"  >
                            <div className="p-1 w-100 color3">{props.out.name}
                                <div className="badge badge-warning priceInHomepage"> 3000 RWF </div>
                            </div>


                        </CardTitle>
                        {props.out.designation ? <CardSubtitle>{props.out.designation}</CardSubtitle> : props.out.description}
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardImgOverlay>
                    <CardBody className="cardBodyForProductShow">

                        <div className="row">


                            <Button  size="sm" className="bg-light  read-more-btn col-6 ">
                                <i className="fa fa-lg fa-info read-more-icon" aria-hidden="true"></i> Read More
                            </Button>


                            <Button   size="sm" className="col-6 bg-light add-to-cart-btn">
                                <i className="fa fa-lg fa-cart-plus  add-to-cart-icon" aria-hidden="true"></i> Add to cart
                            </Button>


                        </div>



                    </CardBody>
                </Card>
            </FadeTransform>

        );
}
export default ListOfProductCard;