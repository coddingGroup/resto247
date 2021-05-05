import React, {useState} from "react";
import '../../../css/home.css';
import {Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import {Control, Errors, Form} from "react-redux-form";
import {firebaseStorage} from "../../../firebase/firebase";

const CircleMenu = ({items, uploadProduct, uploadResource, uploadMiscellaneous, uploadWaiter}) => {
    //const [image, setImage] = useState('');


    // const [category] = useState('food');
    // const [description] = useState('food');
    // const [image] = useState('food');
    // const [productName] = useState('food');
    // const [soldPrice] = useState('food');
    // const [categoryR] = useState('food');
    // const [descriptionR] = useState('food');
    // const [imageR] = useState('food');
    // const [resourceName] = useState('food');
    // const [initialQuantity] = useState('food');
    // const [unitPrice] = useState('food');
    // const [unit] = useState('food');


    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    //const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);  //regular expression

    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);

    const [isModalOpenM, setIsModalOpenM] = useState(false);
    const togglerModalM = () => setIsModalOpenM(!isModalOpenM);

    const [isModalOpenR, setIsModalOpenR] = useState(false);
    const togglerModalR = () => setIsModalOpenR(!isModalOpenR);


    const [isModalOpenWaiter, setIsModalOpenWaiter] = useState(false);
    const togglerModalWaiter = () => setIsModalOpenWaiter(!isModalOpenWaiter);


    let handleProductSubmit = (values, event) => {
        const image = values.image;

        if(image === undefined || image ===null){
            uploadProduct(values, "images/logo.jpg");
            return;
        }

        let file = values.image[0];
        let fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        const name = values.productName + '-' + (+new Date());
        let ref = firebaseStorage.ref();
        let imagePath = "images/products/" + name + '.' + fileExtension;
        let fullRef = ref.child(imagePath);
        const task = fullRef.put(file);
        task.then((snapshot) => {
            uploadProduct(values, imagePath);

        });
    };

    let handleResourceSubmit = (values, event) => {
        const image = values.image;

        if(image === undefined || image ===null){
            uploadResource(values, "images/logo.jpg");
            return;
        }

        let file = values.image[0];
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        const name = values.resourceName + '-' + (+new Date());
        let ref = firebaseStorage.ref();
        let imagePath = "images/resources/" + name + '.' + fileExtension;
        let fullRef = ref.child(imagePath);
        const task = fullRef.put(file);
        task.then((snapshot) => {
            uploadResource(values, imagePath);

        });
    };
    let handleMiscellaneousSubmit = (values, event) => {
        const image = values.image;

        if(image === undefined || image ===null){
            uploadMiscellaneous(values, "images/logo.jpg");
            return;
        }

        let file = values.image[0];

        const fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        const name = values.reason + '-' + (+new Date());
        let ref = firebaseStorage.ref();
        let imagePath = "images/miscellaneous/" + name + '.' + fileExtension;
        let fullRef = ref.child(imagePath);
        const task = fullRef.put(file);
        task.then((snapshot) => {
            uploadMiscellaneous(values, imagePath);

        });
    };


    let handleWaiterSubmit = (values, event) => {
        const image = values.image;

        if(image === undefined || image ===null){
            uploadWaiter(values, "images/logo.jpg");
            return;
        }

        let file = values.image[0];
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        const name = values.reason + '-' + (+new Date());
        let ref = firebaseStorage.ref();
        let imagePath = "images/miscellaneous/" + name + '.' + fileExtension;
        let fullRef = ref.child(imagePath);
        const task = fullRef.put(file);
        task.then((snapshot) => {
            uploadWaiter(values, imagePath);

        });
    };


    return (
        <div class="panel panel-default ">
            <Modal isOpen={isModalOpen} toggle={togglerModal}>
                <ModalHeader toggle={togglerModal}>Add New Product</ModalHeader>
                <ModalBody>
                    <Form model="addNewProduct" onSubmit={handleProductSubmit} encType="multipart/form-data">
                        <Row className="form-group">
                            <Label htmlFor="productName" md={2}> Product Name</Label>


                            <Col md={10}>
                                <Control.text model=".productName" id="productName" name="productName"
                                              placeholder="Product Name"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".productName"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="category" md={2}> Category</Label>
                            <Col md={10}>
                                <Control.text model=".category" id="category" name="category"
                                              placeholder="Category"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".category"
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
                            <Label htmlFor="description" md={2}> Description</Label>
                            <Col md={10}>
                                <Control.text model=".description" id="description" name="description"
                                              placeholder="description"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(4), maxLength: maxLength(30)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".description"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 4 characters',
                                        maxLength: 'Must be 30 chatacters or less'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="soldPrice" md={2}> soldPrice</Label>
                            <Col md={10}>
                                <Control.text type="number" model=".soldPrice" id="soldPrice" name="soldPrice"
                                              placeholder="Sold Price"
                                              className="form-control"
                                              validators={{
                                                  required,
                                                  minLength: minLength(3),
                                                  maxLength: maxLength(5),
                                                  isNumber
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".soldPrice"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 5 numbers or less',
                                        isNumber: 'Must be a number'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="image" md={2}> Image</Label>
                            <Col md={10}>
                                <Control.file model=".image" id="image" name="image"
                                              placeholder="image"
                                              className="form-control"
                                              accept=".png,.jpg,.webp,.jpeg,.gif,.dat"
                                    // validators={{
                                    //     required, minLength: minLength(4), maxLength: maxLength(30)
                                    // }}
                                />
                                {/*<Errors*/}
                                {/*    className="text-danger"*/}
                                {/*    model=".description"*/}
                                {/*    show="touched"*/}
                                {/*    messages={{*/}
                                {/*        required: 'Required',*/}
                                {/*        minLength: 'Must be greater than 4 characters',*/}
                                {/*        maxLength: 'Must be 30 chatacters or less'*/}
                                {/*    }}*/}
                                {/*/>*/}

                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>

            <Modal isOpen={isModalOpenR} toggle={togglerModalR}>
                <ModalHeader toggle={togglerModalR}>Add New resources</ModalHeader>
                <ModalBody>
                    <Form model="addNewResource" onSubmit={handleResourceSubmit} encType="multipart/form-data">
                        <Row className="form-group">
                            <Label htmlFor="resourceName" md={2}> Resource Name</Label>
                            <Col md={10}>
                                <Control.text model=".resourceName" id="resourceName" name="resourceName"
                                              placeholder="Resource Name"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".resourceName"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="category" md={2}> Category</Label>
                            <Col md={10}>
                                <Control.text model=".category" id="category" name="category"
                                              placeholder="Category"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".category"
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
                            <Label htmlFor="unit" md={2}> Unit</Label>
                            <Col md={10}>
                                <Control.text model=".unit" id="unit" name="unit"
                                              placeholder="Unit"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(1), maxLength: maxLength(4)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".unit"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 1 characters',
                                        maxLength: 'Must be 5 chatacters or less'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="description" md={2}> Description</Label>
                            <Col md={10}>
                                <Control.text model=".description" id="description" name="description"
                                              placeholder="description"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(4), maxLength: maxLength(30)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".description"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 4 characters',
                                        maxLength: 'Must be 30 chatacters or less'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="initialQuantity" md={2}> Initial Quantity</Label>
                            <Col md={10}>
                                <Control.text type="number" model=".initialQuantity" id="initialQuantity"
                                              name="initialQuantity" placeholder="Initial Quantity"
                                              className="form-control"
                                              validators={{
                                                  required,
                                                  minLength: minLength(1),
                                                  maxLength: maxLength(3),
                                                  isNumber
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".initialQuantity"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 1 numbers',
                                        maxLength: 'Must be 3 numbers or less',
                                        isNumber: 'Must be a number'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="unitPrice" md={2}> Unit Price</Label>
                            <Col md={10}>
                                <Control.text type="number" model=".unitPrice" id="unitPrice" name="unitPrice"
                                              placeholder="Unit Price"
                                              className="form-control"
                                              validators={{
                                                  required,
                                                  minLength: minLength(3),
                                                  maxLength: maxLength(5),
                                                  isNumber
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".unitPrice"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 5 numbers or less',
                                        isNumber: 'Must be a number'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="image" md={2}> Image</Label>
                            <Col md={10}>
                                <Control.file model=".image" id="image" name="image"
                                              placeholder="image"
                                              className="form-control"
                                    // validators={{
                                    //     required, minLength: minLength(4), maxLength: maxLength(30)
                                    // }}
                                />
                                {/*<Errors*/}
                                {/*    className="text-danger"*/}
                                {/*    model=".image"*/}
                                {/*    show="touched"*/}
                                {/*    messages={{*/}
                                {/*        required: 'Required',*/}
                                {/*        minLength: 'Must be greater than 4 characters',*/}
                                {/*        maxLength: 'Must be 30 chatacters or less'*/}
                                {/*    }}*/}
                                {/*/>*/}

                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>


            <Modal isOpen={isModalOpenM} toggle={togglerModalM}>
                <ModalHeader toggle={togglerModalM}>Add Miscellaneous</ModalHeader>
                <ModalBody>
                    <Form model="addMiscellaneous" onSubmit={handleMiscellaneousSubmit} encType="multipart/form-data">
                        <Row className="form-group">
                            <Label htmlFor="reason" md={2}> Reason</Label>


                            <Col md={10}>
                                <Control.text model=".reason" id="reason" name="reason"
                                              placeholder="reason"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".reason"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="by" md={2}> Category</Label>
                            <Col md={10}>
                                <Control.text model=".by" id="by" name="by"
                                              placeholder="by"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".by"
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
                            <Label htmlFor="description" md={2}> Description</Label>
                            <Col md={10}>
                                <Control.text model=".description" id="description" name="description"
                                              placeholder="description"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(4), maxLength: maxLength(30)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".description"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 4 characters',
                                        maxLength: 'Must be 30 chatacters or less'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="price" md={2}> Price</Label>
                            <Col md={10}>
                                <Control.text type="number" model=".price" id="price" name="price"
                                              placeholder="how much?"
                                              className="form-control"
                                              validators={{
                                                  required,
                                                  minLength: minLength(2),
                                                  maxLength: maxLength(5),
                                                  isNumber
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".price"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 5 numbers or less',
                                        isNumber: 'Must be a number'
                                    }}
                                />

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="proof" md={2}> proof</Label>
                            <Col md={10}>
                                <Control.file model=".proof" id="proof" name="proof"
                                              placeholder="proof"
                                              className="form-control"
                                    // validators={{
                                    //     required, minLength: minLength(4), maxLength: maxLength(30)
                                    // }}
                                />
                                {/*<Errors*/}
                                {/*    className="text-danger"*/}
                                {/*    model=".description"*/}
                                {/*    show="touched"*/}
                                {/*    messages={{*/}
                                {/*        required: 'Required',*/}
                                {/*        minLength: 'Must be greater than 4 characters',*/}
                                {/*        maxLength: 'Must be 30 chatacters or less'*/}
                                {/*    }}*/}
                                {/*/>*/}

                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>


            <Modal isOpen={isModalOpenWaiter} toggle={togglerModalWaiter}>
                <ModalHeader toggle={togglerModalWaiter}>Add Waiter</ModalHeader>
                <ModalBody>
                    <Form model="addWaiter" onSubmit={handleWaiterSubmit} encType="multipart/form-data">
                        <Row className="form-group">
                            <Label htmlFor="firstName" md={2}> First Name</Label>


                            <Col md={10}>
                                <Control.text model=".firstName" id="firstName" name="firstName"
                                              placeholder="first name"
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
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastName" md={2}> Second name</Label>
                            <Col md={10}>
                                <Control.text model=".lastName" id="lastName" name="lastName"
                                              placeholder="lastName"
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
                            <Label htmlFor="image" md={2}> image</Label>
                            <Col md={10}>
                                <Control.file model=".image" id="image" name="image"
                                              placeholder="image"
                                              className="form-control"
                                    // validators={{
                                    //     required, minLength: minLength(4), maxLength: maxLength(30)
                                    // }}
                                />
                                {/*<Errors*/}
                                {/*    className="text-danger"*/}
                                {/*    model=".description"*/}
                                {/*    show="touched"*/}
                                {/*    messages={{*/}
                                {/*        required: 'Required',*/}
                                {/*        minLength: 'Must be greater than 4 characters',*/}
                                {/*        maxLength: 'Must be 30 chatacters or less'*/}
                                {/*    }}*/}
                                {/*/>*/}

                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>

            <div class="panel-heading">

            </div>

            <div class="row panel-body ">

                <div className="col ">
                    <div className="">
                        <button onClick={togglerModal} type="button" className="btn-warning btn btn-circle btn-xl "><i
                            className="fa fa-plus"></i>
                        </button>
                        <span className="row"> Add new Product </span>
                    </div>
                </div>
                <div className="col ">
                    <div className="">
                        <button onClick={togglerModalR} type="button" className="btn-primary btn btn-circle btn-xl "><i
                            className="fa fa-plus"></i>
                        </button>
                        <span className="row"> Add new Resources </span>
                    </div>
                </div>

                <div className="col ">
                    <div className="">
                        <button onClick={togglerModalM} type="button" className="btn-primary btn btn-circle btn-xl "><i
                            className="fa fa-money"></i>
                        </button>
                        <span className="row"> Add other expenses </span>
                    </div>
                </div>

                <div className="col ">
                    <div className="">
                        <button onClick={togglerModalWaiter} type="button" className="btn-primary btn btn-circle btn-xl "><i
                            className="fa fa-users"></i>
                        </button>
                        <span className="row"> Add other waiter </span>
                    </div>
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