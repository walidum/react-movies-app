import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useState} from "react";

const AddMovie = () => {
    const [title, setTitle] = useState('')
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
                           type="search"
                           variant="outlined"/>
                <TextField label="Rating"
                           type="search"
                           variant="outlined"/>
                <Button variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default AddMovie
