import React, {Component} from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Row
} from 'reactstrap';
import {Link} from "react-router-dom";
import {Control, Errors, LocalForm} from "react-redux-form";
import {Loading} from "./LoadingComponent";
import {Fade, FadeTransform, Stagger} from "react-animation-components";


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.togglerModal = this.togglerModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    togglerModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }


    render() {
        return (
            <div>
                <Button outline onClick={this.togglerModal}><span className="fa fa-pencil"></span> Submit
                    Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.togglerModal}>
                    <ModalHeader toggle={this.togglerModal}>Submit Comment.</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}> Rating </Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating"
                                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author" md={12}> Your Name </Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author" placeholder="Name"
                                                  className="form-control"
                                                  validators={{
                                                      maxLength: maxLength(15), minLength: minLength(3)
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'reqired',
                                            maxLength: 'Should be less than or equal to 15 characters',
                                            minLength: 'Should at least be three characters long'
                                        }}
                                    />

                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}> Comment </Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" type="textarea" id="comment" name="comment"
                                                      rows="6" className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>

        );
    }
}


function RenderDish({dish}) {
    if (dish != null)
        return (
            <FadeTransform in
                           trasformProps={{
                               exitTransform: 'scale(0.5) translateY(-50%)'
                           }}>
                <Card className="m-1">
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>

        );
    else
        return (
            <div></div>
        );
}

function RenderComments({comment, postComment, dishId}) {
    const comments = comment.map((comment) => {
        return (
            <div key={comment.id}>
                <ul className="list-unstyled ">
                    <Stagger in>
                        <Fade in>
                            <li>
                                {comment.comment}
                            </li>
                            <li>
                                -- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}
                            </li>
                        </Fade>
                    </Stagger>
                </ul>

            </div>
        );

    });

    return (
        <div>
            <h4>Comments</h4>
            {comments}
            <CommentForm dishId={dishId} postComment={postComment}/>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className='container'>
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className='container'>
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm m-1">
                        <RenderDish dish={props.dish}/>
                    </div>

                    <div className="col-12 col-sm m-1">
                        <RenderComments comment={props.comments}
                                        postComment={props.postComment}
                                        dishId={props.dish.id}
                        />

                    </div>

                </div>
            </div>

        );
    } else {
        return (
            <div></div>
        );
    }
}


export default DishDetail;

