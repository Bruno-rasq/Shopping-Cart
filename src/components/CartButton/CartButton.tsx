import {AiOutlineShoppingCart} from 'react-icons/ai';
import './CartButton.css';

export function CartButton(){
  return (
    <button type="button" className="cart__button">
      <AiOutlineShoppingCart />
      <span className="cart-status">
        1
      </span>
    </button>
  )
}