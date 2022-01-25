import React from 'react'
import { updateProductDatabase } from './../backend/products'
import { keyboards } from './../backend/products'

function Footer() {

  const dataBaseUpdate = () => {
    updateProductDatabase()
  }

  // const printArr = () => console.log(keyboards)


  return (
    <div className="bg-trueGray-900 flex mt-12 h-16 w-full relative items-center justify-center">
      <p className="text-orange-100 text-2xl font-semibold">meckeebs © 2021</p>
      {/* <button onClick={dataBaseUpdate} className="bg-white text-black rounded">
        Update
      </button> */}
    </div>
  )
}

export default Footer