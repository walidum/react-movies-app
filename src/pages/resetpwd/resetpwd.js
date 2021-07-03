import './resetpwd.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import API from "../../api/api";
import Swal from "sweetalert2";

const ResetPwd = () => {
    const router = useHistory();
    const [password, setPassword] = useState()
    const [confirmePassword, setConfirmePassword] = useState()
    const send = () => {
        if (!password || !confirmePassword) {
            Swal.fire('password required !', '', 'warning')
            return;
        }
        if (password != confirmePassword) {
            Swal.fire("password don't match !", '', 'warning')
            return;
        }
        const userS = localStorage.getItem('user')
        console.log(userS)
        const user = JSON.parse(userS)
        console.log(user)
        const params = {
            password,
            _id: user.data._id
        }
        console.log(params)
        API.post('/restpwd', params)
            .then(ok => {
                Swal.fire('', '', 'success').then(o => {
                    if (o.isConfirmed) {
                        router.push('/login')
                    }
                })
            })
            .catch(err => {
                Swal.fire('', '', 'error')
            })
    }
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Reset password</h1>

                <TextField label="Nouveau mot de passe"
                           alue={password}
                           onChange={event => setPassword(event.target.value)}
                           variant="outlined"/>
                <TextField label="confirmer mot de passe"
                           value={confirmePassword}
                           onChange={event => setConfirmePassword(event.target.value)}
                           variant="outlined"/>
                <Button onClick={send} variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default ResetPwd
