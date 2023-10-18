import React from "react";
import ImageSliders from './imageSliders';
import img1 from '../../assets/images/image-1.jpg';
import img2 from '../../assets/images/image-2.jpg';
import img3 from '../../assets/images/image-3.jpg';
import img4 from '../../assets/images/image-4.jpg';
import img5 from '../../assets/images/image-5.jpg';

const Carousel = () => {
    const slides = [
        {url:{img1}, title:'Beach'},
        {url:{img2}, title:'Boat'},
        {url:{img3}, title:'Forest'},
        {url:{img4}, title:'City'},
        {url:{img5}, title:'Italy'},
    ]
    return (
        <div>
            <p>test</p>
            <ImageSliders slides={slides} />
        </div>
    )
}

export default Carousel;