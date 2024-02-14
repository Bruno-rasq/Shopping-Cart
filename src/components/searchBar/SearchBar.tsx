import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import { useState, SyntheticEvent, useContext } from 'react';
import  FetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';


export function SearchBar(){

  const { setProducts, setLoading } = useContext(AppContext) as { setProducts: React.Dispatch<any[]>, setLoading: React.Dispatch<React.SetStateAction<boolean>> };
  
  
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (e:SyntheticEvent ) => {
    e.preventDefault()
    setLoading(true)

    const products = await FetchProducts(searchValue);
    setSearchValue('')
    setProducts(products)
    setLoading(false)
  }
  
  return (
    <form className="search-bar"
      onSubmit={handleSearch}>
        <input 
          type="search"
          value={searchValue}
          placeholder="Buscar produtos" 
          className="search__input"
          required
          onChange={({ target }) => {
            setSearchValue(target.value);
          }}/>
      
      
        <button 
          type="submit" 
          className="search__button">
          <BsSearch />
        </button>
    </form>
  )
};