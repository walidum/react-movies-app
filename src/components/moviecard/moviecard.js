import './style.css'
import {Card} from "@material-ui/core";
import FilmImg from '../../assets/film.jpg'

const MovieCard = (props) => {
    const {movieprops} = props
    return (
        <Card className={'h-card'}>
            <div className={'img-film'}>
                <img src={FilmImg}/>
            </div>
            <div className={'info-film'}>
                <span>{movieprops.title} </span>
                <span>{movieprops.description} </span>
            </div>
        </Card>
    )
}

export default MovieCard
