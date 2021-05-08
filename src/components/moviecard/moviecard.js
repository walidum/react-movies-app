import './style.css'
import {Card} from "@material-ui/core";


const MovieCard = ()=>{
    return(
        <Card className={'h-card'}>
            <span>Title : </span>
            <span>Description : </span>
            <span>PosterUrl :</span>
            <span>Rating</span>
        </Card>
    )
}

export default MovieCard
