import React, {useState} from 'react';
import '../css/Some.css';
import Search from './homepagecomponents/Search';
import {NavLink} from "react-router-dom";
import AddedCart from "./cartComponent/AddedCart";
import {
    Button,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    UncontrolledDropdown
} from 'reactstrap';
import SearchOutputDisplay from "./Manager/SearchOutputDisplay";


let Navigation = (props) => {
    const [text, setText] = useState('');
    const [searchOutput, setSearchOutput] = useState([]);
    const searchText = (txt = text) => {
        let output = props.products.products.reduce(
            (result, oneProduct) => {
                if (oneProduct.name.toLowerCase().includes(txt.toLowerCase()) || oneProduct.category.toLowerCase().includes(txt.toLowerCase())) {
                    result = [...result, oneProduct];
                }
                return result;
            }, []
        );
        if (txt === '') {
            setSearchOutput([]);
        } else {
            setSearchOutput(output);
        }

    }

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

    const handleChangeOfUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleChangeOfPassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChangeOfRemember = (event) => {
        setRemember(event.target.value);
    }
    const getLink = (typeOfUser) => {
        if (typeOfUser === 'receptionist') {
            return <NavItem><NavLink className="nav-link" to="/witer">
                <span className="fa fa-list fa-lg"> Waiter </span>
            </NavLink> </NavItem>

        } else if (typeOfUser === 'stockManager') {
            return <NavItem><NavLink className="nav-link" to="/management">
                <span className="fa fa-list fa-lg"> Management </span>
            </NavLink></NavItem>
        } else {
            return <NavLink to="/profile"> Profile </NavLink>
        }
    }

    return (
        <div className="container-fluid">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src="https://firebasestorage.googleapis.com/v0/b/resto247-2c1f2.appspot.com/o/images%2Flogo.jpg?alt=media&token=6296ddb1-0cda-4a2a-8956-50209dc3a992" width="40px" alt="logo"/> 24/7 Resto</NavbarBrand>
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
                        {/*<UncontrolledDropdown nav inNavbar>*/}
                        {/*    <DropdownToggle nav caret>*/}
                        {/*        Options*/}
                        {/*    </DropdownToggle>*/}
                        {/*    <DropdownMenu right>*/}
                        {/*        <DropdownItem> Option 1</DropdownItem>*/}
                        {/*        <DropdownItem> Option 2</DropdownItem>*/}
                        {/*        <DropdownItem divider/>*/}
                        {/*        <DropdownItem> Reset </DropdownItem>*/}
                        {/*    </DropdownMenu>*/}
                        {/*</UncontrolledDropdown>*/}

                    </Nav>
                    <span className="mr-5"> <Search searchText={searchText}  setText={setText} text={text} searchbar="searchbar"/></span>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            {/* <Button className="bg-light btn"> */}
                            <span className="cart-in-nav">
                                <AddedCart cart={props.cart}/>
                                </span>
                            {/* </Button> */}
                        </NavItem>
                        {!(localStorage.getItem('user') !== null) ? <span>
                            <Button outline onClick={toggleModal}>
                                <span className="fa fa-sign-in fa-lg"></span> Login
                                {props.auth.isFetching ?
                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                    : null
                                }
                            </Button>
                            <Button outline>
                                <span className="fa fa-sign-in fa-lg"></span> <NavLink to="/signup">Sign up</NavLink>
                                {props.auth.isFetching ?
                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                    : null
                                }
                            </Button>

                            </span>
                            :
                            <React.Fragment>
                                {getLink(props.userCollection.userCollection.typeOfUser)}
                                {/*<div className="navbar-text mr-3">*/}
                                {/*    {props.userCollection.userCollection.firstName === null? "no first" : props.userCollection.userCollection.firstName} */}
                                {/*</div>*/}
                                <NavItem>
                                    <Button outline onClick={handleLogout}>
                                        <span className="fa fa-sign-out fa-lg"></span> Logout
                                        {props.auth.isFetching ?
                                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                            : null
                                        }
                                    </Button>
                                </NavItem>

                            </React.Fragment>
                        }


                    </Nav>
                </Collapse>





                {/* <a href="" data-toggle="modal" data-target= "#loginModal">
                        <span class="fa fa-sign-in"></span> Login
                    </a> */}
            </Navbar>
            <SearchOutputDisplay output={searchOutput}/>
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
                    <Button color="danger" onClick={handleGoogleLogin}><span
                        className="fa fa-google fa-lg"></span> Login with Google</Button>
                </ModalBody>
            </Modal>
        </div>


    );
};


export default Navigation;