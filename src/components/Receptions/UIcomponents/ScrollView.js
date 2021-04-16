
import { Button } from 'reactstrap';
import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../../../css/home.css';
import './styles.css'
import ReactInfiniteScroll from './ReactInfiniteScroll';


const ScrollView = (props) => {
    return (
        <div>


                    <div id="scrollableDiv" className="card example-1 square scrollbar-cyan bordered-cyan">
                        <div  className="card-body">

                            <ReactInfiniteScroll scrollableDiv={"scrollableDiv"}   products={props.products}/>
                         </div>
                    </div>


        </div>
    );

}
export default ScrollView;