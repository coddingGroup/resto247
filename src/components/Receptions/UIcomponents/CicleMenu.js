import React, { useState } from "react";
import '../../../css/home.css';
import {NavLink} from "react-router-dom";

let items = [
    {
        name:'Add Product',
        icon:'fa fa-plus',
        color:'btn-success'
    },
    {
        name:'Edit Product',
        icon: 'fa fa-pencil',
        color: 'btn-primary'
    },
    {
        name: 'Delete Product',
        icon: 'fa fa-trash',
        color:'btn-danger'
    },
    {
        name:'Stock IncreaseProduct',
        icon: 'fa fa-tasks',
        color: 'btn-warning'
    }
];
const CircleMenu = ({items}) => {



    let length = items.length;

    let allButton = items.map(item =>{
        return(
            <div className="col ">
                <NavLink to={item.to}>
                <button type="button" className={item.color +" btn btn-circle btn-xl"}><i className={item.icon}></i>
                </button>
                <span className="row"> {item.name} </span>
                </NavLink>
            </div>
        )
    })

    return (
        <div class="panel panel-default ">
            <div class="panel-heading">

            </div>
            
                <div class="row panel-body ">

                    {allButton}
                    {/*<div class="col ">*/}
                    {/*    <button type="button" class="btn btn-success btn-circle btn-xl"><i class="fa fa-plus"></i>*/}
                    {/*    </button>*/}
                    {/*    <span class="row"> Add Product </span>*/}
                    {/*</div>*/}

                    {/*<div class="col ">*/}
                    {/*    <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa fa-pencil"></i>*/}
                    {/*    </button>*/}
                    {/*    <span class="row"> Edit Product </span>*/}
                    {/*</div>*/}
                    {/*<div class="col ">*/}
                    {/*    <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-trash"></i>*/}
                    {/*    </button>*/}
                    {/*    <span class="row"> Delete Product </span>*/}
                    {/*</div>*/}

                    {/*<div class="col ">*/}
                    {/*    <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="fa fa-tasks"></i>*/}
                    {/*    </button>*/}
                    {/*    <span class="row"> Stock Manager </span>*/}
                    {/*</div>*/}
                
{/* 
                <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa fa-list"></i>
                </button>
                <button type="button" class="btn btn-success btn-circle btn-xl"><i class="fa fa-link"></i>
                </button>
                <button type="button" class="btn btn-info btn-circle btn-xl"><i class="fa fa-check"></i>
                </button>
                <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="fa fa-times"></i>
                </button>
                <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-heart"></i>
                </button> */}
            </div>

        </div>
    );
}

export default CircleMenu;