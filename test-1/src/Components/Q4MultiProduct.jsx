import React, { useEffect, useState } from "react";
import axios from "axios"
const MultiProduct = () => {
   const [product, setProduct] = useState({})


   useEffect(() => {
      async function getProduct() {
         const { data } = await axios.get("https://fakestoreapi.com/products")
         setProduct(data)
      }
      getProduct()
   }, [])
   console.log(product)

   return (
      <div>
         {product?.length ?
            <div>
               {product.map((pro) => (
                  <div>
                     <div>{pro.title}</div>
                     <div>{pro.description}</div>
                     <div>{pro.price}</div>
                     <div>{pro.rating.rate}</div>
                     <div>{pro.rating.count}</div>
                     <div><img src={pro.image} alt="" /></div>
                  </div>
               ))}
            </div>
            :
            <div>Loading</div>
         }
      </div>
   )
}

export default MultiProduct