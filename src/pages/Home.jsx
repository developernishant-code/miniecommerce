import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Card'
import Loader from '../components/Loader'
import { Link, useParams } from 'react-router-dom'

export default function Home() {
  const { slug } = useParams()
  const [products, showproducts] = useState([])
  const [loading, setloading] = useState(false)
  const [categories, setcategories] = useState([])


  const fetchdata = async () => {
    let API = ""

    if (slug) {
      API = `https://dummyjson.com/products/category/${slug}`
    } else {
      API = "https://dummyjson.com/products"
    }

    setloading(true)

    try {
      let response = await fetch(API)
      let data = await response.json()
      showproducts(data.products)
    } catch (error) {
      console.error(error)
    }

    setloading(false)
  }

  useEffect(() => {
    fetchdata()
  }, [slug])


  const categoriesfilter = async () => {
    let respose = await fetch("https://dummyjson.com/products/categories")
    let data = await respose.json()
    setcategories(data)
  }
  useEffect(
    () => {
      categoriesfilter()
    },
    [slug]
  )
  if (loading) return <Loader />
  return (
    <div className='max-w-[1500px] mx-auto grid grid-cols-6'>
      <div className='col-span-1'>
        <ul className=''>
          <h2 className='font-bold py-3'>Filter by Category</h2>
          {
            categories.map((data, index) => {
              return (
                <Link to={`/${data.slug}`}>
                  <li className='w-full my-3 bg-blue-500 p-3 rounded-2xl text-center font-bold'>{data.name}</li>
                </Link>
              )
            })
          }
        </ul>
      </div>
      <div className='col-span-5'>

        <div className='grid p-10 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-3 '>
          {

            products.map((prod, index) => {
              return (
                <ProductCard title={prod.title} key={index} id={prod.id} image={prod.thumbnail} />
              )
            })
          }
        </div>
      </div>

    </div>

  )
}
