import React, { useState } from "react";
import '../../../css/home.css';

const CircleMenu = () => {
    return (
        <div class="panel panel-default ">
            <div class="panel-heading">

            </div>
            
                <div class="row panel-body ">
                    <div class="col ">
                        <button type="button" class="btn btn-success btn-circle btn-xl"><i class="fa fa-plus"></i>
                        </button>
                        <span class="row"> Add Product </span>
                    </div>

                    <div class="col ">
                        <button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa fa-pencil"></i>
                        </button>
                        <span class="row"> Edit Product </span>
                    </div>
                    <div class="col ">
                        <button type="button" class="btn btn-danger btn-circle btn-xl"><i class="fa fa-trash"></i>
                        </button>
                        <span class="row"> Delete Product </span>
                    </div>

                    <div class="col ">
                        <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="fa fa-tasks"></i>
                        </button>
                        <span class="row"> Stock Manager </span>
                    </div>
                
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