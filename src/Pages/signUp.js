import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { isUserLoggedIn } from '../backend/auth';
import { createUserDatabase, findUser } from '../backend/database';


function SignUp() {

  const [loginState, setLoginState] = useState(isUserLoggedIn());

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      signUp();
    }
  }

  const signUp = async () => {

    const userDetails = {
      name: name,
      email: email,
      password: password,
      cart: [],
      orders: [],
      wishList: [],
      address: {}
    }

    createUserDatabase(userDetails).then((user) => {
      if (user) {
        localStorage.setItem('uid', user.id)
        setLoginState(true);
        window.dispatchEvent(new Event('storage'));
        window.location.replace('/');
      }
    });

  };

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  }

  const validatePassword = () => {
    if (password.length >= 6) return true;
    return false;
  }

  if (loginState) {
    return <Link to='../' />
  }

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <p className="md:text-5xl text-3xl font-semibold lg:pt-28 lg:px-10 pt-20 px-6">Sign Up</p>
      <div className="pt-4 lg:pt-12 px-6">
        <form onSubmit={handleSignup} action="#" method="POST">
          <div className="overflow-hidden shadow-sm border sm:rounded">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 px-2 block w-full h-10 border sm:text-sm border-gray-300 rounded"
                  />
                </div>

                <div className="col-span-12">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 px-2 block w-full h-10 border sm:text-sm border-gray-300 rounded"
                  />
                </div>

                <div className="col-span-12">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    className="mt-1 px-2 block w-full h-10 border sm:text-sm border-gray-300 rounded"
                  />
                </div>

                <div className="col-span-12 ">
                  <Link to="../login" className="text-base text-gray-800 font-medium">
                    Already have an account?
                  </Link>
                </div>

              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                onClick={validateEmail() && validatePassword()}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>


  )
}

export default SignUp
