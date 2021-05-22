import Filter from "../../components/filter/filter";
import MovieList from "../../components/movielist/movielist";
import {useState} from "react";
import Navbar from "../../components/navbar/navbar";

const moviesList = [
    {
        title: 'Movie 01',
        description: 'Mouvie description 01',
        rating: 1,
        posterurl: 'url 01'
    },
    {
        title: 'Movie 02',
        description: 'Mouvie description 02',
        rating: 2,
        posterurl: 'url 02'
    },
    {
        title: 'Movie 03',
        description: 'Mouvie description 03',
        rating: 4,
        posterurl: 'url 03'
    },
    {
        title: 'Movie 04',
        description: 'Mouvie description 04',
        rating: 3,
        posterurl: 'url 04'
    },
    {
        title: 'Movie 05',
        description: 'Mouvie description 05',
        rating: 4.5,
        posterurl: 'url 05'
    },
    {
        title: 'Movie 06',
        description: 'Mouvie description 05',
        rating: 4.5,
        posterurl: 'url 05'
    },
    {
        title: 'Movie 07',
        description: 'Mouvie description 05',
        rating: 4.5,
        posterurl: 'url 05'
    }
]
const Movie = () => {
    const [movies, setMovies] = useState(moviesList)
    return (
        <>
            <Navbar/>
            <Filter movies={movies} setMovies={setMovies}
                    moviesList={moviesList}/>
            <MovieList moviesprops={movies}/>
        </>
    );
}

export default Movie;

