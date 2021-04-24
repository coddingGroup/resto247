import React from 'react';
import {Badge, Button} from 'reactstrap';
import '../../css/home.css'

const AddedCart = ({cart}) => {
    return (
        <React.Fragment>

            <Button color="#fff"> <i class="fa fa-2x fa-shopping-cart  add-to-cart-icon2"> </i><Badge
                className="color3 align-top">{cart.number}</Badge></Button>

        </React.Fragment>
    );

}

export default AddedCart;