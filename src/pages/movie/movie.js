import Filter from "../../components/filter/filter";
import MovieList from "../../components/movielist/movielist";
import {useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";

const Movie = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        
    })
    return (
        <>
            <Navbar/>
            <Filter movies={movies} setMovies={setMovies}
                    moviesList={movies}/>
            <MovieList moviesprops={movies}/>
        </>
    );
}

export default Movie;

