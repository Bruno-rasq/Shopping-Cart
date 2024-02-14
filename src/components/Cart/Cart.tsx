import './Cart.css';
import { CartItem } from '../CartItems/CartItem';
import { useContext } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

export function Cart(){

  const { cartItems, isCartVisible } = useContext(AppContext) as { cartItems: any[], isCartVisible: boolean };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>

      <div className="cart-items">

        { cartItems.map(item => <CartItem data={item} key={item.id}/>)}
        
      </div>
      
      <div className="cart-resume">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  )
}