import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';




const Register = () => {
    const { handleUserRegister } = useAuth();

    const location = useLocation();
    console.log("came from", location);
    const redirect_uri = location.state?.from || "/home";
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
    const handlePass = (e) => {
      setPass(e.target.value);
    };
    console.log(email, pass);
  
    const handleRegister = (e) => {
      e.preventDefault();
      handleUserRegister(email, pass).then((result) => {
        history.push(redirect_uri);
      });
    };

    return (
        <div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
              <span className="mx-auto h-12 w-auto font-bold text-4xl">Western Catering</span>
        
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please Register</h2>

          </div>
          <form onSubmit={handleRegister} className="mt-8 space-y-6" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                onChange={handleEmail}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                onChange={handlePass}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="*" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Register
              </button>
            </div>
          </form>
          <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up with Google</button>
            <span className=''><Link className='mt-6' to='/register'>Already have Account? Click Here</Link></span>
        </div>
      </div>
        </div>
    );
};

export default Register;