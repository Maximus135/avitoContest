import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';


const Router = () =>(
    <Switch>
        <Route exact path="/" component={MainPage}/>
    </Switch>
);

export default Router;
