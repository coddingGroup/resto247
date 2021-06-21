import React, {useState} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    Input,
    Label,
    Row
} from "reactstrap";
import '../../../css/march.css';
import MarchProductsCard from "./MarchProductsCard";
import MarchResourceCard from "./MarchResourceCard";
import OneItemMatch from './OneItemMatch';

const MarchProductToResources = (props) => {

    let [chosenProducts,setChosenProducts] = useState({});
    const [chosenResource, setChosenResource] = useState({});


    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    let handleSaving = (event) =>{
        if(isEmpty(chosenProducts) || isEmpty(chosenResource)){
            alert("choose both product and resource please");
            event.preventDefault();
            return;
        }
        props.saveMarchedResource(chosenResource, chosenProducts);

    }

    let deleteProductItem = (index) =>{
        if(chosenProducts[index] === undefined || chosenProducts[index] === null){
            return;
        }
        let prev = {...chosenProducts};
        delete prev[index];
        setChosenProducts({...prev});
    }

    let prevMarched = null;
    let marchResourceToProducts = props.marchResourceToProducts.marchResourceToProducts;
    if(marchResourceToProducts !==undefined && marchResourceToProducts !==null)
    {
        prevMarched = (marchResourceToProducts).map(doc =>{
            return(
                <OneItemMatch doc={doc} />
            )
        });
    }







    return (
        <React.Fragment>

            <div className="row">

                <div className="col-md-12">


                    <div>
                        <div>
                            <Row className="">
                                <Col md={5}>



                                    <MarchResourceCard resources={props.resources} chosenResource={chosenResource} setChosenResource={setChosenResource} />


                                </Col>
                                <Col md={2} className="d-flex align-items-center justify-content-center">
                                    <div>
                                        <Button type="button" onClick={handleSaving}  className="bottom-shadow bg-light add-to-cart-btn"><i
                                            className="fa fa-lg fa-save">Save</i>
                                        </Button>
                                    </div>

                                </Col>
                                <Col md={5}>


                                    <MarchProductsCard deleteProductItem={deleteProductItem} products={props.products} chosenProducts={chosenProducts} setChosenProducts={setChosenProducts} />


                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <h2 className="mt-3 color2F d-flex justify-content-center mb-3"> <u> Previous marched </u> </h2>
                        {prevMarched}
                    </div>


                </div>

            </div>


        </React.Fragment>
    )
}
export default MarchProductToResources;