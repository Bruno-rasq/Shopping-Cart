import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import FetchProducts from '../../api/fetchProducts';

import './Products.css';

export function Products(){

  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProducts('iphone')
    .then((resp) => {
      setProducts(resp);
    });
  }, []);

  
  return (
    <section className="
      container products">

      {
        products.map((product) => <ProductCard data={product} key={product.id} />)
      }
      
    </section>
  )
}