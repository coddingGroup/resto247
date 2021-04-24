import React from 'react';
import '../../../css/home.css';
import '../../../css/styles.css'
import ReactInfiniteScroll from './ReactInfiniteScroll';

const ScrollView = (props) => {

    return (
        <div>

            <div id="scrollableDiv" className="card fixedDiv square scrollbar-cyan bordered-cyan">
                <div className="card-body">

                    <ReactInfiniteScroll scrollableDiv={"scrollableDiv"}
                                         funMenu={props.funMenu}
                                         items2={props.items2} setItems2={props.setItems2}
                                         hasMoreS={props.hasMoreS} setHasMoreS={props.setHasMoreS}
                                         itemToFetch={props.itemToFetch} setItemToFetch={props.setItemToFetch}
                                         itemToStartOn={props.itemToStartOn} setItemToStartOn={props.setItemToStartOn}
                                         cart={props.cart}
                                         addToCart={props.addToCart}
                                         removeToCart={props.removeToCart}
                                         products={props.products}/>
                </div>
            </div>


        </div>
    );

}
export default ScrollView;