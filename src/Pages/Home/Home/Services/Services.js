import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log(servics)


    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-500'>Service</p>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, <br />or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;