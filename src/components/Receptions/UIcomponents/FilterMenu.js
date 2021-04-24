import React from 'react';
import {Button} from 'reactstrap';
import '../../../css/home.css';
import WaiterCategoryButton from "../WaiterCategoryButton";

const FilterMenu = (props) => {

    let allCat = props.categories.map(
        (category) => {
            return (
                <WaiterCategoryButton changeProductToDisplay={props.changeProductToDisplay} category={category}/>
            )
        }
    )
    return (
        <div className="d-flex justify-content-around m-2 bg-light">
            {allCat}
        </div>
    );
}

export default FilterMenu;