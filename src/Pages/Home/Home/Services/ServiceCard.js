import React from 'react';

const ServiceCard = ({ service }) => {

    const { img, price, title } = service;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl text-orange-500 font-medium'>Price ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;