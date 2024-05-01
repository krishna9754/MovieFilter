import React, { useContext, useState } from 'react'
import FilterGenre from './FilterGenre'
import FilterLanguage from './FilterLanguage'
import { counterContext } from '../context/Context'

export default function ButtonFilter() {
    const value = useContext(counterContext)
    const [genreVisible, setGenreVisible] = useState(false)
    const [languageVisible, setLanguageVisible] = useState(false)

    const genreToggle = () => {
        setGenreVisible(!genreVisible)
    }

    const languageToggle = () => {
        setLanguageVisible(!languageVisible)
    }

    const clearData = () => {
        value.setItem(value.Data)
        if(value.isVisible === false){
            value.setVisible(value.isVisible)
        }
    }


    return (
        <div className="bg-black">
            <button onClick={() => genreToggle()}
                style={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    margin: "6px",
                    padding: "3px 15px",
                    backgroundColor: "black",
                    color: "white"
                }}>Search by Genre</button>

            <button onClick={() => languageToggle()}
                style={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    margin: "6px",
                    padding: "3px 15px",
                    backgroundColor: "black",
                    color: "white"
                }}>Search by Language</button>

            <button onClick={() => clearData()}
                style={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    margin: "6px",
                    padding: "3px 15px",
                    backgroundColor: "black",
                    color: "white"
                }}>Clear</button>

            {genreVisible ? <FilterGenre /> : ""}
            {languageVisible ? <FilterLanguage /> : ""}
        </div>
    )
}
