import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

const items = [
    {
        id: 0,
        src: `https://res.cloudinary.com/chris-kubick/image/upload/v1604102337/side-effects/light-shade-ripples-pattern-swimming-pool-turquoise-clean-water-vivid-separatio-lines-separation-113595482_agwgav.jpg`,
        altText: "Cafe counter"
    },


    {
        id: 1,
        src: `https://res.cloudinary.com/chris-kubick/image/upload/v1604102337/side-effects/light-shade-ripples-pattern-swimming-pool-turquoise-clean-water-vivid-separatio-lines-separation-113595482_agwgav.jpg`,
        altText: "Cafe counter"
    },
    {
        id: 2,
        src: `https://res.cloudinary.com/chris-kubick/image/upload/v1604102337/side-effects/light-shade-ripples-pattern-swimming-pool-turquoise-clean-water-vivid-separatio-lines-separation-113595482_agwgav.jpg`,
        altText: "Cafe counter"
    },
];

const CafeCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

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

    const slides = items.map((item, index) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CafeCarousel;
