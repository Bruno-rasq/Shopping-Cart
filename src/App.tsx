import React from 'react';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products';
import { Provider } from './context/Provider';
import { Cart } from './components/Cart/Cart';

import './index.css';

export function App() {
  return (

    <Provider>
      
      <Header />
      <Products />
      <Cart />
      
    </Provider>
    
  );
}
