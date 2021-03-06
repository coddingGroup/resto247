import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Loading} from "../LoadingComponent";
import {FadeTransform} from "react-animation-components";
import "../../css/styles.css";

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
                <Card className="card_main">
                    <CardImg className="card_main_image" src={item.image} alt={item.name}/>
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