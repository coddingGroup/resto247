import React, {useState} from "react";
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import '../../../css/home.css';
import CircleMenu from "./CicleMenu";

let items = [
    {
        name: 'Add Product',
        icon: 'fa fa-plus',
        color: 'btn-success',
        to: '/management/products'
    },
    {
        name: 'Edit Product',
        icon: 'fa fa-pencil',
        color: 'btn-primary',
        to: '/management/products'
    },
    {
        name: 'Delete Product',
        icon: 'fa fa-trash',
        color: 'btn-danger',
        to: '/management/products'
    },
    {
        name: 'Stock IncreaseProduct',
        icon: 'fa fa-tasks',
        color: 'btn-warning',
        to: '/management/products'
    }
];

const ToggleButton = () => {

    const [collapse, setCollapse] = useState(true);

    const [status, setStatus] = useState('');

    const onEntering = () => setStatus('');

    const onEntered = () => setStatus('');

    const onExiting = () => setStatus('');

    const onExited = () => setStatus(' ');

    const toggle = () => setCollapse(!collapse);

    return (
        <React.Fragment>

            <Button className="color3" onClick={toggle}
                    style={{marginTop: '1rem', marginLeft: '1rem'}}>Manage</Button>{' '}

            <h5> {status}</h5>
            <Collapse
                isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}
            >
                <div className="col-12 col-md-11 offset-md-1">

                    <CircleMenu items={items}/>
                </div>

            </Collapse>
        </React.Fragment>
    );
}

export default ToggleButton;