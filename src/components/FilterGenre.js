import React, { useContext, useState } from 'react'
import Data from './movieList.json'
import { counterContext } from '../context/Context';


export default function FilterGenre() {
    const value = useContext(counterContext)
    const dublicateGenreData = removeDuplicatesGenres(value.menuGenreItems);
    const [selected, setSelected] = useState([])

    const handleGenreClick = (index, genre) => {
        if (index === selected) {
            setSelected(null);
            value.filterGenreItem();
        } else {
            setSelected(index);
            value.filterGenreItem(genre);
        }
    };

    return (
        <div>
             {    
                dublicateGenreData.map((genre, index) => (
                    <button key={index} onClick={() => handleGenreClick(index, genre)}
                        style={{
                            border: "1px solid white",
                            borderRadius: "10px",
                            margin: "6px",
                            padding: "3px 15px 3px 15px",
                            backgroundColor: selected === index ? "grey" : "black",
                            color: selected === index ? "black" : "wheat"
                        }
                        }>{genre}</button>
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


const removeDuplicatesGenres = (menuGenreItems) => {

    const uniqueGenres = new Set();

    menuGenreItems.forEach((movie) => {
        movie.forEach((genre) => {
            uniqueGenres.add(genre);
        });
    });

    const uniqueGenresArray = [...uniqueGenres];
    return uniqueGenresArray;
};
