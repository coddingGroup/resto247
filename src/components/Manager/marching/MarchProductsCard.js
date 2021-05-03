import {Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap";
import React, {useState} from "react";
import '../../../css/march.css';

let MarchProductsCard = (props) => {

    let [index,setIndex] =useState(0) ;
    let [numberOfDelete, setNumberOfDelete] = useState(0);

    const [marchProduct, setMarchProduct] = useState({});
    let options = '';
    if(props.products.products !== undefined){
         options =  props.products.products.map(product =>{
            return (
                <option key={product.id} value={JSON.stringify({...product})}>{product.name} </option>
            )
        });

    }


    let changeChosenProduct = (event) =>{
         let product = JSON.parse(event.target.value);
            let prevChosen = props.chosenProducts;
            let objKey = event.target.name;
            let isNotChosen = true;
            for(let i in prevChosen){
                if( prevChosen[i].id === product.id ){
                    isNotChosen = false;
                    alert("product already chosen, please choose again ");
                    break;
                }
            }
            if(isNotChosen){
                prevChosen[objKey] = product;
                console.log(JSON.stringify(prevChosen));
                props.setChosenProducts({...prevChosen});
            }




    }






    let OneMarchProduct = ({indexOfProduct, deleteProductItem}) =>{
        let [productQuantity, setProductQuantity] = useState(0);

        let handleQuantityChange = (event) =>{
            //let name = event.target.name;
            //let index = name.slice(8);
            let prev = props.chosenProducts;
            if (prev[indexOfProduct] === undefined || prev[indexOfProduct] ===null){
                alert("choose productFirst");
            }
            else{
                setProductQuantity(event.target.value);
                prev[indexOfProduct].matchProductQuantity = event.target.value;
            }

        }
        let handleDeleteClick = (event) =>{
            //deleteItem(indexOfProduct);


            //alert(indexOfProduct);
            let prev2 = marchProduct;
             //prev2.slice(indexOfProduct-numberOfDelete,1);
             delete prev2[indexOfProduct] ;
             //alert(JSON.stringify(prev2));

            setMarchProduct({...prev2});

            setNumberOfDelete(numberOfDelete + 1);
            deleteProductItem(indexOfProduct);

        }


        return(
            <React.Fragment key={index + "anotherKey"}>
            <Col>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                    </div>
                    <select name={index} className="custom-select" onChange={changeChosenProduct}>
                        <option value="null" selected>Choose...</option>
                        {options}
                    </select>
                </div>
            </Col>
        <Col>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Qtn</span>
                </div>
                <input value={productQuantity} type="number" name={"quantity"+index} onChange={handleQuantityChange} className="form-control"
                       aria-label="Amount (to the nearest dollar)"/>
            </div>
        </Col>
                <Col sm={2}>
                    <span className="fa fa-lg fa-trash text-danger" onClick={handleDeleteClick}>

                    </span>
                </Col>
            </React.Fragment>
        )
    }
    let addOtherProduct = () => {
        let it =
                    (<Form key={index +'addOtherProduct'}>

                        <Row className="form-group" >
                            <OneMarchProduct indexOfProduct={index} deleteProductItem={props.deleteProductItem} />

                        </Row>

                    </Form>)

        ;
        let prevA = marchProduct;
        prevA[index] = it;
        setIndex(index+1);
        setMarchProduct(prevA);
    }

    let marchProductDisplay = [];
    for (let k in marchProduct){
        marchProductDisplay.push(marchProduct[k]);
    }



    return (
        <div className="march shadow-lg">
            <div className="marchBody">
                <Card>
                    <CardHeader className="bg-primary text-white">Marched Products</CardHeader>
                    <CardBody>
                        <div className="row p-1">
                            <Button onClick={addOtherProduct} className="btn-warning"> <span className="fa fa-plus"> Other Product</span>
                            </Button>
                        </div>
                        <div className="row p-1">
                            <div className="col-6">
                                <h4>Names</h4>

                            </div>
                            <div className="col-6">
                                <h4>Quantity</h4>
                            </div>
                        </div>
                        <div className="row p-1">
                                {marchProductDisplay}
                        </div>

                    </CardBody>
                </Card>



            </div>
        </div>
    )
}
export default MarchProductsCard;