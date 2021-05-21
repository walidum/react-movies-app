import './style.css'
import {Button, TextField} from "@material-ui/core";
import {useEffect, useState} from "react";

const Filter = (props) => {
    const {movies, setMovies, moviesList} = props;
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const filter = () => {
        if (title) {
            const newMovies = moviesList.filter(film => film.title.includes(title))
            setMovies(newMovies)
        }
    }
    useEffect(() => {
        filter();
    }, [title])
    return (
        <div className={'h-filter'}>
            <TextField label="Title"
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                       variant="outlined"/>
            <TextField label="Rating"
                       value={rating}
                       onChange={event => setRating(event.target.value)}
                       variant="outlined"/>
            <Button onClick={filter} variant="contained"
                    color="primary">
                Filter
            </Button>
        </div>
    )
}
export default Filter
