import React from 'react';
import {Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEdit from './pages/AddEdit';
import Main from './pages/Main';


function Photo(props) {
    const match = useRouteMatch();
    console.log({match});
    return (
        <Switch>
            <Route exact path={match.url} component={Main} />

            <Route path={`${match.url}/add`} component={AddEdit} />
            <Route path={`${match.url}/:photoId`} component={AddEdit} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;