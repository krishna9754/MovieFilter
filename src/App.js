import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './components/movieList.json'
import { useState } from 'react';
import ButtonFilter from './components/ButtonFilter';
import FilterListning from './components/FilterListning';
import { counterContext } from './context/Context';

function App() {

  const [item, setItem] = useState(Data)
  const menuGenreItems = [...new Set(Data.map((dataGenreItem) => dataGenreItem.moviegenres))]
  const menuLanguageItems = [...new Set(Data.map((dataLanguageItem) => dataLanguageItem.movielanguages))]
  const filterGenreItem = (genres) => {
    const newItems = Data.filter((newVal) => newVal.moviegenres[0] === genres)
    setItem(newItems)
  }
  const filterLanguageItem = (languages) => {
    const newLanguageItems = Data.filter((newVal) => newVal.movielanguages[0] === languages)
    setItem(newLanguageItems)
  }



  return (
    <div className='bg-black'>
      <counterContext.Provider value={{menuGenreItems, menuLanguageItems, filterGenreItem, filterLanguageItem, setItem, item}}>
        <ButtonFilter />
        <FilterListning item={item} />
      </counterContext.Provider>
    </div>
  );
}

export default App;