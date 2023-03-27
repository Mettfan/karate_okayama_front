import React from 'react';


import './Carousel.css'
function Carousel(props) {
    let {image, text, options} = props
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return ( <>
    <div className='carouselContainer'>


        
    </div>
    </> );
}

export default Carousel;