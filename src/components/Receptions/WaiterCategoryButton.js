import {Button} from "reactstrap";
import React, {useState} from "react";

let WaiterCategoryButton = (props) => {
    const [category, setCategory] = useState(props.category);
    let handleClick = (event) => {
        props.changeProductToDisplay(category);
        event.preventDefault();
    }
    return (
        <Button key={props.category}
                id={props.category}
                onClick={handleClick}
                className="color3"> <i class="fa fa-beer text-white" aria-hidden="true"> {category}</i></Button>
    )
}
export default WaiterCategoryButton;