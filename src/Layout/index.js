import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './../Pages/home'
import Products from './../Pages/products'
import About from '../Pages/aboutUs'
import ContactUs from './../Pages/contactUs'
import Header from './header'
import Footer from './footer'
import SignUp from './../Pages/signUp'
import Login from './../Pages/login'
import Experiment from './../Pages/experiment'
import ProductPage from '../Pages/productPage';

function index() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="experiment" element={<Experiment />} />
            <Route path="products/:productID" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );

}

export default index
