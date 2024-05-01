import React, { useState } from 'react'
import FilterGenre from './FilterGenre'
import FilterLanguage from './FilterLanguage'

export default function ButtonFilter( ) {
    const [genreVisible, setGenreVisible] = useState(false)
    const [languageVisible, setLanguageVisible] = useState(false)

    const genreToggle = () => {
        setGenreVisible(!genreVisible)
    }

    const languageToggle = () => {
        setLanguageVisible(!languageVisible)
    }


    return (
        <div className="bg-black">
            <button onClick={() => genreToggle()}
                style={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    margin: "6px",
                    padding: "3px 15px 3px 15px",
                    backgroundColor: "black",
                    color: "white"
                }}>Search by Genre</button>

            <button onClick={() => languageToggle()}
                style={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    margin: "6px",
                    padding: "3px 15px 3px 15px",
                    backgroundColor: "black",
                    color: "white"
                }}>Search by Language</button>

            {genreVisible ? <FilterGenre /> : ""}
            {languageVisible ? <FilterLanguage /> : ""}
        </div>
    )
}

