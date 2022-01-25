import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../Components/productsCard'
import './../backend/products'
import { getProducts } from './../backend/products'

// const cards = []

function Products() {

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
      <p className="flex w-full justify-center text-7xl font-semibold lg:pt-28 lg:px-10 pt-14 px-6">Products</p>

      <p className="text-2xl font-medium lg:pt-8 lg:px-16 pt-4 px-8">Keebs</p>
      <div class="grid xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8 gap-x-6 gap-y-6 lg:grid-cols-3 lg:px-16 lg:pt-8 px-8 pt-4 md:grid-cols-2 grid-cols-1">
        {keyboardList.map((keyboard) => {
          return (
            <Link to={`/products/${keyboard.id}`}>
              <Cards image={keyboard.image} name={keyboard.name} price={keyboard.price} color={keyboard.color} />
            </Link>
          );
        })}
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
    </div>
  )
}

export default Products
