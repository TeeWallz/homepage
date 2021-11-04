import React from 'react';
import {BrowserRouter, Switch, withRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import StartPage from "../components/StartPage";


const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route        exact path="/"  component={StartPage}/>
        </Switch>
    </BrowserRouter>
);

export default Router;