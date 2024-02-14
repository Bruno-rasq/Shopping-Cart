import AppContext from './AppContext';
import { ReactNode, useState } from 'react';

export function Provider({ children }: {children:ReactNode}){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = {
    products,
    setProducts,
    loading, 
    setLoading
  }
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}