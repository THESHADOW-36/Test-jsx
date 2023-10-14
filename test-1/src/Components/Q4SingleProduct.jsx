import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
   const [singleProductData, setSingleProductData] = useState()
   const { id } = useParams()

   useEffect(() => {
      async function getSingleProductData() {
         const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
         setSingleProductData(data)
      }
      getSingleProductData()
   }, [id])
   console.log(singleProductData)
   return (
      <div>
         {singleProductData ?
            <div>
               <div>{singleProductData.title}</div>
               <div>{singleProductData.price}</div>
               <div>{singleProductData.description}</div>
               <div>{singleProductData.rating.rate}</div>
               <div>{singleProductData.rating.count}</div>
               <div><img src={singleProductData.image} alt="" /></div>
            </div>
            :
            <div>Loading</div>
         }
      </div>
   )
}

export default SingleProduct