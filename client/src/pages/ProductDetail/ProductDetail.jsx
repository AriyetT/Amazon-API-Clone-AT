import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css"
import axios from 'axios';
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Products/Product.Cart';


function ProductDetail() {
  const { productId } = useParams();
  // console.log(productId) 
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`${productUrl}products/${productId}`)
        .then((res) => {
          // console.log(res.data)
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, [productId]);

  return (
    <LayOut>
      <ProductCard
      product={product}
      />
    </LayOut>
    
  )
}

export default ProductDetail