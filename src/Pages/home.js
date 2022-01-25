import React, { useState, useEffect } from 'react'
import { getProducts } from './../backend/products'
import Carousel from '../Components/carousel'
import Cards from '../Components/productsCard'
import { Link } from 'react-router-dom'

function Home() {

  const [loading, setLoading] = useState(true)
  const [keyboardList, setKeyboardList] = useState([])
  const [keyCapList, setKeyCapList] = useState([])
  const [switchesList, setSwitchesList] = useState([])

  useEffect(() => {
    getKeyboardList()
    getKeyCapList()
    getSwitchesList()
  }, [])

  const getKeyboardList = async () => {
    const keyList = await getProducts(['Keyboard'])
    setKeyboardList(keyList)
  }

  const getKeyCapList = async () => {
    const keyList = await getProducts(['Keycaps'])
    setKeyCapList(keyList)
  }

  const getSwitchesList = async () => {
    const keyList = await getProducts(['Key Switches'])
    setSwitchesList(keyList)
    setLoading(false)
  }

  if (loading) { return (<div />) }

  return (
    <div>
      <div className="flex justify-center relative w-full h-screen z-0">
        <button className="z-10 absolute border border-warmGray-200 bottom-20 text-white px-3 py-1">
          <a href="products">Buy Now</a>
        </button>
        <Carousel />
      </div>

      <div>
        <p className="text-4xl font-semibold lg:pt-10 lg:px-10 pt-5 px-6">Products</p>
        <p className="text-2xl font-medium lg:pt-8 lg:px-16 pt-4 px-8">Keebs</p>
        <div class="grid xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8 gap-x-6 gap-y-6 lg:grid-cols-3 lg:px-16 lg:pt-8 px-8 pt-4 md:grid-cols-2 grid-cols-1">
          {keyboardList.map((keyboard) => {
            return (
              <Link to={`/products/${keyboard.id}`}>
                <Cards image={keyboard.image} name={keyboard.name} price={keyboard.price} color={keyboard.switch} />
              </Link>
            );
          })}
        </div>
        <div className="flex w-full justify-end lg:pt-10 lg:px-16 pt-5 px-8">
          <button className="py-2 px-4 bg-gray-900 text-gray-200 rounded-sm">Expxore More</button>
        </div>

        <p className="text-2xl font-medium lg:pt-8 lg:px-16 pt-4 px-8">KeyCaps</p>
        <div class="grid xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8 gap-x-6 gap-y-6 lg:grid-cols-3 lg:px-16 lg:pt-8 px-8 pt-4 md:grid-cols-2 grid-cols-1">
          {keyCapList.map((keyCaps) => {
            return (
              <Link to={`/products/${keyCaps.id}`}>
                <Cards image={keyCaps.image} name={keyCaps.name} price={keyCaps.price} color={keyCaps.color} />
              </Link>
            );
          })}
        </div>
        <div className="flex w-full justify-end lg:pt-10 lg:px-16 pt-5 px-8">
          <button className="py-2 px-4 bg-gray-900 text-gray-200 rounded-sm">Expxore More</button>
        </div>

        <p className="text-2xl font-medium lg:pt-8 lg:px-16 pt-4 px-8">Switches</p>
        <div class="grid xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8 gap-x-6 gap-y-6 lg:grid-cols-3 lg:px-16 lg:pt-8 px-8 pt-4 md:grid-cols-2 grid-cols-1">
          {switchesList.map((switches) => {
            return (
              <Link to={`/products/${switches.id}`}>
                <Cards image={switches.image} name={switches.name} price={switches.price} color={switches.switch} />
              </Link>
            );
          })}
        </div>
        <div className="flex w-full justify-end lg:pt-10 lg:px-16 pt-5 px-8">
          <button className="py-2 px-4 bg-gray-900 text-gray-200 rounded-sm">Expxore More</button>
        </div>
      </div>

    </div>
  )
}

export default Home
