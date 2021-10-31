import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import useAuth from '../../../Hooks/useAuth';


const Services = () => {
    const [services, setServices] = useState([]);
    const {isLoading } = useAuth();

    useEffect(() => {
        fetch('https://frightening-cheateau-28703.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
            });
    }, [])

    return (
        <div className=''>
            <div className='lg:bg-indigo-700  md:h-20 lg:h-24 w-full mt-3 overflow-hidden '>
            <h1 className='text-3xl text-left ml-5 font-semibold lg:text-white text-black lg:mt-5 w-full'>Our <span className='font-bold text-indigo-700 lg:text-white md:text-white'>Menu</span></h1>
            </div>
                { isLoading &&<div>
                    <button type="button" className="bg-rose-600 ..." active>
                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        </svg>
                        Processing
                    </button>
            </div>}

            <div className="m-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 container m-auto ">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

        </div>
        
    );


};

export default Services;