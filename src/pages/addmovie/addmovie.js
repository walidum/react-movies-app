import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useState} from "react";
import Swal from "sweetalert2";

const AddMovie = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [poster, setPoster] = useState('')
    const send = () => {
        Swal.fire('', '', 'success')
    }
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Add new movie</h1>
                <TextField label="Title"
                           type="search"
                           value={title}
                           onChange={event => setTitle(event.target.value)}
                           variant="outlined"/>
                <TextField label="Description"
                           value={description}
                           onChange={event => setDescription(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Rating"
                           value={rating}
                           onChange={event => setRating(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Poster"
                           value={poster}
                           onChange={event => setPoster(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <Button onClick={send} variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default AddMovie
