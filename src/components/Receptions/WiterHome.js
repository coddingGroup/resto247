import React from 'react';
import TabsMenu from './UIcomponents/TabsMenu'


const WiterHome = (props) => {


    return (
        <div className="container-fluid">
            <div className="row align-items-start">
                <div className="col-12 col-md m-2">
                    {/* <HotDeal hotdeals={props.hotdeals} />         */}
                    <TabsMenu cart={props.cart} addToCart={props.addToCart} removeToCart={props.removeToCart}
                              pushInvoice={props.pushInvoice}
                              waiters={props.waiters}
                              products={props.products}/>
                </div>


            </div>
        </div>
    );
}

export default WiterHome;