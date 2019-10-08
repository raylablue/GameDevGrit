import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavBar.scss";
// Pages
import About from "../../pages/About/About";
import Community from "../../pages/Community/Community";
import Home from "../../pages/Home/Home";
import Listen from "../../pages/Listen/Listen";



function NavBar() {
    return (
        <Router>
            <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                <a href="/" className="navbar-brand d-flex w-50 mr-auto">
                    <img className="img-fluid" alt="logo" src={require("../../../GDG-LogoIcon.png")} width={80}/>
                    Game Dev Grit Podcast</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsingNavbar3">
                    {/*<span className="navbar-toggler-icon"></span>*/}
                </button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
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