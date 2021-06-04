import './style.css'
import {Card} from "@material-ui/core";
import {useState} from "react";
import Rating from '@material-ui/lab/Rating';

const MovieCard = (props) => {
    const {movieprops} = props
    const [value, setValue] = useState(movieprops.rating);
    const URI = 'http://localhost:3001/'
    return (
        <Card className={'h-card'}>
            <div className={'img-film'}>
                <img src={URI + movieprops.poster}/>
            </div>
            <div className={'info-film'}>
                <span className={'info-title'}>{movieprops.title} </span>
                <span className={'info-description'}>{movieprops.description} </span>
            </div>
            <div className={'rating'}>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>
        </Card>
    )
}

export default MovieCard
