import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

export const MovieProvider = (props) => { // its work is to hold the data
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 12323
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 12325
        },
        {
            name: 'Inception',
            price: '$10',
            id: 12327
        },
    ]);

    return (
        <MoviesContext.Provider value={[movies, setMovies]}>   
            {/* we are providing this context to every other component  */}
            {props.children}
        </MoviesContext.Provider>
    )
}