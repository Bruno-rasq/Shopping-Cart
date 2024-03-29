import AppContext from './AppContext';
import { ReactNode, useState } from 'react';

export function Provider({ children }: {children:ReactNode}){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading, 
    setLoading,
    cartItems, 
    setCartItems, 
    isCartVisible, 
    setIsCartVisible
  }
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}