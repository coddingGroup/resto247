
import '../Some.css'
import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button, Row
} from 'reactstrap';
import { ITEMS } from '../../shared/hotDealData';
import {outOfStockProduct} from '../../shared/outOfStockProduct';
import OutOfStockCard from "./OutOfStockCard";
import React from 'react';



let OutOfStockCarousel = (props) => {
    const [stockOut, setStockOut] = useState(outOfStockProduct);



    let count = 1, numberOfItem = 3;
    const outOfStockAll = stockOut.reduce((carouselData,data)=>{
            if(count < numberOfItem ){
                let lastIndex = carouselData.length -1;
                carouselData[lastIndex] = [...carouselData[lastIndex],data];
                ++count;
            }
            else{
                carouselData = [...carouselData, [data]];
                count = 1;
            }
            return carouselData;
        },[[]]

    );



    const [items, setItems] = useState(outOfStockAll);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


    const next = () => {
        if (animating) return;
        let nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        let nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    let cols = "col-md-"+ Math.floor(12/outOfStockAll.length);


    const slidesNew = outOfStockAll.map(AllItems =>{
        let items = AllItems.map(
            item =>{
                return(

                    <div className= "col-md-4">
                        <OutOfStockCard out = {item} />
                    </div>
                )
            }
        )
        var key = 1;
        return(
            <CarouselItem className="hotDealCarouselItem"
                          onExiting={() => setAnimating(true)}
                          onExited={() => setAnimating(false)}
                          key = {key}

            >
                <Row>
                    {items}

                </Row>


                <CarouselCaption className="captionOfHotDeal"
                                 captionText={
                                     <div></div>
                                 }
                />
                {key++}
            </CarouselItem>
        )
    })


    return (

        <Carousel id="hotDealCarousel" className="mt-5"
            activeIndex={activeIndex}
                  interval={9000}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={outOfStockAll} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slidesNew}

            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />

            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>



    );




    
}

export default OutOfStockCarousel;