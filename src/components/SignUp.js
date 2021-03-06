import React, {Component} from 'react';
import {Button, Col, Label, Row} from "reactstrap";
import {Control, Errors, Form} from "react-redux-form";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);  //regular expression


class SignUp extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        this.props.signUp(values, 'client');

        // this.props.postFeedback(values.firstname, values.lastname, values.email, values.contactType, values.telnum, values.agree);

        console.log("Curent state is: " + JSON.stringify(values));

        // this.props.resetFeedbackForm();
    }


    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="bg-light shadow-lg mt-5 mb-5 ">


                    <div className="p-5">
                        <div className="">
                            <Form model="signUp" onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}> First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstName" id="firstName" name="firstName"
                                                      placeholder="First Name"
                                                      className="form-control"
                                                      validators={{
                                                          required, minLength: minLength(3), maxLength: maxLength(15)
                                                      }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
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
                                    <Label htmlFor="lastName" md={2}> Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                                      placeholder="Last Name"
                                                      className="form-control"
                                                      validators={{
                                                          required, minLength: minLength(3), maxLength: maxLength(15)
                                                      }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
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
                                    <Label htmlFor="telNum" md={2}> Contact Tel</Label>
                                    <Col md={10}>
                                        <Control.text model=".telNum" id="telNum" name="telNum"
                                                      placeholder="Tel. Number"
                                                      className="form-control"
                                                      validators={{
                                                          required,
                                                          minLength: minLength(3),
                                                          maxLength: maxLength(15),
                                                          isNumber
                                                      }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".telNum"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />

                                    </Col>
                                </Row>

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
                                    <Label htmlFor="password" md={2}> Password</Label>
                                    <Col md={10}>
                                        <Control.password model=".password" id="password" name="password"
                                                          placeholder="Password"
                                                          className="form-control"
                                                          validators={{
                                                              required,
                                                              minLength: minLength(3),
                                                              maxLength: maxLength(15)
                                                          }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".password"
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
                                    <Label htmlFor="confirmPassword" md={2}> Password</Label>
                                    <Col md={10}>
                                        <Control.password model=".confirmPassword" id="confirmPassword"
                                                          name="confirmPassword" placeholder="Confirm Password"
                                                          className="form-control"
                                                          validators={{
                                                              required,
                                                              minLength: minLength(3),
                                                              maxLength: maxLength(15)
                                                          }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".confirmPassword"
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
                                    <Col md={{size: 10, offset: 2}}>
                                        <div className="form-check">
                                            <Control.checkbox model=".agree" name="agree"
                                                              className="form-check-input"/> {' '}
                                            <strong>Remember password? </strong>

                                        </div>
                                    </Col>

                                </Row>

                                <Row className="form-group">
                                    <Col md={{size: 7, offset: 5}}>
                                        <Button type="submit" color="primary">
                                            Sign Up
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="col-12 col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;