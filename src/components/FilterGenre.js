import React, { useContext, useState } from 'react'
import { counterContext } from '../context/Context';


export default function FilterGenre() {
    const value = useContext(counterContext)
    const dublicateGenreData = removeDuplicatesGenres(value.menuGenreItems);
    const [selected, setSelected] = useState([])

    const handleGenreClick = (index, genre) => {
        if (selected === index) {
            setSelected(null);
            value.filterGenreItem(null);
        } else {
            setSelected(index);
            value.filterGenreItem(genre);

        }
        value.setVisible(!value.isVisible)
    };

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center" }}>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 bg-black pb-2 mb-3 border-b-2">
                    {
                        dublicateGenreData.map((genreVal, index) => (

                            <form >
                                <input type='checkbox' onClick={() => handleGenreClick(index, genreVal)} />
                                <label className='text-white'> {genreVal}</label>
                            </form>
                        ))
                    }
                </div>
            </div>
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
