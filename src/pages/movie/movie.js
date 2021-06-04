import Filter from "../../components/filter/filter";
import MovieList from "../../components/movielist/movielist";
import {useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import API from "../../api/api";

const Movie = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        API.get('/all')
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
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

