import React, { useState } from 'react';
import DairyUsage from './DairyUsage';
import DairyVisits from './DairyVisits';
import ItemsSold from '../UIcomponents/ItemsSold';
import DairyEarning from './DairyEarning';
import ReactDatePicker from '../UIcomponents/ReactDatePicker';

const Dashboard = (props) => {


    return (
        <div className="container-fluid">
             <div className="row">
                 <div className="col-12 col-md-2 mt-4">
                    <h3>Choose Date</h3> 
                 </div>
                <div className="col-12 col-md-8 ">
                    <ReactDatePicker />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3">
                    <DairyVisits />
                </div>
                <div className="col-12 col-md-3">
                    <ItemsSold />
                </div>
                <div className="col-12 col-md-3">
                <DairyEarning />
                </div>
                <div className="col-12 col-md-3">
                <ItemsSold />
                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                   
                </div>
                <div className="col-12 col-md-6">
                    <DairyUsage />
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <DairyUsage />
                </div>
                <div className="col-12 col-md-6">

                </div>

            </div>

        </div>


    );
}

export default Dashboard;