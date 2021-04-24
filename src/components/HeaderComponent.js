import React, {Component} from "react";
import {
    Jumbotron,
    Navbar,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavbarBrand,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {NavLink} from "react-router-dom";

import FirstScreen from './homepagecomponents/FistScreen'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        // this.togglerNav = this.togglerNav.bind(this);
        // this.togglerModal = this.togglerModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);


    }

    togglerNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }

    // togglerModal() {
    //     this.setState({
    //         isModalOpen: !this.state.isModalOpen
    //     });
    // }
    // handleLogin(event) {
    //     this.togglerModal();
    //     alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
    //     event.preventDefault();
    // }
    render() {
        return (
            <React.Fragment>

                <FirstScreen/>
                {/* <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.togglerNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />    
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"> Home </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"> About Us </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"> Menu </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"> Contact Us </span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.togglerModal}>
                                        <span className="fa fa-sign-in fa-lg">Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </div>
                </Navbar> */}


                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.togglerModal}>
                    <ModalHeader toggle={this.togglerModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">User Name</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} /> Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> */}
            </React.Fragment>
        );
    }
}

export default Header;