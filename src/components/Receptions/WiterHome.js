import React, { useState } from 'react';

import ToggleButton from './UIcomponents/ToggleButton';

const WiterHome = (props) => {


    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-2">
                    <ToggleButton />        
                    <ToggleButton />   
                </div>
              
    

            </div>
        </div>
    );
}

export default WiterHome;