import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../../../css/home.css';
import CircleMenu from "./CicleMenu";



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

            <Button className="color3" onClick={toggle} style={{ marginTop: '1rem', marginLeft: '1rem' }}>Manage</Button>{' '}

            <h5> {status}</h5>
            <Collapse
                isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}
            >
                <div className="col-12 col-md-11 offset-md-1">
                    
                        <CircleMenu />
                    </div>
                
            </Collapse>
        </React.Fragment>
    );
}

export default ToggleButton;