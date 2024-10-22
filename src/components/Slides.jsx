import React from 'react';
import ImageSlider from './ImageSlider'; // Adjust the import path
import { store1, store2, store3 } from '../assets/images';

const Slides = () => {
    const images = [
        store1,
        store2,
        store3
    ];

    return (
        <div>
            {/* <h1 className="text-center text-2xl font-bold my-5">Richion Store Image Slider</h1> */}
            <ImageSlider images={images} />
        </div>
    );
};

export default Slides;
