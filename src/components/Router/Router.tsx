import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import NewsPage from '../NewsPage/NewsPage';

const Router = () =>(
    <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path='/news/:newsId' component={NewsPage}/>
    </Switch>
);

export default Router;
