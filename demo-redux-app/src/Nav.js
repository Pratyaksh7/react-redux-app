import React, {useContext} from 'react';
import { MoviesContext } from './MoviesContext';

function Nav() {
    const [movies, setMovies] = useContext(MoviesContext);

    return (
        <div>
            <h3>This is Pro</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}

export default Nav
