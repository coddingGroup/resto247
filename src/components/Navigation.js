import React, {useState} from 'react';
import '../css/Some.css';
import Search from './homepagecomponents/Search';
import {NavLink} from "react-router-dom";
import {baseUrl} from "../shared/baseUrl";
import AddedCart from "./cartComponent/AddedCart";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    ButtonGroup,
    Modal,
    Label,
    Form,
    FormGroup,
    Input,
    ModalBody,
    ModalHeader,
    ModalFooter

} from 'reactstrap';


let Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleLogin = (event) => {
        toggleModal();
        props.loginUser({username: username, password: password});
        event.preventDefault();

    }

    function handleGoogleLogin(event) {
        toggleModal();
        props.googleLogin();
        event.preventDefault();
    }

    function handleLogout() {
        props.logoutUser();
    }
    const handleChangeOfUsername = (event)=>{
        setUsername(event.target.value);
    }
    const handleChangeOfPassword = (event) =>{
        setPassword(event.target.value);
    }
    const handleChangeOfRemember = (event) =>{
        setRemember(event.target.value);
    }

    return (
        <div className="container-fluid">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src="http://localhost:3000/logo.jpg" width="40px"/> 24/7 Resto</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
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
                        <NavItem><NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg"> Menu </span>
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg"> Contact Us </span>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem> Option 1</DropdownItem>
                                <DropdownItem> Option 2</DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem> Reset </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                    <span className="mr-5"> <Search searchbar="searchbar"/></span>
                </Collapse>

                <span className="navbar-text">

          <AddedCart cart={props.cart}/>

          <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !(localStorage.getItem('user')!==null) ?
                                        <Button outline onClick={toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                            <NavLink to="/management">Management</NavLink>
                                            <NavLink to="/witer"> waiter</NavLink>
                                            <div className="navbar-text mr-3">{localStorage.getItem('user').email} </div>
                                            <Button outline onClick={handleLogout}>
                                                <span className="fa fa-sign-out fa-lg"></span> Logout
                                                {props.auth.isFetching ?
                                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                    : null
                                                }
                                            </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>


                    {/* <a href="" data-toggle="modal" data-target= "#loginModal">
                        <span class="fa fa-sign-in"></span> Login
                    </a> */}
        </span>
            </Navbar>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Email</Label>
                            <Input type="text" id="username" name="username"
                                   value={username}
                                   onChange={handleChangeOfUsername}
                                    />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                   value={password}
                                   onChange={handleChangeOfPassword}
                                     />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                       value={remember}
                                       onChange={handleChangeOfRemember}
                                         />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                    <p></p>
                    <Button color="danger" onClick={handleGoogleLogin}><span className="fa fa-google fa-lg"></span> Login with Google</Button>
                </ModalBody>
            </Modal>
        </div>


    );
};


export default Navigation;