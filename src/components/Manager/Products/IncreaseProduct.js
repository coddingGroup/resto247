import React, {useState} from 'react';
import OutOfStock from "./HorizontalOutOfStock";
import Search from "../../homepagecomponents/Search";
import SearchFilterInM from "../SearchFilterIn";
import SearchOutputDisplay from "../SearchOutputDisplay";

const IncreaseProduct = ({
                             products, outOfStockProducts,
                             opName, behaviors, changeFlippingCardSaveBehavior, handleSaving,
                             increaseStock
                         }) => {

    const [text, setText] = useState('');
    const [searchOutput, setSearchOutput] = useState([]);

    const searchText = (txt = text) => {
        let output = products.products.reduce(
            (result, oneProduct) => {
                if (oneProduct.name.toLowerCase().includes(txt.toLowerCase()) || oneProduct.category.toLowerCase().includes(txt.toLowerCase())) {
                    result = [...result, oneProduct];
                }
                return result;
            }, []
        );
        if (txt == '') {
            setSearchOutput([]);
        } else {
            setSearchOutput(output);
        }

    }
    let outOfSt;
    if (opName !== "dailyUsagee") {
        outOfSt = <OutOfStock allProducts={outOfStockProducts.outOfStockProducts}
                              isLoading={outOfStockProducts.isLoading}
                              behaviors={behaviors}
                              opName={opName}
                              handleSaving={handleSaving}
                              changeFlippingCardSaveBehavior={changeFlippingCardSaveBehavior}
                              errMess={outOfStockProducts.errMess}/>;
    } else {
        outOfSt = <div></div>;
    }


    return (
        <React.Fragment>

            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <h2> Increase {opName} </h2>
                    </div>

                    {outOfSt}


                    <Search searchText={searchText} searchbar="searchbarFix" setText={setText} text={text}/>
                    <SearchOutputDisplay output={searchOutput}/>
                    <div className="w-100">

                        <SearchFilterInM cardToRender={"FlippingCard"} allProducts={products.products}
                                         behaviors={behaviors}
                                         opName={opName}
                                         handleSaving={handleSaving}
                                         changeFlippingCardSaveBehavior={changeFlippingCardSaveBehavior}
                                         increaseStock={increaseStock}
                                         isLoading={products.isLoading} errMess={products.errMess}/>
                    </div>
                </div>

            </div>


        </React.Fragment>
    )
}
export default IncreaseProduct;