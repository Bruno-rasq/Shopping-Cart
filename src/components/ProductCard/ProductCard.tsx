import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { formatCurrency } from '../../utils/formatCurrency';

interface contentProps {
  data: {
    title: string;
    thumbnail: string;
    price: number;
  }
}

export function ProductCard({ data }: contentProps){

  const {title, thumbnail, price} = data;

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

      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}