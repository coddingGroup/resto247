import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
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
    NavbarToggler,
    NavItem,
    UncontrolledDropdown
} from 'reactstrap';
import '../../../css/styles.css';

let sideBarItems = [
    {
        name: 'Dashboard',
        icon: 'fa fa-plus',
        color: 'btn-success',
        to: '/management/dashboard'
    },
    {
        name: 'Report',
        icon: 'fa fa-plus',
        color: 'btn-success',
        to: '/management/Report'
    },
    {
        name: 'Products info',
        icon: 'fa fa-plus',
        color: 'btn-success',
        to: '/management/stock/products'
    },
    {
        name: 'Increase resources',
        icon: 'fa fa-trash',
        color: 'btn-danger',
        to: '/management/stock/resources'
    },
    {
        name: 'Daily usage',
        icon: 'fa fa-tasks',
        color: 'btn-warning',
        to: '/management/stock/dailyUsage'
    },
    {
        name: 'March product to resource',
        icon: 'fa fa-tasks',
        color: 'btn-warning',
        to: '/management/stock/marchProductToResources'
    }
];

var Navigation = (props) => {
    let changeActiveTabInProduct = () =>{
      localStorage.setItem('activeTabInProducts','food');
    };
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);

    const togglerModal = () => setIsModalOpen(!isModalOpen);

    let output = sideBarItems.map(item => {
        return (
            <NavItem onClick={changeActiveTabInProduct}>
                <NavLink className="nav-link" to={item.to}>
                    <span className={item.icon}> {item.name} </span>
                </NavLink>
            </NavItem>
        )
    })
    return (
        <div className="container-fluid">
            <Navbar color="light" light expand="md">

                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto flex-column navItems " navbar>
                        {output}
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

                </Collapse>

                <span className="navbar-text">






          {/* <a href="" data-toggle="modal" data-target= "#loginModal">
                        <span class="fa fa-sign-in"></span> Login
                    </a> */}
        </span>
            </Navbar>
            <Modal isOpen={isModalOpen} toggle={togglerModal}>
                <ModalHeader toggle={togglerModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit="">
                        <FormGroup>
                            <Label htmlFor="username">User Name</Label>
                            <Input type="text" id="username" name="username"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"/> Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>


    );
};


export default Navigation;