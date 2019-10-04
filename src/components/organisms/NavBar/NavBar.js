import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Pages
import About from "../../pages/About/About";
import Community from "../../pages/Community/Community";
import Home from "../../pages/Home/Home";
import Listen from "../../pages/Listen/Listen";



function NavBar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/community">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listen">Listen</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/community">
                    <Community/>
                </Route>
                <Route path="/listen">
                    <Listen/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};


export default NavBar;