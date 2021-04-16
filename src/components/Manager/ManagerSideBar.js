import { useState } from 'react';
import React, { Component } from 'react';
import '../Some.css';
import './Manager.css';
import { NavLink } from "react-router-dom";
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


var ManageBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);


    return (
        <div className=" mt-5 h-100 " >
            <Navbar id="sideBarM" color="light" light expand="md">

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto h-100 align-items-start d-flex" navbar vertical>
                        <NavItem>
                            <NavLink className="nav-link" to="#">
                                <span className="fa fa-home fa-lg "> Increase Products </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="#">
                                <span className="fa fa-info fa-lg"> Increase Resources </span>
                            </NavLink>
                        </NavItem>
                        <NavItem><NavLink className="nav-link" to="#">
                            <span className="fa fa-list fa-lg"> Daily usage </span>
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="#">
                                <span className="fa fa-address-card fa-lg"> Out of Order Products </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="#">
                                <span className="fa fa-address-card fa-lg"> Add new Resources </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="#">
                                <span className="fa fa-address-card fa-lg"> Add new Products </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="#">
                                <span className="fa fa-address-card fa-lg"> Matches Product to Resources </span>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem> Option 1</DropdownItem>
                                <DropdownItem> Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem> Reset </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem className="d-flex justify-content-end ">
                            <NavLink className="nav-link" to="#">
                                <span className="fa fa-address-card fa-lg"> Setting </span>
                            </NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>


            </Navbar>

        </div>


    );
};


export default ManageBar;