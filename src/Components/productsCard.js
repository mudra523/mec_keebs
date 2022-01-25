import React from 'react'

function productsCard(props) {
  const { image, price, color, name } = props

   return (
    <div className="group p-6 relative rounded-lg">
      <div className="w-full h-52 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-40 lg:aspect-none shadow group-hover:shadow-xl">
        <img src={image ? image : "https://picsum.photos/200"} alt="Front of men's Basic Tee in black." className="transform w-full h-full object-center object-cover lg:w-full lg:h-full group-hover:opacity-75" />
      </div>
      <div className="mt-3 group-hover:underline">
        <p className="text-lg text-gray-700 font-semibold">{name}</p>
      </div>
      <div className="flex items-baseline justify-between">
        <p className="mt-0.5 text-sm text-gray-500">{color}</p>
        <p className="text-lg font-medium text-gray-900">{`₹ ${price}`}</p>
      </div>
    </div>
  )
}

export default productsCard
