import React, { useState } from 'react';
import Navigation from './UIcomponents/SideNavigation'
import Dashboard from './Dashboard'



const MainManager = (props) => {

   function displaySection()  {
        if (props.section ==="dashboard") {
            return(
                <Dashboard />
                );
        }
        else if (props.section ==="products"){
            return(
                <h1>ggggggggggggg</h1>
            );
        }
       
    }
    
        return (
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col-md-2  m-2">
                        <Navigation />
                    </div>
                    <div className="col-md ">
                            {displaySection()}
                    </div>
    
                </div>
            </div>
        );
    
   

   
}

export default MainManager;