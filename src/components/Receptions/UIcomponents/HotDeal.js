import '../../../css/Some.css'
import React, {useState} from 'react';
import {Button, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';
import {Loading} from "../../LoadingComponent";

var HotDeal = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    //const [items, setItems] = useState(ITEMS)
    const items = props.hotdeals.hotdeals;

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {

        return (

            <CarouselItem className="hotDealCarouselItem"
                          onExiting={() => setAnimating(true)}
                          onExited={() => setAnimating(false)}
                          key={item.src}
            >
                <div className="hotDealImageBox"><img src={item.image} alt={item.altText}/></div>


                <CarouselCaption className="captionOfHotDeal"
                                 captionText={<div>
                                     <p className="d-none d-sm-block">{item.caption}</p>
                                     <div className="buttonInHotDeal"><Button
                                         className="color3">{item.mainlink}</Button></div>
                                 </div>
                                 }
                                 captionHeader={<h2 className="headOfHotDeal">{item.name} <span
                                     class="badge badge-danger">{item.badgeMessage}</span><span
                                     class="badge badge-pill badge-secondary">{item.price} RWF</span></h2>}/>
            </CarouselItem>
        );
    });

    if (props.hotdeals.isLoading) {
        return (
            <Loading/>
        );
    } else if (props.hotdeals.errMess) {
        return (
            <h4> {items.errMess} </h4>
        );
    } else

        return (

            <Carousel id="hotDealCarousel" className="mt-5"
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
            </Carousel>


        );


}

export default HotDeal;