import { useState } from 'react';
import React, { Component } from 'react';
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


var Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);

  const togglerModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="container-fluid">
      <Navbar color="light" light expand="md">
      
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto flex-column" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/management/dashboard">
                <span className="fa fa-home fa-lg"> Dashboard </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/management/products">
                <span className="fa fa-info fa-lg"> Products </span>
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
                <DropdownItem divider />
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
              <Input type="text" id="username" name="username" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" /> Remember me
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