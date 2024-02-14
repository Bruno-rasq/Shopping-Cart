import { useEffect, useContext } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading } from '../Loading/Loading';
import FetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

import './Products.css';

export function Products(){

  const { products, setProducts, loading, setLoading } = useContext(AppContext) as { products: any[], setProducts: React.Dispatch<any[]>, loading: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>> };
  

  useEffect(() => {
    FetchProducts('notebook')
    .then((response) => {
      setProducts(response);
      setLoading(false)
    });
  }, []);

  
  return (
    
      (loading && <Loading /> ) || (
      <section className="container products">
        
        {products.map((product) => <ProductCard data={product} key={product.id} />)}
        
      </section>)
  )
}