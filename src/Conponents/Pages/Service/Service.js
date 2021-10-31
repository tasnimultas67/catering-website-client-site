import React from 'react';
import {Link } from "react-router-dom";


const MAX_LENGTH = 140;


const Service =({ service })=>{

    const { _id,items, price, img, bestFor } = service;
    return(
        <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img className="w-full h-full group-hover:opacity-75 object-center object-cover lg:w-full lg:h-60  md:h-50" src={img} alt="" />
            <div className="mt-4 mx-3">
                <div>
                  <div className="text-sm text-gray-700 flex justify-between">
                    <h3 className='font-bold'>
                      <span aria-hidden="true" className="absolute inset-0 font-bold" />
                      Best For <br />{bestFor}
                    </h3>
                    <p className="text-sm font-bold text-gray-900">Tk {price}</p>
                  </div>
                  <p className='text-left text-sm font-medium text-gray-900 mt-3'>Items</p>
                  <div className='text-left mb-2 text-gray-700 font-medium  '>
                        {items.length > MAX_LENGTH ?
                      (
                        <div>
                          {`${items.substring(0, MAX_LENGTH)}...`}
                          <Link className='text-blue-700' to={`/servicedetails/${_id}`}><button>Read more</button></Link>
                        </div>
                      ) :
                      <p className='' > {items}</p>
                    }
                  </div>
                </div>
              </div>
                {/* Button */}
              <div>
                <Link to={`/servicedetails/${_id}`}>
                  <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>View this Menu</button>
                </Link>
              </div>
        </div>
        </div>
    )
}

export default Service;