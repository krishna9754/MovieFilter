import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './components/movieList.json'
import { useState } from 'react';
import { counterContext } from './context/Context'
import FilterListning from './components/FilterListning'
import ButtonFilter from './components/ButtonFilter';

function App() {
  const [item, setItem] = useState(Data)
  const [isVisible, setVisible] = useState(false)
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
    <counterContext.Provider value={{item, menuGenreItems, menuLanguageItems, filterGenreItem, filterLanguageItem, setItem, isVisible, setVisible, Data}}>
    <div className='bg-black'>
      <ButtonFilter/>
      <FilterListning/>
    </div>
    </counterContext.Provider>
  );
}

export default App;
