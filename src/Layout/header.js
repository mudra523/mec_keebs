import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/solid'
import logo from './../assets/logo.png'
import './../backend/auth.js'
import { Link } from "react-router-dom";
import { isUserLoggedIn, signout } from './../backend/auth.js'
import { connectFirestoreEmulator } from '@firebase/firestore'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const products = [
  {
    id: 1,
    name: 'DUCKY one 2 mini',
    href: '#',
    color: 'White',
    price: '₹ 9500',
    quantity: 'Keyboard',
    image: 'https://www.meckeys.com/wp-content/uploads/2019/06/One-2-Mini-White-1.png',
  },
  {
    id: 2,
    name: 'Monochrome',
    href: '#',
    color: 'White and Black',
    price: '₹ 10000',
    quantity: 'Keycaps',
    image: 'https://stackskb.com/wp-content/uploads/2021/06/Segreosta-Monochrome-12.webp',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginState, setLoginState] = useState(isUserLoggedIn());

  window.addEventListener('storage', (e) => {
    const uid = localStorage.getItem('uid');
    if (uid) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  })

  const signOut = (e) => {
    signout()
    setLoginState(false)
  }

  return (
    <nav className="fixed w-full top-0 bg-trueGray-900 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => { setNavbarOpen(!navbarOpen) }} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <svg className={"h-6 w-6" + (navbarOpen ? " hidden" : " block")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={"h-6 w-6" + (navbarOpen ? " block" : " hidden")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block h-6 w-auto" src={logo} alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-auto">
              <div className="flex">
                <Link to="/" className="text-orange-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                <Link to="products" className="text-orange-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>

                <Link to="about-us" className="text-orange-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>

                <Link to="contact-us" className="text-orange-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-auto sm:pr-0">
            <Menu as="div" className="relative px-2">
              <Menu.Button className="group inline-flex justify-center">
                <ShoppingBagIcon
                  className="flex-shrink-0 h-6 w-6 text-orange-200 group-hover:text-gray-100"
                  aria-hidden="true"
                />
              </Menu.Button>


              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-6 pb-4 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div>
                    {products.map((product) => (
                      <div className="px-4 pt-4" >
                        <li key={product.id} className="p-2 flex rounded-md border-2 border-gray-300">
                          <div className="flex-shrink-0 w-20 h-20  rounded-md overflow-hidden">
                            <img
                              src={product.image}
                              className="w-full h-full object-center object-cover"
                            />
                          </div>

                          <div className="ml-4 w-60 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  {product.name}
                                </h3>
                                <p className="ml-4">{product.price}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              <p className="mt-1 text-base font-normal text-gray-500">{product.quantity}</p>
                            </div>
                            {/* <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex">
                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                  Remove
                                </button>
                              </div>
                            </div> */}
                          </div>
                        </li>
                      </div>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <div className="ml-3 relative">
              <div>

                {loginState ?
                  <button type="button" className="flex" id="user-menu-button">
                    <div onClick={() => { signOut() }} className="text-sm font-medium px-2 py-1 text-orange-100 border rounded border-orange-100 hover:text-gray-900 hover:bg-orange-100 hover:font-semibold">
                      Log Out
                    </div>
                  </button>
                  :
                  <button type="button" className="flex" id="user-menu-button">
                    <div className="text-sm font-medium px-2 py-1 text-orange-100 border rounded border-orange-100 hover:text-gray-900 hover:bg-orange-100 hover:font-semibold">
                      <Link to="login">Log In</Link>
                    </div>
                  </button>}
                {/* <Link to="login">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </Link> */}

              </div>

            </div>
          </div>
        </div>
      </div>


      {navbarOpen &&
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>

            <Link to="products" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</Link>

            <Link to="about-us" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>

            <Link to="contact-us" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>

          </div>
        </div>}
    </nav>
  );

}

export default Header



// return (
  //   <nav className="w-full bg-blue-800 text-white flex justify-between">
  //     <div><Link to="/">Home</Link></div>
  //     <div>
  //       <Link to="about-us">About</Link>
  //       <Link to="contact-us">Contact Us</Link>
  //     </div>
  //   </nav>
  // )