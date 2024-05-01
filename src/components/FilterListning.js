/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useContext} from 'react'
import { counterContext } from '../context/Context'

export default function FilterListning() {
    const value = useContext(counterContext)

    return (
        <div className="App bg-black" style={{ overflow: "hidden" }}>
            <div style={{ justifyContent: "center" }}>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-2xl-5 bg-black">
                    {
                        value.item.map((movie, index) => (
                            <div key={index} style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                                <div className="bg-black w-fit" style={{ width: "18em", padding: "1em", borderRadius: "10px", border: "1px solid white", height: "35em", boxShadow: "0 0 15px white" }}>
                                    {
                                        movie.moviemainphotos && movie.moviemainphotos.length ? (
                                            <img className="card-img-top" style={{ borderRadius: "15px" }} src={movie.moviemainphotos} alt="Card image cap" />
                                        ) : null
                                    }
                                    <div className="h-56" style={{ paddingTop: '1.2em', height: "10em" }}>
                                        <p className="card-text text-white" style={{ fontWeight: "lighter" }}>{movie.moviegenres[0]}</p>
                                        <p className="card-title text-white " style={{ fontWeight: "lighter" }}><span style={{ fontWeight: "bold", textDecoration: "underLine" }}>Title</span> :-{movie.movietitle}</p>
                                        <p className="card-text text-white" style={{ fontWeight: "lighter" }}><span style={{ fontWeight: "bold", textDecoration: "underLine" }}>Language</span> :- {movie.movielanguages[0]}</p>
                                        <p className="card-text text-white" style={{ fontWeight: "lighter" }}><span style={{ fontWeight: "bold", textDecoration: "underLine" }}>Country</span> :- {movie.moviecountries[0]}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
