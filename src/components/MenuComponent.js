import React, {useEffect} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";
import {Loading} from "./LoadingComponent";
import {setImage} from "../functions/setImage";
import '../css/styles.css'

function RenderMenuItem({dish, onClick}) {
    useEffect(() => {
    setImage(dish.image);
        
      });
    return (
        <Card className="card_main">
            {/*{`/menu/${dish.id}}*/}
            <Link to="#">
                <CardImg width="100%" className={dish.image + " card_main_image"} src="" alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.products.products.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });

    if (props.products.isLoading) {
        return (
            <div className='container'>
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    } else if (props.products.errMess) {
        return (
            <div className='container'>
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    } else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>

            </div>
        );

}


export default Menu;