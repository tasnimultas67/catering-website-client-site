import React, { useEffect, useState,useRef,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import useAuth from '../../../Hooks/useAuth';

const MAX_LENGTH = 140;


const ManageServices = () => {
    const [services, setServices] = useState([])
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const { isLoading } = useAuth();


    useEffect(()=>{
        fetch('https://frightening-cheateau-28703.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data.services))
    },[setServices]);
    const handleDelete = id =>{
        const url = `https://frightening-cheateau-28703.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining);
            setOpen(true)
        }

        })
    }

    return (
        <div className=''>
            <div className=' lg:bg-indigo-700  md:h-20 lg:h-24 w-full mt-3 overflow-hidden '>
            <h1 className='text-3xl text-left ml-5 font-semibold lg:text-white text-black lg:mt-5 w-full'>Manage <span className='font-bold text-indigo-700 lg:text-white md:text-white'>Services</span></h1>
            </div>
            { isLoading &&<div>
                    <button type="button" class="bg-rose-600 ...">
                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        </svg>
                        Processing
                    </button>
            </div>}
            <div  className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 container m-auto">
            {
                services.map(service => <div key={service._id}>
                            <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden   ">
                            <img className="w-full h-full group-hover:opacity-75 object-center object-cover lg:w-full lg:h-60  md:h-50" src={service.img} alt="" />
                            <div className="mt-4 mx-3">
                                <div>
                                <div className="text-sm text-gray-700 flex justify-between">
                                    <h3 className='font-semibold'>
                                    <span aria-hidden="true" className="absolute inset-0 font-semibold" />
                                    Best For <br />{service.bestFor}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900">Tk {service.price}</p>
                                </div>
                                <div className='text-left mb-2 text-gray-700 font-medium  '>
                        {service.items.length > MAX_LENGTH ?
                      (
                        <div>
                          {`${service.items.substring(0, MAX_LENGTH)}...`}
                          <Link className='text-blue-700' to={`/servicedetails/${service._id}`}><button>Read more</button></Link>
                        </div>
                      ) :
                      <p className='' > {service.items}</p>
                    }
                  </div>
                  </div>
                </div>
                <div>
                <Link to={`/servicedetails/${service._id}`}>
                  <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>View this Menu</button>
                </Link>
              </div>
                      <button  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-not-allowed'>Edit this Menu</button>

                      <button onClick={()=> handleDelete(service._id)} className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-indigo-800 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Remove this Menu</button>


                            
                </div>
              </div>
            </div>)
            }
            </div>

            {/*  Remove Modal */}
            {
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Successfully Removed
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        Hoorayyyy! Service Information Successfully Removed!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Ok
                  </button>
                  
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      }
        </div>
    );
};

export default ManageServices;