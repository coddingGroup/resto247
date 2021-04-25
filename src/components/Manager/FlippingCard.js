import React, {Component} from "react";
import '../../css/Manager.css';
import {Form, FormGroup, Input, Label} from "reactstrap";
import {baseUrl} from "../../shared/baseUrl";
import {useState} from 'react';
import {quantity} from "../../redux/Forms";

const FlippingCard = ({increaseStock,oneProduct, showPriceField = true}) => {

    return (
        <div className="page-container">

            <BlogCard oneProduct={oneProduct} increaseStock={increaseStock} />
        </div>
    )
}

const BlogCard = ({oneProduct, increaseStock}) => {

    const [flipped, setFlipped] = useState(false);

    let flip = () => {
        setFlipped(!flipped);

    }

    return (


        <div onMouseEnter={flip} onMouseLeave={flip} className={"card-container" + (flipped ? " flipped" : "")}>

            <Front oneProduct={oneProduct}/>
            <Back oneProduct={oneProduct} increaseStock={increaseStock} />
        </div>

    )
}


const Front = ({oneProduct}) => {

    return (
        <div className="front">
            <ImageArea oneProduct={oneProduct}/>
            <MainArea oneProduct={oneProduct}/>
        </div>
    )
}

const Back = ({oneProduct, increaseStock}) => {
    const [qtyN, setQtyN] = useState('');
    const[unitPrice,setUnitPrice] = useState(0);
    const handleChange = (event) =>{
        event.preventDefault();
        let name = event.target.name;
        let value=event.target.value;
        if(name ==='qtyN'){
            setQtyN(value);
        }
        else if(name==='unitPrice'){
            setUnitPrice(value);
        }
    }
    const handleSave = (event) =>{
        increaseStock(oneProduct.id, unitPrice,qtyN,"suppler", oneProduct.name );
    }

    return (
        <div className="back">
            <h2 className="bg-warning d-flex justify-content-center pb-2"> {oneProduct.name} </h2>
            <Form>

                <div className="form-group">

                    <Label className=""> unit price </Label>
                    <Input onChange={handleChange} value={unitPrice} name="unitPrice" className="" type={"number"}/>
                </div>
                <FormGroup>
                    <Label className="">Added quantity</Label>
                    <Input onChange={handleChange} value={qtyN} name="qtyN" className="" type="number"/>
                </FormGroup>
                <FormGroup>
                    <button type="button" onClick={handleSave} className="btn btn-warning"> Save</button>
                </FormGroup>
            </Form>
        </div>
    )
}


var ImageArea = ({oneProduct}) => {

    return (
        <div className="image-container">
            <img className="card-image" src={oneProduct.image}></img>
            <h1 className="title">{oneProduct.name}</h1>
        </div>
    )
}


var MainArea = ({oneProduct}) => {
    return (
        <div className="main-area">
            <div className="blog-post">
                <div className=" row date">
                    <div className={"col-6"}>
                        <Label className=""> Price </Label>
                    </div>
                    <div className="col-5 offset-1">
                        <span className="badge badge-warning rounded"> {oneProduct.price}</span>
                    </div>

                </div>
                <div className=" row date ">
                    <div className={"col-6"}>
                        <Label className=""> Quantity Left </Label>
                    </div>
                    <div className="col-5 offset-1">
                        <span className="badge badge-warning rounded"> 20 </span>
                    </div>

                </div>
                <p className="read-more">Hover to Edit...</p>

            </div>

        </div>
    )
}

export default FlippingCard;