import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,  CardImgOverlay, Button, Row, Col } from "reactstrap";
import { Loading } from "../LoadingComponent";
import { baseUrl } from "../../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard2({ item, onClick }) {
    //categorized cards

    if (item.isLoading) {
        return (
            <Loading />
        );
    }
    else if (item.errMess) {
        return (
            <h4> {item.errMess} </h4>
        );
    }
    else
        return (

            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }} >
                    <div className="m-2"> 
                <Card inverse className="" style={{ width: '16rem' }}>
                    <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
                    <CardImgOverlay>
                        <CardTitle tag="h6"  >
                            <div className="p-1 w-100 color3">{item.name}
                                <div className="badge badge-warning priceInHomepage"> 3000 RWF </div>
                            </div>


                        </CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : item.description}
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardImgOverlay>
                    <CardBody className="cardBodyForProductShow">

                        <div className="row">


                            <Button size="sm" className="bg-light  read-more-btn col-6 ">
                                <i className="fa fa-lg fa-info read-more-icon" aria-hidden="true"></i> Read More
                            </Button>


                            <Button size="sm" className="col-6 bg-light add-to-cart-btn">
                                <i className="fa fa-lg fa-cart-plus  add-to-cart-icon" aria-hidden="true"></i> Add to cart
                                </Button>

                        </div>

                    </CardBody>
                </Card>
                </div>
            </FadeTransform>

        );
} 


export default RenderCard2;