import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useContext, useState} from "react";
import API from "../../api/api";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";
import AuthContext from "../../context/auth.context";

const Login = () => {
    const router = useHistory();
    const auth = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const send = () => {
        API.post('/login', {email, password})
            .then(res => {
                if (res.data.error) {
                    Swal.fire(res.data.msg, '', 'warning')
                } else {
                    auth.login();
                    localStorage.setItem('auth', 'true')
                    Swal.fire('', '', 'success')
                        .then(ok => {
                            if (ok.isConfirmed) {
                                router.push('/movie')
                            }
                        })
                }
            })
            .catch(err => {
                Swal.fire('', '', 'error')
            })
    }
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Login</h1>
                <TextField label="Email"
                           type="search"
                           value={email}
                           onChange={event => setEmail(event.target.value)}
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
export default Login
