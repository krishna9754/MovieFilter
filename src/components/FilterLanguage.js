
import React, { useContext, useState } from 'react'
import Data from './movieList.json'
import { counterContext } from '../context/Context';


export default function FilterLanguage({ menuLanguageItems, setItem, filterLanguageItem }) {
    const value = useContext(counterContext)
    const dublicateLanguageData = removeDuplicatesLanguage(value.menuLanguageItems);
    const [selected, setSelected] = useState()

    const handleLanguageClick = (index, language) => {
        if (index === selected) {
            setSelected(null);
            value.filterLanguageItem(null);
        } else {
            setSelected(index);
            value.filterLanguageItem(language);
        }
        value.setVisible(!value.isVisible)
    };

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", margin: "0px 50px" }}>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 bg-black pb-2 mb-3 border-b-2">
                    {
                        dublicateLanguageData.map((languageVal, index) => (

                            <form >
                                <input type='checkbox' checked={value.isVisible} onClick={() => handleLanguageClick(index, languageVal)} />
                                <label className='text-white'> {languageVal}</label>
                            </form>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


const removeDuplicatesLanguage = (menuLanguageItems) => {

    const uniqueLanguage = new Set();

    menuLanguageItems.forEach((movie) => {
        movie.forEach((lang) => {
            uniqueLanguage.add(lang);
        });
    });

    const uniqueLanguageArray = [...uniqueLanguage];
    return uniqueLanguageArray;
};
