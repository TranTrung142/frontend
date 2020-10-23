import React, { Component, Suspense } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
// lazyload - code splitting
import NotFound from './components/NotFound';
import Header from './components/Header';
import { Button } from 'reactstrap';

const Photo = React.lazy(() => import('./features/Photo'));


function App(props) {
    return (
        <div>
            <Suspense fallback={<div>loadinggg...</div>}>
                <Router>
                    {/* header */}
                    <Header />
                    <Switch>
                        <Redirect exact from="/" to="/photos" />

                        <Route path="/photos" component={Photo} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
}
export default App;
