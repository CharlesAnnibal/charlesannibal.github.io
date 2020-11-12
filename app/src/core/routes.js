import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home'
import BlogHome from '../pages/Blog/Home/Home'


export default function Routes() {
    return (
        <BrowserRouter basename={ROUTER_BASENAME}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={BlogHome} />
            </Switch>
        </BrowserRouter>
    )
}