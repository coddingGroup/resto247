import '../../css/Some.css'
import {Button, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';

import {useState} from 'react';
import {ITEMS} from '../../shared/carouselHome';


let FirstScreen = (props) => {


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

            <CarouselItem className="mainCarouselItem"
                          onExiting={() => setAnimating(true)}
                          onExited={() => setAnimating(false)}
                          key={item.src}
            >
                <img src={item.src} alt={item.altText}/>

                <CarouselCaption captionText={item.caption} captionHeader={<Button className="color3"><span
                    className="fa fa-phone fa-lg"></span> {item.mainlink}</Button>}/>
            </CarouselItem>
        );
    });

    return (

        <Carousel id="mainCarousel"
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


export default FirstScreen;