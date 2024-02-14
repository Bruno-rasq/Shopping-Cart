import { SearchBar } from '../searchBar/SearchBar';
import { CartButton } from '../CartButton/CartButton';
import './Header.css';

export function Header(){
  return (
    <header className="header">
      <div className="container">
        
        <SearchBar />
        <CartButton />
        
      </div>
    </header>
  )
}