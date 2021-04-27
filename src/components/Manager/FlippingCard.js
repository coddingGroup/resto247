import React, {Component} from "react";
import '../../css/Manager.css';
import {Form, FormGroup, Input, Label} from "reactstrap";
import {baseUrl} from "../../shared/baseUrl";
import {useState} from 'react';
import {quantity} from "../../redux/Forms";
import IncreaseProduct from "./Products/IncreaseProduct";
import RenderCard3 from "../homepagecomponents/RenderCard3";
import {firebaseStorage} from "../../firebase/firebase";
import {setImage} from "../../functions/setImage";

const FlippingCard = ({increaseStock,oneProduct, showPriceField = true,
                          opName,handleSaving,
                          behaviors, changeFlippingCardSaveBehavior}) => {

    return (
        <div className="page-container">

            <BlogCard oneProduct={oneProduct}
                      behaviors={behaviors}
                      opName={opName}
                      handleSaving={handleSaving}
                      changeFlippingCardSaveBehavior={changeFlippingCardSaveBehavior}
                      increaseStock={increaseStock} />
        </div>
    )
}

const BlogCard = (props) => {

    const [flipped, setFlipped] = useState(false);

    let flip = () => {
        setFlipped(!flipped);

    }

    return (


        <div onMouseEnter={flip} onMouseLeave={flip} className={"card-container" + (flipped ? " flipped" : "")}>

            <Front oneProduct={props.oneProduct}/>

            <Back oneProduct={props.oneProduct}
                  behaviors={props.behaviors}
                  opName={props.opName}
                  handleSaving={props.handleSaving}
                  changeFlippingCardSaveBehavior={props.changeFlippingCardSaveBehavior}
                  increaseStock={props.increaseStock} />
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

const Back = (props) => {
    const [qtyN, setQtyN] = useState('');
    const[unitPrice,setUnitPrice] = useState(0);
    const[behavior, setBehavior] = useState('enable');
    const[errorM, setErrorM] = useState(null);
    const[comesFrom,setComesFrom] = useState('suppler');
    const[goesTo, setGoesTo] = useState('kitchen');
    const[disabled, setDisabled] = useState(true);
    const[soldPrice, setSoldPrice] = useState(0);



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
        else if(name==='goesTo'){
            setGoesTo(value);
        }
        else if(name === 'comesFrom'){
            setComesFrom(value);
        }
        else if(name==='soldPrice'){
            setSoldPrice(value);
        }
    }
    const handleSave = (event) =>{
        event.preventDefault();
        setBehavior('loading');
        setTimeout(() =>{
            setBehavior('enable');
        }, 2000);
        if(props.opName ==='dailyUsage'){
            props.handleSaving({
                id: props.oneProduct.id,
                unitPrice: unitPrice,
                quantity: qtyN,
                to: goesTo,
                name:props.oneProduct.name
            });
        }
        else if(props.opName==='resources') {
            props.handleSaving({
                id: props.oneProduct.id,
                unitPrice: unitPrice,
                quantity: qtyN,
                from: comesFrom,
                name: props.oneProduct.name
            });
            // props.increaseStock(props.oneProduct.id, unitPrice,qtyN,"suppler", props.oneProduct.name );
        }
        else if(props.opName==='products'){
            props.handleSaving({
                id: props.oneProduct.id,
                buyUnitPrice: unitPrice,
                category: props.oneProduct.category,
                description: props.oneProduct.description,
                featured: true,
                image: props.oneProduct.image,
                marched: props.oneProduct.marched,
                name: props.oneProduct.name,
                price: soldPrice,
                quantity: qtyN
            });
        }
    }
    let additionalField= null;
    let otherField;
    if(props.opName === 'products'){
        // setQtyN(props.oneProduct.quantity);
        // setSoldPrice(props.oneProduct.price);
        // setUnitPrice(props.oneProduct.buyUnitPrice);

        additionalField =<FormGroup className="">

            <Label className=""> Sold Price </Label>
            <Input onChange={handleChange} value={soldPrice} name="soldPrice" className="" type={"number"}/>
        </FormGroup>
       otherField = <React.Fragment>
           <FormGroup className="">

               <Label className=""> unit price </Label>
               <Input disabled = {(disabled)? "disabled" : ""} onChange={handleChange} value={unitPrice} name="unitPrice" className="" type={"number"}/>
           </FormGroup>
           <FormGroup>
               <Label className="">quantity</Label>
               <Input disabled = {(disabled)? "disabled" : ""}  onChange={handleChange} value={qtyN} name="qtyN" className="" type="number"/>
           </FormGroup>
       </React.Fragment>
    }
    else{
        otherField = <React.Fragment>

            <FormGroup className="">

                <Label className=""> unit price </Label>
                <Input onChange={handleChange} value={unitPrice} name="unitPrice" className="" type={"number"}/>
            </FormGroup>
            <FormGroup>
                <Label className="">quantity</Label>
                <Input onChange={handleChange} value={qtyN} name="qtyN" className="" type="number"/>
            </FormGroup>
        </React.Fragment>

        if(props.opName === 'dailyUsage'){
            additionalField =<FormGroup className="">

                <Label className=""> goes To </Label>
                <Input onChange={handleChange} value={goesTo} name="goesTo" className="" type={"text"}/>
            </FormGroup> ;
        }
        else if(props.opName==='resources'){
            additionalField =<FormGroup className="">

                <Label className=""> comes From </Label>
                <Input onChange={handleChange} value={comesFrom} name="comesFrom" className="" type={"text"}/>
            </FormGroup> ;
        }
    }

    let button = null;

    if(behavior === 'loading'){
        button = <button type="button" className="btn btn-warning"> <span className="fa fa-spinner"></span> </button>
    }
    else if(behavior === 'enable'){
        button = <button type="button" onClick={handleSave} className="btn btn-warning"> Save</button>;
    }

    // if(props.behaviors.flippingCardSaveButton === 'failed'){
    //     setErrorM('error occur while saving');
    //     props.changeFlippingCardSaveBehavior('enable');
    // }




    return (
        <div className="back">
            <h2 className="bg-warning d-flex justify-content-center pb-2"> {props.oneProduct.name} </h2>
            <span className="text-danger"> {errorM}</span>
            <Form>



                {otherField}
                {additionalField}
                <FormGroup>
                    {button}
                </FormGroup>
            </Form>
        </div>
    )
}


let ImageArea = ({oneProduct}) => {
    setImage(oneProduct.image);

        return (
            <div className="image-container">
                <img className={"card-image " + oneProduct.image } src=''></img>
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