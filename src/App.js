import React from 'react';
import "./fonts/iceland-v8-latin-regular.woff";
import "./styles/theme-event.scss"
import './App.scss';
import About from "./components/pages/About/About";
import Community from "./components/pages/Community/Community";
import Listen from "./components/pages/Listen/Listen";
import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
        <Router>
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
    </>
  );
}

export default App;
