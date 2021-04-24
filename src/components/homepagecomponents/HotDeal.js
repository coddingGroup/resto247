import '../../css/Some.css'
import {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button
} from 'reactstrap';
import {ITEMS} from '../../shared/hotDealData';


var HotDeal = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [items, setItems] = useState(ITEMS)

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
                <div className="hotDealImageBox"><img src={item.src} alt={item.altText}/></div>


                <CarouselCaption className="captionOfHotDeal"
                                 captionText={<div>
                                     <p className="d-none d-sm-block">{item.caption}</p>
                                     <div className="buttonInHotDeal"><Button
                                         className="color3">{item.mainlink}</Button></div>
                                 </div>
                                 }
                                 captionHeader={<h2 className="headOfHotDeal">{item.title} <span
                                     class="badge badge-danger">{item.badgeMessage}</span><span
                                     class="badge badge-pill badge-secondary">{item.price} RWF</span></h2>}/>
            </CarouselItem>
        );
    });

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