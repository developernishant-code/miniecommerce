import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import { StoreContext } from "../components/Context";


const ProductDetail = () => {
    const {addtocart} = useContext(StoreContext)
    const [product,setproduct] = useState({})

    
    const { id } = useParams()

    useEffect(
       ()=>{
         axios.get(`https://dummyjson.com/products/${id}`).then(
            (response)=>{
                setproduct(response.data)
            }
        ).catch(
            (error)=>{
                setproduct({})
            }
        )
       },
       [id]
    )

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Product Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full max-w-md rounded-xl shadow-lg"
                    />
                </div>

                {/* Details */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {product.title}
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Brand: <span className="font-medium">{product.brand}</span>
                    </p>

                    <p className="text-sm text-gray-500">
                        Category: <span className="capitalize">{product.category}</span>
                    </p>

                    {/* Rating & Stock */}
                    <div className="flex items-center gap-4 mt-3">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            ⭐ {product.rating}
                        </span>
                        <span className="text-sm text-gray-600">
                            {product.stock} in stock
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mt-5">
                        <span className="text-3xl font-bold text-blue-600">
                            ${product.price}
                        </span>
                        <span className="ml-3 text-sm text-red-500">
                            {product.discountPercentage}% OFF
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-4">
                        <button onClick={()=>addtocart(product.id)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                            Add to Cart
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                            Buy Now
                        </button>
                    </div>

                    {/* Extra Info */}
                    <div className="mt-6 text-sm text-gray-500 space-y-1">
                        <p>🚚 {product.shippingInformation}</p>
                        <p>🛡 {product.warrantyInformation}</p>
                        <p>↩ {product.returnPolicy}</p>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="mt-14">
                <h2 className="text-2xl font-bold mb-6">
                    Customer Reviews
                </h2>

                <div className="grid gap-6">
                    {product?.reviews?.map((review, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-5 bg-gray-50"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">
                                    {review.reviewerName}
                                </h3>
                                <span className="text-yellow-500">
                                    ⭐ {review.rating}
                                </span>
                            </div>

                            <p className="text-gray-600 mt-2">
                                {review.comment}
                            </p>

                            <p className="text-xs text-gray-400 mt-1">
                                {new Date(review.date).toDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
