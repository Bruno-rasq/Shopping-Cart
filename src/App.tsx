import React from 'react';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products';

import './index.css';

export function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}