import './register.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useState} from "react";
import API from "../../api/api";
import Swal from "sweetalert2";

const Register = () => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const send = () => {
        const parms = {nom, prenom, email, password}
        API.post('/register', parms)
            .then(ok => {
                Swal.fire('', '', 'success')
            })
            .catch(err => {
                Swal.fire('', '', 'error')
            })
    }
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Inscription</h1>
                <TextField label="Nom"
                           value={nom}
                           onChange={event => setNom(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Prénom"
                           value={prenom}
                           onChange={event => setPrenom(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Email"
                           value={email}
                           onChange={event => setEmail(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           value={password}
                           onChange={event => setPassword(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <Button onClick={send} variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default Register
