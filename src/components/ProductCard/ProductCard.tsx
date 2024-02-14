import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { formatCurrency } from '../../utils/formatCurrency';
import { useContext } from 'react';
import  AppContext from '../../context/AppContext';

interface contentProps {
  data: {
    title: string;
    thumbnail: string;
    price: number;
  }
}

export function ProductCard({ data }: contentProps){

  const {title, thumbnail, price} = data;


  const { setCartItems, cartItems } = useContext(AppContext) as { cartItems: any[], setCartItems: React.Dispatch<React.SetStateAction<any[]>> };


  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  }

  let thumb = thumbnail.replace(/\w\.jpg/gi, "W.jpg")
  
  return (
    <section className= "product-card">

      <img src={thumb}
        alt="product"
        className="card__image"
      />
      
      <div className="card__content">

        <h2 className="card__price">
          {formatCurrency(price, 'BRL')}
        </h2>

        <h3 className="card__title">
          {title}
        </h3>
        
      </div>

      <button type="button" className="button__add-cart"
        onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}