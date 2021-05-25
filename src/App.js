import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound';
import SignUp from './components/Signup/Signup';
import HomePage from './Pages/HomePage/HomePage';
import Players from './Pages/Players/Players';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Redirect from="/" to="/login" /> */}
                <Route exact path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={HomePage} />
                <Route path="/players" component={Players} />
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;
