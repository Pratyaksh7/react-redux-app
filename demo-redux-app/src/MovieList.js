import React, {useContext, useState} from 'react'
import Movie from './Movie';
import {MoviesContext} from './MoviesContext';

function MovieList() {
    const [movies, setMovies] = useContext(MoviesContext);
    return (
        <div>
            <h3>This is movielist component</h3>
            
            {movies.map((movie)=>{
                return <Movie name={movie.name} price={movie.price} key={movie.id} />
            })}
        </div>
    )
}

export default MovieList
