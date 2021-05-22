import Filter from "../../components/filter/filter";
import MovieList from "../../components/movielist/movielist";
import {useState} from "react";
import Navbar from "../../components/navbar/navbar";
import F01 from '../../assets/f01.jpg'
import F02 from '../../assets/f02.jpg'
import F03 from '../../assets/f03.jpg'
import F04 from '../../assets/f04.jpg'
import F05 from '../../assets/f05.jpg'
import F06 from '../../assets/f06.jpg'
import F07 from '../../assets/f07.jpg'

const moviesList = [
    {
        title: 'Movie 01',
        description: 'Mouvie description 01',
        rating: 1,
        posterurl: F01
    },
    {
        title: 'Movie 02',
        description: 'Mouvie description 02',
        rating: 2,
        posterurl: F02
    },
    {
        title: 'Movie 03',
        description: 'Mouvie description 03',
        rating: 4,
        posterurl: F03
    },
    {
        title: 'Movie 04',
        description: 'Mouvie description 04',
        rating: 3,
        posterurl: F04
    },
    {
        title: 'Movie 05',
        description: 'Mouvie description 05',
        rating: 4.5,
        posterurl: F05
    },
    {
        title: 'Movie 06',
        description: 'Mouvie description 05',
        rating: 4.5,
        posterurl: F06
    },
    {
        title: 'Movie 07',
        description: 'Mouvie description 05',
        rating: 4.5,
        posterurl: F07
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

