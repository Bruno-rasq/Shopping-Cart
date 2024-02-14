import { BsCartDashFill } from 'react-icons/bs';
import { formatCurrency } from '../../utils/formatCurrency';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

import './CartItem.css';

interface CartItemProps {
  data: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
  }
}

export function CartItem({ data }: CartItemProps ){

  const { cartItems, setCartItems } = useContext(AppContext) as { cartItems: any[], setCartItems: React.Dispatch<React.SetStateAction<any[]>> };
  
  
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter(item => item.id !== id);
    setCartItems(updateItems);
  }

  
  return (
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="imagem produto"
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button type="button" className="cart__remove-item" onClick={handleRemoveItem}>
        <BsCartDashFill />
        </button>
      </div>
    </section>
  )
}