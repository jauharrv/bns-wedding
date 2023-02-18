import React from 'react';
import Slider from 'react-slick';

const Carousel = ({
  children,
  slidesToShow = 1.4,
  slidesToScroll = 1,
  autoplay = false,
  ...props
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    nextArrow: null,
    prevArrow: null,
    lazyLoad: true,
    autoplay,
  };

  return (
    <div className="relative overflow-hidden md:overflow-visible h-full">
      <Slider {...{ ...settings, ...props }}>{children}</Slider>
    </div>
  );
};

export default Carousel;
