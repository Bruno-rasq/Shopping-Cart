import {AiOutlineShoppingCart} from 'react-icons/ai';
import './CartButton.css';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

export function CartButton(){

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext) as { cartItems: any[], isCartVisible: boolean, setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>> };
  
  
  return (
    <button type="button" className="cart__button" onClick={() => setIsCartVisible(!isCartVisible) }>
      <AiOutlineShoppingCart />

      { cartItems.length > 0 && 
      <span className="cart-status">
        {cartItems.length}
      </span>}
      
    </button>
  )
}