import React from 'react';



import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function PhotoSlider({ isMobile, images }) {
    let countSides = 2;
    if (isMobile) {
        countSides = 1;
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: countSides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
    };

    return (
        <Slider {...settings} className="photo-slider  relative z-30">
            {images.map((img, index) => {
                return <img key={index} src={img.src} className=' object-cover slide__image ' alt="BTW photo" />
            })}
        </Slider>
    );
}