import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Label, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors, actions } from "react-redux-form";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);  //regular expression   

class Login extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {

        this.props.postFeedback(values.firstname, values.lastname, values.email, values.contactType, values.telnum, values.agree);

        console.log("Curent state is: " + JSON.stringify(values));

        this.props.resetFeedbackForm();
    }



    render() {
        return (
            <div className="row mt-5">
                <div className="col-12 col-md-6 offset-sm-3">
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>

                        <Row className="form-group">
                            <Label htmlFor="email" md={2}> Email </Label>
                            <Col md={10}>
                                <Control.text model=".email" id="email" name="email" placeholder="Email"
                                    className="form-control"
                                    validators={{
                                        required, validEmail
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid Email address'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}> Password</Label>
                            <Col md={10}>
                                <Control.password model=".firstname" id="firstname" name="firstname" placeholder="Password"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 chatacters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 6, offset: 2 }}>
                                <div className="form-check">
                                    <Control.checkbox model=".agree" name="agree" className="form-check-input" /> {' '}
                                    <strong>Remember password? </strong>

                                </div>
                            </Col>

                        </Row>

                        <Row className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Login
                                    </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="col-12 col-md-3"></div>
            </div>
        );
    }
}
export default Login;