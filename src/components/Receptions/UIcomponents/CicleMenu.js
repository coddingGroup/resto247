import React, {useState} from "react";
import '../../../css/home.css';
import {NavLink} from "react-router-dom";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";

let items = [
    {
        name: 'Add Product',
        icon: 'fa fa-plus',
        color: 'btn-success'
    },
    {
        name: 'Add Product',
        icon: 'fa fa-plus',
        color: 'btn-success'
    },
    {
        name: 'Edit Product',
        icon: 'fa fa-pencil',
        color: 'btn-primary'
    },
    {
        name: 'Delete Product',
        icon: 'fa fa-trash',
        color: 'btn-danger'
    },
    {
        name: 'Stock IncreaseProduct',
        icon: 'fa fa-tasks',
        color: 'btn-warning'
    }
];
const CircleMenu = ({items}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);

    let length = items.length;

    let allButton = items.map(item => {
        return (
            <div className="col ">
                <NavLink to={item.to}>
                    <button type="button" className={item.color + " btn btn-circle btn-xl"}><i
                        className={item.icon}></i>
                    </button>
                    <span className="row"> {item.name} </span>
                </NavLink>
            </div>
        )
    })

    return (
        <div class="panel panel-default ">
            <Modal isOpen={isModalOpen} toggle={togglerModal}>
                <ModalHeader toggle={togglerModal}>Add New Product</ModalHeader>
                <ModalBody>
                    <Form onSubmit="">
                        <FormGroup>
                            <Label htmlFor="productName">Product Name</Label>
                            <Input type="text" id="productName" name="productName"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input type="number" id="quantity" name="quantity"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="price">Price</Label>
                            <Input type="number" id="price" name="price"/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="" htmlFor="customFile">Product Image</Label>
                            <Input type="file" className="form-control" id="customFile"/>
                        </FormGroup>

                        <Button type="submit" value="submit" color="primary">Save</Button>
                    </Form>
                </ModalBody>
            </Modal>
            <div class="panel-heading">

            </div>

            <div class="row panel-body ">

                <div className="col ">
                    <button onClick={togglerModal} type="button" className="btn-warning btn btn-circle btn-xl"><i
                        className="fa fa-plus"></i>
                    </button>
                    <span className="row"> Add new Product </span>
                </div>
                <div className="col ">
                    <button onClick={togglerModal} type="button" className="btn-primary btn btn-circle btn-xl"><i
                        className="fa fa-plus"></i>
                    </button>
                    <span className="row"> Add new Resources </span>
                </div>


                {/*<div class="col ">*/}
                {/*    <button type="button" class="btn btn-success btn-circle btn-xl"><i class="fa fa-plus"></i>*/}
                {/*    </button>*/}
                {/*    <span class="row"> Add Product </span>*/}
                {/*</div>*/}

                {/*<div class="col ">*/}
                {/*    <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa fa-pencil"></i>*/}
                {/*    </button>*/}
                {/*    <span class="row"> Edit Product </span>*/}
                {/*</div>*/}
                {/*<div class="col ">*/}
                {/*    <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-trash"></i>*/}
                {/*    </button>*/}
                {/*    <span class="row"> Delete Product </span>*/}
                {/*</div>*/}

                {/*<div class="col ">*/}
                {/*    <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="fa fa-tasks"></i>*/}
                {/*    </button>*/}
                {/*    <span class="row"> Stock Manager </span>*/}
                {/*</div>*/}

                {/*
                <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa fa-list"></i>
                </button>
                <button type="button" class="btn btn-success btn-circle btn-xl"><i class="fa fa-link"></i>
                </button>
                <button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-check"></i>
                </button>
                <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="fa fa-times"></i>
                </button>
                <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-heart"></i>
                </button> */}
            </div>

        </div>
    );
}

export default CircleMenu;