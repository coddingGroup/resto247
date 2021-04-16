import React from 'react';
import { Badge, Button } from 'reactstrap';
import '../../../css/home.css'

const AddedCarts = (nbr) => {
    return (
        <React.Fragment>
            
            <Button color="#fff">  <i class="fa fa-2x fa-cart-plus  add-to-cart-icon2"> </i><Badge className="color3 align-top">4</Badge></Button>   
           
        </React.Fragment>
    );

}

export default AddedCarts;