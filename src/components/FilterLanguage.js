import React, { useContext, useState } from 'react'
import Data from './movieList.json'
import { counterContext } from '../context/Context';


export default function FilterLanguage() {
    const value = useContext(counterContext)
    const dublicateLanguageData = removeDuplicatesLanguage(value.menuLanguageItems);
    const [selected, setSelected] = useState()

    const handleLanguageClick = (index, language) => {
        if (index === selected) {
            setSelected(null);
            value.filterLanguageItem();
        } else {
            setSelected(index);
            value.filterLanguageItem(language);
        }
    };

    return (
        <div>
            {
                dublicateLanguageData.map((valLanguage, index) => (
                    <button key={index} onClick={() => handleLanguageClick(index, valLanguage)}
                        style={{
                            border: "1px solid white",
                            borderRadius: "10px",
                            margin: "6px",
                            padding: "3px 15px 3px 15px",
                            backgroundColor: selected === index ? "grey" : "black",
                            color: selected === index ? "black" : "wheat"
                        }
                        }>{valLanguage}</button>
                ))
            }
            <button onClick={() => value.setItem(Data)}
                style={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    margin: "6px",
                    padding: "3px 15px 3px 15px",
                    backgroundColor: "black",
                    color: "wheat"
                }
                }>All</button>
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
