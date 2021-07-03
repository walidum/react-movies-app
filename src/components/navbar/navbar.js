import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import AuthContext from "../../context/auth.context";
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const auth = useContext(AuthContext)
    console.log(auth.auth)
    const router = useHistory()
    const classes = useStyles();
    const logout = () => {
        auth.logout();
        localStorage.setItem('auth', 'false')
        localStorage.setItem('user', null)
        router.push('/login')
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Movies
                </Typography>
                {!auth.auth && (
                    <>
                        <Button onClick={() => router.push('/register')} color="inherit">Register</Button>

                        <Button onClick={() => router.push('/login')} color="inherit">Login</Button>
                    </>
                )}
                {auth.auth && (
                    <>
                        <LockIcon style={{cursor: 'pointer'}} onClick={() => router.push('/reset')}> </LockIcon>
                        <Button onClick={logout} color="inherit">Logout</Button>
                        <Button onClick={() => router.push('/addmovie')} color="inherit">Add movie</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;
