import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Secret from './Secret';

const App = () => (
    <BrowserRouter>
        <div className="footer">
            <NavLink activeStyle={{ color: 'red' }} to="/home" exact>Home page</NavLink>
            <NavLink to="/signup">Signup page</NavLink>
            <NavLink to="/login">Login page</NavLink>
            <NavLink to="/secret">Secret page</NavLink>
        </div>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />

            <Route exact path="/secret" render={() => (
                (window.localStorage.getItem('rr_login') == "login") ? (
                    <Secret />
                ) : (
                    <Redirect exact from="/secret" to="/login" />
                    )
            )}>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;
