import React from 'react';
import { Button } from 'reactstrap';
import '../../../css/home.css';

const FilterMenu = () => {
    return (
        <div className="d-flex justify-content-around m-2 bg-light">
            <Button className="color3" ><a href="#" class="bg-"><i class="fa fa-flag-checkered text-white" aria-hidden="true"> Frequently Used</i> </a> </Button>
            <Button className="color3" ><a href="#" class=""> <i class="fa fa-cutlery text-white" aria-hidden="true"> Food</i> </a></Button>
            <Button className="color3" ><a href="#" class=""> <i class="fa fa-beer text-white" aria-hidden="true"> Drinks</i> </a></Button>
        </div>
    );
}

export default FilterMenu;