import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Card'
import Loader from '../components/Loader'

export default function Home() {
  const [products, showproducts] = useState([])
  const [loading, setloading] = useState(false)



  const fetchdata = async () => {
    setloading(true)
    let response = await fetch("https://dummyjson.com/products")
    let data = await response.json()
    // console.log(data)
    showproducts(data.products)
    setloading(false)
  }
  useEffect(
    () => {
      fetchdata()
    },
    []
  )
  if (loading) return <Loader />
  return (
    <>
      <h1 className='text-center my-[10px] font-bold text-2xl'>Top Products</h1>
      <div className='grid p-10 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 mx-auto max-w-[1300px] flex gap-3 my-10'>
        {

          products.map((prod) => {
            return (
              <ProductCard title={prod.title} id={prod.id} image={prod.thumbnail} />
            )
          })
        }
      </div>
    </>

  )
}
