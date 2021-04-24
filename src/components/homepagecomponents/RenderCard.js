import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardImgOverlay, Button, Row, Col} from "reactstrap";
import {Loading} from "../LoadingComponent";
import {baseUrl} from "../../shared/baseUrl";
import {FadeTransform} from "react-animation-components";

export default function RenderCard({item, isLoading, errMess}) {
    // render featured cards

    if (isLoading) {
        return (
            <Loading/>
        );
    } else if (errMess) {
        return (
            <h4> {errMess} </h4>
        );
    } else
        return (
            <FadeTransform in
                           transformProps={{
                               exitTransform: 'scale(0.5) translateY(-50%)'
                           }}>
                <Card>
                    <CardImg src={item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>
                            {item.description}
                        </CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
};