import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Context from './components/Context';
import Products from './components/Products';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active nav-item' : '';
                return (
                    <li className={active}>
                        <Link to={to} className="nav-link">
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <ul className="navbar-nav">
                        <MenuLink to="/" label="Home" activeOnlyWhenExact={true} />
                        <MenuLink to="/about" label="About" activeOnlyWhenExact={false} />
                        <MenuLink to="/context" label="Context" activeOnlyWhenExact={false} />
                        <MenuLink to="/product" label="Product" activeOnlyWhenExact={false} />

                        {/* <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/context">Context</NavLink>
                        </li> */}
                    </ul>
                </nav>
            </div>
            <Route>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/context">
                        <Context />
                    </Route>
                    <Route path="/product">
                        {({match})=>{
                            return <Products match={match} />
                        }}
                    </Route>
                </Switch>
            </Route>
        </Router>

    );
}

export default App;
