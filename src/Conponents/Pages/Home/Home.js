import React  from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {StarIcon ,FireIcon, CalendarIcon, HeartIcon,ThumbUpIcon, GiftIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom';


// about-us info
const features = [
    {
      name: 'What We Cook',
      description:
        'Indian Food, Chineese Food, Deshi Food, Continental Food and Snacks for your contentment tastes and requirements.',
      icon: FireIcon,
    },
    {
      name: 'What We Provide',
      description:
        'Halal Food, Healthy Enviornment, Clean Crockeries and Cutleries, Good Fabric Table Cloths and Napkin/Table Tops.',
      icon: HeartIcon,
    },
    {
      name: 'Premium Venues',
      description:
        'Total 10 Prominent Conventions and Luxarious Restaurants located in Dhaka, Bangladesh.',
      icon: ThumbUpIcon,
    },
    {
      name: 'Events We Cover',
      description:
        'Wedding, AGM, Picnic, Seminar, Birthday, Annerversary, Funerals, Parties, Iftars and any kind of events you need to be served foods for.',
      icon: CalendarIcon,
    },
    {
      name: '5 Stars Benchmark',
      description:
        'For your convenient, we always ensure all of our services and food statisfy you greatly and the quality are upped for 5 Stars Benchmark.',
      icon: StarIcon,
    },
    {
      name: 'Home Delivery',
      description:
        'We utilize our own Delivery Vans to deliver in time despite of traffic and seasons when you need foods at your door, as much as you plan it for.',
      icon: GiftIcon,
    },
  ]




const Home = () => {

    return (
        <section className=''>
            {/* Hero Section */}
            <div>
                            <div className="relative bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <Popover>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">

                            </div>

                            <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                            <Popover.Panel
                                focus
                                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                            </Popover.Panel>
                            </Transition>
                        </Popover>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">BEST CATERING</span>{' '}
                                <span className="block text-indigo-600 xl:inline">SERVICE PROVIDER</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Western Food Catering is a full-service catering based company in Dhaka for all your catering needs. Western Food Catering is devoted to delivering healthy, super delicious food and delivery with trusty and timely service to spice up your event
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                <Link
                                    to="/"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Get started
                                </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link
                                    to="/"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                >
                                    Live demo
                                </Link>
                                </div>
                            </div>
                            </div>
                        </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
                        alt=""
                        />
                    </div>
                    </div>
            </div>

            {/* About us */}
            <div>
                        <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to know us!
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Since 1987 we're providing Food Catering Services in Bangladesh.
                    </p>
                    </div>

                    <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                        <div key={feature.name} className="relative border-1 p-3 shadow-lg	" >
                            <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
                </div>
            </div>

            {/* offer */}
            <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">We use only the finest and</span>
          <span className="block text-indigo-600">freshest ingredients.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>






        </section>


    );
};

export default Home;