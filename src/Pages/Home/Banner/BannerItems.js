import React from 'react';
import './BannerItem.css'

const BannerItems = ({ slide }) => {

    const { id, image, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} className="w-full" />
            </div>
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-24  top-1/3">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-24 w-2/5  top-2/4">
                <p className='text-xl font-normal text-white'>
                    There are many variations of passages of  available,
                    but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-error mr-5">Button</button>
                <button className="btn btn-outline btn-error">Button</button>
            </div>
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;