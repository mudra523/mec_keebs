import React, { useEffect, useState } from 'react'
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import app from './../backend/firebase'
import { useParams } from 'react-router-dom';
import { getProducts } from '../backend/products';

const db = getFirestore(app);


function ProductPage() {

  const { productID } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const num = Math.floor((Math.random() * 5));
  const star = new Array(num);
  const notStar = new Array(5 - num);

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = () => {
    const path = `products`;
    onSnapshot(doc(db, path, productID), (doc) => {
      setProductDetails(doc.data())
    })
    console.log(productDetails)
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div></div>
    )
  }

  return (
    <div className="pt-20">
      <div className="inset-0 overflow-y-auto" role="dialog" aria-modal="true">
        <div className="flex text-center md:block md:px-2 lg:px-4">
          <div className="flex text-base text-left transform transition px-16 md:inline-block md:px-4 md:align-middle">
            <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-2 overflow-hidden sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-12 lg:col-span-6">
                  <img src={productDetails.image} alt="Two each of gray, white, and black shirts arranged on table." className="object-center object-cover" />
                </div>
                <div className="sm:col-span-8 lg:col-span-6">
                  <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                    {productDetails.name}
                  </h2>

                  <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">Product information</h3>

                    <p className="text-2xl text-gray-900">
                      {`₹ ${productDetails.price}`}
                    </p>

                    <div className="mt-6">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {console.log(star, notStar, 'print')}
                          {star.fill(1, 0, num).map((e) => {
                            return (
                              <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            )
                          })}

                          {notStar.fill(1, 0, 5 - num).map((e) => {
                            return (
                              <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            )
                          })}
                        </div>
                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{num * (6)} reviews</a>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">Product options</h3>

                    <form>
                      <div>
                        <h4 className="text-lg text-gray-900 font-semibold">Color</h4>

                        <fieldset className="mt-2">
                          <div className="flex items-center space-x-3">
                            {productDetails.color}
                          </div>
                        </fieldset>
                      </div>

                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg text-gray-900 font-semibold">Switch Type</h4>
                          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">{productDetails.switch}</a>
                        </div>

                      </div>

                      <button type="submit" className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
