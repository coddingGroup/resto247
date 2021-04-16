import React,{useEffect, useState} from 'react';
import ManagerBar from "./ManagerSideBar";
import {Col, Container, Row} from "reactstrap";
import OutOfStock from "./HorizontalOutOfStock";
import Search from "../homepagecomponents/Search";
import SearchFilterInM from "./FiltersInManager";
import SearchOutputDisplay from "./SearchOutputDisplay";

const Management =({products, outOfStockProducts}) =>{

    const [text, setText] = useState('');
    const [searchOutput, setSearchOutput] = useState([]);

    const searchText = (txt=text) =>{
        let output = products.products.reduce(
            (result, oneProduct) =>{
                if(oneProduct.name.toLowerCase().includes(txt.toLowerCase()) || oneProduct.category.toLowerCase().includes(txt.toLowerCase())){
                    result = [...result, oneProduct];
                }
                return result;
            },[]
        );
        if(txt==''){
            setSearchOutput([]);
        }
        else{
            setSearchOutput(output);
        }

    }




    return (
        <React.Fragment>

        <Row>
            <Col md={2}>
                <Container fluid className="h-100">
                    <ManagerBar />


                </Container>

            </Col>
            <Col md={10}>
                <Container fluid>


                    <OutOfStock allProducts ={outOfStockProducts.outOfStockProducts} isLoading={outOfStockProducts.isLoading} errMess={outOfStockProducts.errMess} />




                        <Search searchText={searchText} searchbar="searchbarFix" setText={setText} text={text} />
                        <SearchOutputDisplay output={searchOutput}/>
                        <div className="w-100" >

                            <SearchFilterInM allProducts = { products.products} isLoading={products.isLoading} errMess={products.errMess}/>
                        </div>


                </Container>

            </Col>


        </Row>
        </React.Fragment>
    )
}
export default Management;