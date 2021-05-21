import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Movie from "./pages/movie/movie";
import AddMovie from "./pages/addmovie/addmovie";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/movie" component={Movie}/>
                <Route path="/addmovie" component={AddMovie}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

