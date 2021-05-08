import './style.css'
import MovieCard from "../moviecard/moviecard";

const MovieList = ()=>{
    return(
       <div className={'h-container'}>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
       </div>
    )
}
export default MovieList
