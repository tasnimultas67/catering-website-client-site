import React from 'react';
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <div>
            {/* <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-1xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Western Catering
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Western Food Catering is a full-service catering based company in Dhaka for all your catering needs.
          </p>
        </div>
      </div>
    </div> */}


    <div className=" bg-white">
          <p className="mt-2 text-1xl  font-extrabold text-gray-900 text-3xl">
            Western Catering
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Western Food Catering is a full-service catering based company in Dhaka for all your catering needs.
          </p>
          <div className="mt-4 max-w-2xl text-xl felx mb-4  lg:mx-auto font-semibold">
              <span><Link to='/home' className='m-4'>Home</Link></span>
              <span><Link to='/services'className='m-4'>Services</Link></span>
              <span><Link to='/aboutus'className='m-4'>About us</Link></span>
              <span><Link to='/Contact'className='m-4'>Contact</Link></span>
          </div>
          <div>
              <p className='font-semibold mt-2 mb-2'>Copyright © 2021 Western Catering</p>
          </div>
    </div>
    </div>

    );
};

export default Footer;