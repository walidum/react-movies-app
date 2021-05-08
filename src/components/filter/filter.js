import './style.css'
import {Button, TextField} from "@material-ui/core";


const Filter = ()=>{
    return(
        <div className={'h-filter'}>
            <TextField  label="Title"
                        variant="outlined" />
            <TextField  label="Rating"
                        variant="outlined" />
            <Button variant="contained"
                    color="primary">
                Filter
            </Button>
        </div>
    )
}
export default Filter
