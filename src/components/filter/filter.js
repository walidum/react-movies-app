import './style.css'
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";
import Swal from 'sweetalert2'

const Filter = (props) => {
    const {movies, setMovies} = props;

    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const filter = () => {
        Swal.fire(title + ' ' + rating, '', 'info')
    }
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
