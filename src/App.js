import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Movie from "./pages/movie/movie";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import {useContext} from "react";
import AuthContext from "./context/auth.context";
import AddMovie from "./pages/addmovie/addmovie";

const App = () => {
    const auth = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Switch>
                {!auth.auth && (
                    <>
                        <Route exact path="/">
                            <Redirect to="/login"/>
                        </Route>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route component={Login}/>
                    </>
                )}
                {auth.auth && (
                    <>
                        <Route path="/movie" component={Movie}/>
                        <Route path="/addmovie" component={AddMovie}/>
                    </>
                )}
            </Switch>
        </BrowserRouter>
    );
}

export default App;

